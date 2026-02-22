const questions = [
    {
        question: "What does HTML stand for?",
        answers: [
            { text: "Hyper Text Markup Language", correct: true },
            { text: "High Tech Modern Language", correct: false },
            { text: "Home Tool Markup Language", correct: false },
            { text: "Hyperlinks and Text Mark Language", correct: false }
        ]
    },
    {
        question: "Which language is used for styling?",
        answers: [
            { text: "HTML", correct: false },
            { text: "CSS", correct: true },
            { text: "Java", correct: false },
            { text: "Python", correct: false }
        ]
    },
    {
        question: "Which language is used for web interactivity?",
        answers: [
            { text: "CSS", correct: false },
            { text: "JavaScript", correct: true },
            { text: "C++", correct: false },
            { text: "SQL", correct: false }
        ]
    },
    {
        question: "Which company developed Java?",
        answers: [
            { text: "Microsoft", correct: false },
            { text: "Sun Microsystems", correct: true },
            { text: "Google", correct: false },
            { text: "IBM", correct: false }
        ]
    },
    {
        question: "Which symbol is used for comments in JavaScript?",
        answers: [
            { text: "//", correct: true },
            { text: "##", correct: false },
            { text: "<!-- -->", correct: false },
            { text: "**", correct: false }
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    questionElement.innerHTML = currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        button.addEventListener("click", () => selectAnswer(answer.correct));
        answerButtons.appendChild(button);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(correct) {
    if (correct) {
        score++;
    }
    nextButton.style.display = "block";
}

nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
});

function showScore() {
    resetState();
    questionElement.innerHTML = `Your Score: ${score} / ${questions.length}`;
    nextButton.innerHTML = "Restart";
    nextButton.style.display = "block";
    nextButton.onclick = startQuiz;
}

startQuiz();