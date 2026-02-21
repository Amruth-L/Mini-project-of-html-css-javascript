const quizdata = [{
    question: "Q1: Which HTML tag is used to define an internal stylesheet?",
    Option: ["<style>", "<script>"],
    answer: "<style>"
},
{
    question: "Q2: What is the correct HTML element for inserting a line break?",
    Option: ["<b>", "<br>"],
    answer: "<br>"
},
{
    question: "Q3: Which property controls the text size?",
    Option: ["font-family", "font-size"],
    answer: "font-size"
},
{
    question: "Q4: How do you declare a constant variable in JavaScript?",
    Option: ["const", "prompt"],
    answer: "const"
},
{
    question: "Q5: Which method is used to add one or more elements to the end of an array?",
    Option: ["push()", "pop()"],
    answer: "push()"
},
];

// Get html elememts//

let question = document.getElementById("question");
let options = document.getElementById("options");
let btn = document.getElementById("Btn");
let scoreText = document.getElementById("score");

//variable for control//

let currentQ = 0;
let score = 0;
let selectedAnswer = null;


//Load Question function//

function loadQuestion() {
    let q = quizdata[currentQ];
    question.innerText = q.question;
    options.innerHTML = "";
    selectedAnswer = null;

    q.Option.forEach(opt => {
        let btn = document.createElement("button");
        btn.innerText = opt;
        btn.onclick = () => {
            selectedAnswer = opt;
            document.querySelectorAll('#options button')
                .forEach(btn => btn.style.background = "");
            btn.style.background = "lightgreen";
        };
        options.appendChild(btn);
    });
}
btn.onclick = () => {
    if (selectedAnswer === null) {
        alert("please select an answer");
        return;
    }
    if (selectedAnswer === quizdata[currentQ].answer) {
        score++;
    }
    currentQ++;
    if (currentQ < quizdata.length) {
        loadQuestion();
    } else {
        showscore();
    }
};
function showscore() {
    question.innerText = "Quiz Finished";
    options.innerHTML = "";
    btn.style.display = "none";
    scoreText.innerText = "Your Score:" + score + "/" + quizdata.length;
}
loadQuestion();


