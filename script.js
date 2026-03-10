const questions = [
    {
        question: "What does HTML stand for?",
        options: [
            "Hyper Text Markup Language",
            "High Text Machine Language",
            "Hyper Tool Multi Language",
            "Home Text Markup Language"
        ],
        answer: 0
    },
    {
        question: "Which language is used for styling web pages?",
        options: ["HTML", "JQuery", "CSS", "XML"],
        answer: 2
    },
    {
        question: "Which is not a JavaScript framework?",
        options: ["Python Script", "React", "Angular", "Vue"],
        answer: 0
    },
    {
        question: "Which symbol is used for comments in JavaScript?",
        options: ["//", "##", "<!-- -->", "**"],
        answer: 0
    }
];

let currentQuestion = 0;
let score = 0;
let userName = "";

function startQuiz() {
    userName = document.getElementById("username").value;

    if (userName === "") {
        alert("Please enter your name");
        return;
    }

    document.getElementById("register").style.display = "none";
    document.getElementById("quiz").style.display = "block";
    document.getElementById("welcome").innerText = "Welcome, " + userName;

    loadQuestion();
}

function loadQuestion() {
    const q = questions[currentQuestion];
    document.getElementById("question").innerText = q.question;

    const optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = "";

    q.options.forEach((option, index) => {
        const btn = document.createElement("button");
        btn.innerText = option;
        btn.classList.add("option");
        btn.onclick = () => checkAnswer(index);
        optionsDiv.appendChild(btn);
    });
}

function checkAnswer(selected) {
    const correct = questions[currentQuestion].answer;
    const feedback = document.getElementById("feedback");

    if (selected === correct) {
        feedback.innerText = "Correct Answer!";
        feedback.className = "correct";
        score++;
    } else {
        feedback.innerText = "Wrong Answer!";
        feedback.className = "wrong";
    }
}

function nextQuestion() {
    currentQuestion++;
    document.getElementById("feedback").innerText = "";

    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    document.getElementById("quiz").style.display = "none";
    document.getElementById("result").style.display = "block";

    document.getElementById("result").innerHTML =
        "🎉 Quiz Completed! <br><br>" +
        "Name: " + userName + "<br>" +
        "Score: " + score + " / " + questions.length;
}