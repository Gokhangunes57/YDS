import { neon } from '@neondatabase/serverless';

export default async function handler(req, res) {
    if (!process.env.DATABASE_URL) {
        console.error('DATABASE_URL is missing!');
        return res.status(500).json({ error: 'DATABASE_URL environment variable is not set in Vercel.' });
    }

    const sql = neon(process.env.DATABASE_URL);

    // Vercel standardizes the method and query
    const method = req.method;
    const { action, userId: queryUserId } = req.query;

    console.log(`API Request: ${method} ${action} for ${queryUserId}`);

    try {
        // Tablolar zaten oluşturulduğu için her seferinde kontrol etmeye gerek yok.
        // Bu, Vercel fonksiyonlarının performansını artırır.


        // GET - Tüm kelimeleri al
        if (method === 'GET' && action === 'getWords') {
            const words = await sql`SELECT * FROM words ORDER BY word ASC`;

            // Kolon isimlerindeki i/ı farklarını normalize et
            const normalizedWords = words.map(w => ({
                word: w.word,
                type: w.type,
                turkish: w.turkish,
                example: w.example,
                turkishExample: w.turkish_example || w.turkısh_example || w.turkishExample,
                suffix: w.suffix
            }));

            console.log(`Successfully fetched ${normalizedWords.length} words.`);
            return res.status(200).json({
                success: true,
                data: normalizedWords
            });
        }

        // GET - Kullanıcı ilerlemesini al
        if (method === 'GET' && action === 'getProgress') {
            const uid = queryUserId;
            if (!uid) {
                return res.status(400).json({ error: 'userId gerekli' });
            }

            const result = await sql`
                SELECT * FROM user_progress WHERE user_id = ${uid}
            `;

            console.log(`Loaded progress for ${uid}: ${result.length > 0 ? 'Found' : 'New User'}`);

            return res.status(200).json({
                success: true,
                data: result[0] || null
            });
        }

        // POST - İlerleme kaydet
        if (method === 'POST' && action === 'saveProgress') {
            const { userId: bodyUserId, learnedWords, learningWords, bestStreak, currentIndex } = req.body;
            const uid = bodyUserId || queryUserId;

            if (!uid) {
                return res.status(400).json({ error: 'userId gerekli' });
            }

            console.log(`Saving progress for ${uid}`);

            // Upsert - varsa güncelle, yoksa ekle
            await sql`
                INSERT INTO user_progress (user_id, learned_words, learning_words, best_streak, current_index, updated_at)
                VALUES (${uid}, ${JSON.stringify(learnedWords || [])}, ${JSON.stringify(learningWords || [])}, ${bestStreak || 0}, ${currentIndex || 0}, NOW())
                ON CONFLICT (user_id) 
                DO UPDATE SET 
                    learned_words = ${JSON.stringify(learnedWords || [])},
                    learning_words = ${JSON.stringify(learningWords || [])},
                    best_streak = ${bestStreak || 0},
                    current_index = ${currentIndex || 0},
                    updated_at = NOW()
            `;

            return res.status(200).json({ success: true });
        }

        // GET - Liderlik tablosu
        if (method === 'GET' && action === 'getLeaderboard') {
            const result = await sql`
                SELECT user_id, 
                       json_array_length(learned_words::json) as learned_count,
                       best_streak,
                       updated_at
                FROM user_progress 
                ORDER BY json_array_length(learned_words::json) DESC, best_streak DESC
                LIMIT 10
            `;

            return res.status(200).json({
                success: true,
                data: result
            });
        }

        // POST - Quiz sonucu kaydet
        if (method === 'POST' && action === 'saveQuizResult') {
            const { userId, score, streak, totalQuestions } = req.body;

            if (!userId) {
                return res.status(400).json({ error: 'userId gerekli' });
            }

            await sql`
                INSERT INTO quiz_results (user_id, score, streak, total_questions, created_at)
                VALUES (${userId}, ${score}, ${streak}, ${totalQuestions}, NOW())
            `;

            return res.status(200).json({ success: true });
        }

        // GET - Kullanıcı quiz geçmişi
        if (method === 'GET' && action === 'getQuizHistory') {
            const uid = queryUserId;
            if (!uid) {
                return res.status(400).json({ error: 'userId gerekli' });
            }

            const result = await sql`
                SELECT * FROM quiz_results 
                WHERE user_id = ${uid}
                ORDER BY created_at DESC
                LIMIT 20
            `;

            return res.status(200).json({
                success: true,
                data: result
            });
        }

        return res.status(400).json({ error: 'Geçersiz action' });

    } catch (error) {
        console.error('Database error:', error);
        return res.status(500).json({
            error: 'Veritabanı hatası',
            details: error.message
        });
    }
}
