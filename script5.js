// const btn = document.getElementById("btn");
// const joke = document.getElementById("joke");
// btn.addEventListener("click", function () {
//     joke.innerText = "Loading....";
//     fetch("https://official-joke-api.appspot.com/random_joke")
//         .then(response => response.json())
//         .then(data => {
//             console.log(data);
//             joke.innerText = data.setup + data.punchline;

//         })
//         .catch(error => {
//             joke.innerText = "Somwthing went wrong";
//         });
// });

const btn = document.getElementById("btn");
const joke = document.getElementById("joke");
btn.addEventListener("click", getJoke);
async function getJoke() {
    try {
        joke.innerText = "Loading..";
        const response = await fetch("https://official-joke-api.appspot.com/random_joke");
        const data = await response.json();
        joke.innerText = `${data.setup}    ${data.punchline}`;
    } catch (error) {
        joke.innerText = "Error loading joke";
    }

}



