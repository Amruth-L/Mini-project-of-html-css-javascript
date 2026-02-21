const data = [
    {
        question: "HTML stands for ",
        answer: "HyperText Markup Language"
    },
    {
        question: "CSS is used for",
        answer: "Styling"
    },
    {
        question: "Javascript is used for",
        answer: "make web pages dynamic and interactive"
    },
];

// get html elements//

let question = document.getElementById("question");
let answer = document.getElementById("answer");
let btn = document.getElementById("Btn-nxt");

//variable controlers//

let currentF = 0;
let showAnswer = false;

// function loading //

function loadQuestion() {
    question.innerText = data[currentF].question;
    answer.innerText = "";
    btn.innerText = "Show Answer";
    showAnswer = false;
}
btn.onclick = () => {

    if (!showAnswer) {
        answer.innerText = data[currentF].answer;
        btn.innerText = "Next";
        showAnswer = true;
    } else {
        currentF++;
        if (currentF < data.length) {
            loadQuestion();
        } else {
            question.innerText = "finished";
            answer.innerText = "";
            btn.style.display = "none";
        }
    }
};
loadQuestion();



