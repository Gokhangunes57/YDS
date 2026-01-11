// YDS Kelime Öğrenme Uygulaması
// Modern, Sesli ve İnteraktif

class YDSLearner {
    constructor() {
        this.words = words;
        this.currentIndex = 0;
        this.learnedWords = new Set();
        this.learningWords = new Set();
        this.quizScore = 0;
        this.quizStreak = 0;
        this.bestStreak = 0;
        this.quizQuestionIndex = 0;
        this.quizQuestions = [];
        this.autoPlay = false;

        this.loadProgress();
        this.initElements();
        this.bindEvents();
        this.updateDisplay();
        this.updateStats();
    }

    initElements() {
        // Navigation
        this.navBtns = document.querySelectorAll('.nav-btn');
        this.tabContents = document.querySelectorAll('.tab-content');

        // Learn Tab
        this.wordCard = document.getElementById('wordCard');
        this.englishWord = document.getElementById('englishWord');
        this.turkishMeaning = document.getElementById('turkishMeaning');
        this.wordType = document.getElementById('wordType');
        this.exampleSentence = document.getElementById('exampleSentence');
        this.speakBtn = document.getElementById('speakBtn');
        this.speakExampleBtn = document.getElementById('speakExampleBtn');
        this.knowBtn = document.getElementById('knowBtn');
        this.learningBtn = document.getElementById('learningBtn');
        this.prevWordBtn = document.getElementById('prevWord');
        this.nextWordBtn = document.getElementById('nextWord');
        this.shuffleBtn = document.getElementById('shuffleBtn');

        // Quiz Tab
        this.quizCard = document.getElementById('quizCard');
        this.quizWord = document.getElementById('quizWord');
        this.quizSpeakBtn = document.getElementById('quizSpeakBtn');
        this.quizOptions = document.getElementById('quizOptions');
        this.quizFeedback = document.getElementById('quizFeedback');
        this.quizProgressBar = document.getElementById('quizProgressBar');
        this.quizScoreEl = document.getElementById('quizScore');
        this.quizStreakEl = document.getElementById('quizStreak');
        this.startQuizBtn = document.getElementById('startQuizBtn');

        // Flashcard Tab
        this.flashcard = document.getElementById('flashcard');
        this.flashcardInner = document.getElementById('flashcardInner');
        this.flashcardWord = document.getElementById('flashcardWord');
        this.flashcardMeaning = document.getElementById('flashcardMeaning');
        this.flashcardExample = document.getElementById('flashcardExample');
        this.flashcardSpeakBtn = document.getElementById('flashcardSpeakBtn');
        this.fcCounter = document.getElementById('fcCounter');
        this.fcPrevBtn = document.getElementById('fcPrev');
        this.fcNextBtn = document.getElementById('fcNext');
        this.fcHardBtn = document.getElementById('fcHard');
        this.fcEasyBtn = document.getElementById('fcEasy');

        // Stats Tab
        this.learnedCountEl = document.getElementById('learnedCount');
        this.learningCountEl = document.getElementById('learningCount');
        this.remainingCountEl = document.getElementById('remainingCount');
        this.bestStreakEl = document.getElementById('bestStreak');
        this.chartLearned = document.getElementById('chartLearned');
        this.chartLearning = document.getElementById('chartLearning');
        this.learnedList = document.getElementById('learnedList');
        this.learningList = document.getElementById('learningList');
        this.resetBtn = document.getElementById('resetBtn');

        // Progress Ring
        this.progressRing = document.getElementById('progressRing');
        this.progressPercent = document.getElementById('progressPercent');

        // Auto-play Toggle
        this.autoPlayToggle = document.getElementById('autoPlayToggle');

        // Toast
        this.toast = document.getElementById('toast');
    }

    bindEvents() {
        // Navigation
        this.navBtns.forEach(btn => {
            btn.addEventListener('click', () => this.switchTab(btn.dataset.tab));
        });

        // Learn Tab
        this.speakBtn.addEventListener('click', () => this.speak(this.words[this.currentIndex].word));
        this.speakExampleBtn.addEventListener('click', () => this.speak(this.words[this.currentIndex].example));
        this.knowBtn.addEventListener('click', () => this.markAsKnown());
        this.learningBtn.addEventListener('click', () => this.markAsLearning());
        this.prevWordBtn.addEventListener('click', () => this.prevWord());
        this.nextWordBtn.addEventListener('click', () => this.nextWord());
        this.shuffleBtn.addEventListener('click', () => this.shuffleWords());

        // Quiz Tab
        this.startQuizBtn.addEventListener('click', () => this.startQuiz());
        this.quizSpeakBtn.addEventListener('click', () => this.speak(this.quizQuestions[this.quizQuestionIndex]?.word || ''));

        // Flashcard Tab
        this.flashcard.addEventListener('click', (e) => {
            if (!e.target.closest('.flashcard-speak')) {
                this.flipFlashcard();
            }
        });
        this.flashcardSpeakBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            this.speak(this.words[this.currentIndex].word);
        });
        this.fcPrevBtn.addEventListener('click', () => this.prevFlashcard());
        this.fcNextBtn.addEventListener('click', () => this.nextFlashcard());
        this.fcHardBtn.addEventListener('click', () => this.markFlashcardHard());
        this.fcEasyBtn.addEventListener('click', () => this.markFlashcardEasy());

        // Stats Tab
        this.resetBtn.addEventListener('click', () => this.resetProgress());

        // Auto-play Toggle
        this.autoPlayToggle.addEventListener('change', (e) => {
            this.autoPlay = e.target.checked;
            if (this.autoPlay) {
                this.speak(this.words[this.currentIndex].word);
            }
        });

        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') this.prevWord();
            if (e.key === 'ArrowRight') this.nextWord();
            if (e.key === ' ') {
                e.preventDefault();
                this.speak(this.words[this.currentIndex].word);
            }
        });
    }

    switchTab(tabId) {
        this.navBtns.forEach(btn => btn.classList.remove('active'));
        this.tabContents.forEach(content => content.classList.remove('active'));

        document.querySelector(`[data-tab="${tabId}"]`).classList.add('active');
        document.getElementById(tabId).classList.add('active');

        if (tabId === 'flashcards') {
            this.updateFlashcard();
        }
        if (tabId === 'stats') {
            this.updateStats();
        }
    }

    speak(text) {
        if ('speechSynthesis' in window) {
            window.speechSynthesis.cancel();

            const utterance = new SpeechSynthesisUtterance(text);
            utterance.lang = 'en-US';
            utterance.rate = 0.85;
            utterance.pitch = 1;

            // Animasyon ekle
            this.speakBtn.classList.add('speaking');
            utterance.onend = () => {
                this.speakBtn.classList.remove('speaking');
            };

            // En iyi sesi seç
            const voices = window.speechSynthesis.getVoices();
            const englishVoice = voices.find(v => v.lang.includes('en-') && v.name.includes('Google'))
                || voices.find(v => v.lang.includes('en-'));
            if (englishVoice) {
                utterance.voice = englishVoice;
            }

            window.speechSynthesis.speak(utterance);
        } else {
            this.showToast('Tarayıcınız sesli okumayı desteklemiyor');
        }
    }

    updateDisplay() {
        const word = this.words[this.currentIndex];

        // Animasyonlu geçiş
        this.wordCard.style.opacity = '0';
        this.wordCard.style.transform = 'translateY(20px)';

        setTimeout(() => {
            this.englishWord.textContent = word.word;
            this.turkishMeaning.textContent = word.turkish;
            this.wordType.textContent = word.type;
            this.exampleSentence.textContent = `"${word.example}"`;

            // Kelime numarası
            document.querySelector('.word-number').textContent = `${this.currentIndex + 1} / ${this.words.length}`;

            this.wordCard.style.opacity = '1';
            this.wordCard.style.transform = 'translateY(0)';

            // Otomatik sesli okuma
            if (this.autoPlay) {
                setTimeout(() => this.speak(word.word), 300);
            }
        }, 150);

        this.updateProgressRing();
    }

    nextWord() {
        this.currentIndex = (this.currentIndex + 1) % this.words.length;
        this.updateDisplay();
        this.updateFlashcard();
    }

    prevWord() {
        this.currentIndex = (this.currentIndex - 1 + this.words.length) % this.words.length;
        this.updateDisplay();
        this.updateFlashcard();
    }

    shuffleWords() {
        // Fisher-Yates shuffle
        for (let i = this.words.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.words[i], this.words[j]] = [this.words[j], this.words[i]];
        }
        this.currentIndex = 0;
        this.updateDisplay();
        this.showToast('Kelimeler karıştırıldı! 🔀');
    }

    markAsKnown() {
        const word = this.words[this.currentIndex].word;
        this.learnedWords.add(word);
        this.learningWords.delete(word);
        this.saveProgress();
        this.updateStats();
        this.showToast(`"${word}" öğrenildi olarak işaretlendi ✓`);

        // Sonraki kelimeye geç
        setTimeout(() => this.nextWord(), 500);
    }

    markAsLearning() {
        const word = this.words[this.currentIndex].word;
        this.learningWords.add(word);
        this.learnedWords.delete(word);
        this.saveProgress();
        this.updateStats();
        this.showToast(`"${word}" öğreniliyor olarak işaretlendi 📚`);

        // Sonraki kelimeye geç
        setTimeout(() => this.nextWord(), 500);
    }

    // Quiz Methods
    startQuiz() {
        this.quizScore = 0;
        this.quizStreak = 0;
        this.quizQuestionIndex = 0;

        // 10 rastgele soru hazırla
        this.quizQuestions = this.shuffleArray([...this.words]).slice(0, 10);

        this.startQuizBtn.style.display = 'none';
        this.quizCard.classList.add('active');

        this.showQuizQuestion();
    }

    showQuizQuestion() {
        if (this.quizQuestionIndex >= this.quizQuestions.length) {
            this.endQuiz();
            return;
        }

        const question = this.quizQuestions[this.quizQuestionIndex];
        this.quizWord.textContent = question.word;

        // İlerleme çubuğu
        const progress = ((this.quizQuestionIndex) / this.quizQuestions.length) * 100;
        this.quizProgressBar.style.width = `${progress}%`;

        // Seçenekleri oluştur (1 doğru + 3 yanlış)
        const wrongAnswers = this.shuffleArray(
            this.words.filter(w => w.word !== question.word)
        ).slice(0, 3);

        const options = this.shuffleArray([
            { turkish: question.turkish, correct: true },
            ...wrongAnswers.map(w => ({ turkish: w.turkish, correct: false }))
        ]);

        this.quizOptions.innerHTML = options.map((opt, i) => `
            <button class="quiz-option" data-correct="${opt.correct}">
                ${opt.turkish}
            </button>
        `).join('');

        // Seçenek event'leri
        this.quizOptions.querySelectorAll('.quiz-option').forEach(btn => {
            btn.addEventListener('click', () => this.answerQuiz(btn));
        });

        // Otomatik ses
        if (this.autoPlay) {
            this.speak(question.word);
        }

        // Feedback gizle
        this.quizFeedback.classList.remove('show', 'correct', 'wrong');
    }

    answerQuiz(btn) {
        const isCorrect = btn.dataset.correct === 'true';
        const correctBtn = this.quizOptions.querySelector('[data-correct="true"]');

        // Tüm butonları devre dışı bırak
        this.quizOptions.querySelectorAll('.quiz-option').forEach(b => {
            b.classList.add('disabled');
        });

        if (isCorrect) {
            btn.classList.add('correct');
            this.quizScore += 10;
            this.quizStreak++;
            if (this.quizStreak > this.bestStreak) {
                this.bestStreak = this.quizStreak;
            }

            this.quizFeedback.innerHTML = `<div class="feedback-content">🎉 Doğru! Harika gidiyorsun!</div>`;
            this.quizFeedback.classList.add('show', 'correct');
        } else {
            btn.classList.add('wrong');
            correctBtn.classList.add('correct');
            this.quizStreak = 0;

            const question = this.quizQuestions[this.quizQuestionIndex];
            this.quizFeedback.innerHTML = `
                <div class="feedback-content">
                    ❌ Yanlış! Doğru cevap: <strong>${question.turkish}</strong>
                </div>
            `;
            this.quizFeedback.classList.add('show', 'wrong');
        }

        // Skorları güncelle
        this.quizScoreEl.textContent = this.quizScore;
        this.quizStreakEl.textContent = this.quizStreak;

        // Sonraki soru
        setTimeout(() => {
            this.quizQuestionIndex++;
            this.showQuizQuestion();
        }, 1500);
    }

    endQuiz() {
        const totalQuestions = this.quizQuestions.length;
        const percentage = Math.round((this.quizScore / (totalQuestions * 10)) * 100);

        this.quizCard.innerHTML = `
            <div class="quiz-result">
                <h2>🎯 Quiz Tamamlandı!</h2>
                <div class="result-score">
                    <span class="score-value">${this.quizScore}</span>
                    <span class="score-label">puan</span>
                </div>
                <p class="result-text">
                    ${percentage >= 80 ? '🌟 Mükemmel! Sen bir YDS ustasısın!' :
                percentage >= 60 ? '👍 İyi iş! Biraz daha pratik yap!' :
                    '💪 Devam et! Pratik mükemmelleştirir!'}
                </p>
                <button class="start-quiz-btn" onclick="app.restartQuiz()">
                    <i class="fas fa-redo"></i> Tekrar Oyna
                </button>
            </div>
        `;

        this.saveProgress();
        this.updateStats();
    }

    restartQuiz() {
        this.quizCard.classList.remove('active');
        this.quizCard.innerHTML = `
            <div class="quiz-question">
                <span class="quiz-label">Bu kelimenin Türkçe anlamı nedir?</span>
                <h2 class="quiz-word" id="quizWord">Accomplish</h2>
                <button class="quiz-speak-btn" id="quizSpeakBtn">
                    <i class="fas fa-volume-high"></i>
                </button>
            </div>
            <div class="quiz-options" id="quizOptions"></div>
            <div class="quiz-feedback" id="quizFeedback">
                <div class="feedback-content"></div>
            </div>
        `;

        // Elementleri yeniden bağla
        this.quizWord = document.getElementById('quizWord');
        this.quizSpeakBtn = document.getElementById('quizSpeakBtn');
        this.quizOptions = document.getElementById('quizOptions');
        this.quizFeedback = document.getElementById('quizFeedback');
        this.quizSpeakBtn.addEventListener('click', () => this.speak(this.quizQuestions[this.quizQuestionIndex]?.word || ''));

        this.startQuizBtn.style.display = 'flex';
    }

    // Flashcard Methods
    updateFlashcard() {
        const word = this.words[this.currentIndex];
        this.flashcardWord.textContent = word.word;
        this.flashcardMeaning.textContent = word.turkish;
        this.flashcardExample.textContent = `"${word.example}"`;
        this.fcCounter.textContent = `${this.currentIndex + 1} / ${this.words.length}`;

        // Kartı ön yüze çevir
        this.flashcard.classList.remove('flipped');
    }

    flipFlashcard() {
        this.flashcard.classList.toggle('flipped');
    }

    prevFlashcard() {
        this.prevWord();
    }

    nextFlashcard() {
        this.nextWord();
    }

    markFlashcardHard() {
        const word = this.words[this.currentIndex].word;
        this.learningWords.add(word);
        this.learnedWords.delete(word);
        this.saveProgress();
        this.showToast(`"${word}" zor olarak işaretlendi 📚`);
        this.nextFlashcard();
    }

    markFlashcardEasy() {
        const word = this.words[this.currentIndex].word;
        this.learnedWords.add(word);
        this.learningWords.delete(word);
        this.saveProgress();
        this.showToast(`"${word}" kolay olarak işaretlendi ✓`);
        this.nextFlashcard();
    }

    // Stats Methods
    updateStats() {
        const learned = this.learnedWords.size;
        const learning = this.learningWords.size;
        const remaining = this.words.length - learned - learning;

        this.learnedCountEl.textContent = learned;
        this.learningCountEl.textContent = learning;
        this.remainingCountEl.textContent = remaining;
        this.bestStreakEl.textContent = this.bestStreak;

        // Grafik
        const learnedPercent = (learned / this.words.length) * 100;
        const learningPercent = (learning / this.words.length) * 100;

        this.chartLearned.style.width = `${learnedPercent}%`;
        this.chartLearning.style.width = `${learningPercent}%`;

        // Kelime listeleri
        this.learnedList.innerHTML = Array.from(this.learnedWords)
            .map(w => `<span class="word-tag">${w}</span>`)
            .join('') || '<span class="word-tag">Henüz yok</span>';

        this.learningList.innerHTML = Array.from(this.learningWords)
            .map(w => `<span class="word-tag">${w}</span>`)
            .join('') || '<span class="word-tag">Henüz yok</span>';

        this.updateProgressRing();
    }

    updateProgressRing() {
        const learned = this.learnedWords.size;
        const percent = Math.round((learned / this.words.length) * 100);
        const offset = 100 - percent;

        this.progressRing.style.strokeDashoffset = offset;
        this.progressPercent.textContent = `${percent}%`;
    }

    resetProgress() {
        if (confirm('Tüm ilerlemenizi sıfırlamak istediğinizden emin misiniz?')) {
            this.learnedWords.clear();
            this.learningWords.clear();
            this.bestStreak = 0;
            this.saveProgress();
            this.updateStats();
            this.showToast('İlerleme sıfırlandı! 🔄');
        }
    }

    // Storage Methods
    saveProgress() {
        const data = {
            learned: Array.from(this.learnedWords),
            learning: Array.from(this.learningWords),
            bestStreak: this.bestStreak,
            currentIndex: this.currentIndex
        };
        localStorage.setItem('yds_progress', JSON.stringify(data));
    }

    loadProgress() {
        const data = localStorage.getItem('yds_progress');
        if (data) {
            const parsed = JSON.parse(data);
            this.learnedWords = new Set(parsed.learned || []);
            this.learningWords = new Set(parsed.learning || []);
            this.bestStreak = parsed.bestStreak || 0;
            this.currentIndex = parsed.currentIndex || 0;
        }
    }

    // Utility Methods
    shuffleArray(array) {
        const newArray = [...array];
        for (let i = newArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
        }
        return newArray;
    }

    showToast(message) {
        this.toast.querySelector('.toast-message').textContent = message;
        this.toast.classList.add('show');

        setTimeout(() => {
            this.toast.classList.remove('show');
        }, 3000);
    }
}

// Sesleri yükle
window.speechSynthesis.onvoiceschanged = () => {
    window.speechSynthesis.getVoices();
};

// Uygulamayı başlat
const app = new YDSLearner();
