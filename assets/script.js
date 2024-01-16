const questions = [
    {
        question: "What is the capital of England?",
        answers: [
            { text: "Leeds", correct: false },
            { text: "Manchester", correct: false },
            { text: "Edinburgh", correct: false },
            { text: "London", correct: true },
        ]
    },
    {
        question: "What is the population of England in 2024?",
        answers: [
            { text: "71 million", correct: false },
            { text: "57 million", correct: true },
            { text: "52 million", correct: false },
            { text: "64 million", correct: false },
        ]
    },
    {
        question: "Who is the monarch in England in 2024?",
        answers: [
            { text: "King James", correct: false },
            { text: "King Andrew", correct: false },
            { text: "King Charles", correct: true },
            { text: "Queen Elizabeth", correct: false },
        ]
    },
    {
        question: "Which of these is not part of the UK?",
        answers: [
            { text: "England", correct: false },
            { text: "Scotland", correct: false },
            { text: "New Zealand", correct: true },
            { text: "Wales", correct: false },
        ]
    },
];

const startBtn = document.getElementById("start");
const questionTitleEl = document.getElementById("question-title");
const choicesEl = document.getElementById("choices");
const timerEl = document.getElementById("time");
const finalScoreEl = document.getElementById("final-score");
const initialsInput = document.getElementById("initials");
const submitBtn = document.getElementById("submit");
const startScreen = document.getElementById("start-screen");
const questionsDiv = document.getElementById("questions");
const endScreen = document.getElementById("end-screen");
const feedbackDiv = document.getElementById("feedback");

let currentQuestionIndex = 0;
let score = 0;
let timer;



function showQuestion() {
    resetState();
    const currentQuestion = questions[currentQuestionIndex];
    questionTitleEl.textContent = currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.textContent = answer.text;
        button.classList.add("btn");
        choicesEl.appendChild(button);

        button.addEventListener("click", () => selectAnswer(answer.correct));
    });
}

function resetState() {
    while (choicesEl.firstChild) {
        choicesEl.removeChild(choicesEl.firstChild);
    }
}

function selectAnswer(correct) {
    if (correct) {
        score += timer; 
    } else {
        timer -= 10;
        if (timer < 0) {
            timer = 0;
        }
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        endQuiz();
    }
}


function endQuiz() {
    questionsDiv.classList.add("hide");
    endScreen.classList.remove("hide");
    finalScoreEl.textContent = score;
}

submitBtn.addEventListener("click", () => {
});

startBtn.addEventListener("click", startQuiz);
