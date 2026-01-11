import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL);

export default async (req, context) => {
    const method = req.method;
    const url = new URL(req.url);
    const action = url.searchParams.get('action');

    try {
        // GET - Kullanıcı ilerlemesini al
        if (method === 'GET' && action === 'getProgress') {
            const userId = url.searchParams.get('userId');

            if (!userId) {
                return new Response(JSON.stringify({ error: 'userId gerekli' }), {
                    status: 400,
                    headers: { 'Content-Type': 'application/json' }
                });
            }

            const result = await sql`
                SELECT * FROM user_progress WHERE user_id = ${userId}
            `;

            return new Response(JSON.stringify({
                success: true,
                data: result[0] || null
            }), {
                headers: { 'Content-Type': 'application/json' }
            });
        }

        // POST - İlerleme kaydet
        if (method === 'POST' && action === 'saveProgress') {
            const body = await req.json();
            const { userId, learnedWords, learningWords, bestStreak, currentIndex } = body;

            if (!userId) {
                return new Response(JSON.stringify({ error: 'userId gerekli' }), {
                    status: 400,
                    headers: { 'Content-Type': 'application/json' }
                });
            }

            // Upsert - varsa güncelle, yoksa ekle
            await sql`
                INSERT INTO user_progress (user_id, learned_words, learning_words, best_streak, current_index, updated_at)
                VALUES (${userId}, ${JSON.stringify(learnedWords)}, ${JSON.stringify(learningWords)}, ${bestStreak}, ${currentIndex}, NOW())
                ON CONFLICT (user_id) 
                DO UPDATE SET 
                    learned_words = ${JSON.stringify(learnedWords)},
                    learning_words = ${JSON.stringify(learningWords)},
                    best_streak = ${bestStreak},
                    current_index = ${currentIndex},
                    updated_at = NOW()
            `;

            return new Response(JSON.stringify({ success: true }), {
                headers: { 'Content-Type': 'application/json' }
            });
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

            return new Response(JSON.stringify({
                success: true,
                data: result
            }), {
                headers: { 'Content-Type': 'application/json' }
            });
        }

        // POST - Quiz sonucu kaydet
        if (method === 'POST' && action === 'saveQuizResult') {
            const body = await req.json();
            const { userId, score, streak, totalQuestions } = body;

            if (!userId) {
                return new Response(JSON.stringify({ error: 'userId gerekli' }), {
                    status: 400,
                    headers: { 'Content-Type': 'application/json' }
                });
            }

            await sql`
                INSERT INTO quiz_results (user_id, score, streak, total_questions, created_at)
                VALUES (${userId}, ${score}, ${streak}, ${totalQuestions}, NOW())
            `;

            return new Response(JSON.stringify({ success: true }), {
                headers: { 'Content-Type': 'application/json' }
            });
        }

        // GET - Kullanıcı quiz geçmişi
        if (method === 'GET' && action === 'getQuizHistory') {
            const userId = url.searchParams.get('userId');

            if (!userId) {
                return new Response(JSON.stringify({ error: 'userId gerekli' }), {
                    status: 400,
                    headers: { 'Content-Type': 'application/json' }
                });
            }

            const result = await sql`
                SELECT * FROM quiz_results 
                WHERE user_id = ${userId}
                ORDER BY created_at DESC
                LIMIT 20
            `;

            return new Response(JSON.stringify({
                success: true,
                data: result
            }), {
                headers: { 'Content-Type': 'application/json' }
            });
        }

        return new Response(JSON.stringify({ error: 'Geçersiz action' }), {
            status: 400,
            headers: { 'Content-Type': 'application/json' }
        });

    } catch (error) {
        console.error('Database error:', error);
        return new Response(JSON.stringify({
            error: 'Veritabanı hatası',
            details: error.message
        }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
};

export const config = {
    path: "/api/progress"
};
