const button = document.getElementById("btnBox");
const answer = document.getElementById("answer");
// const questions = [
//     {"question":"javascript extension ?",
//      "answer":"js"
//     },
//     {"question":"python extension ?",
//      "answer":"py"
//     },
//     {"question":"html extension ?",
//      "answer":"html"
//     }
// ]

// let currentQuestion = 0;
// document.getElementById("queTextArea").innerText = questions[currentQuestion].question;

//This is Submit Button
// button.addEventListener("click", function(){
//     document.getElementById("result").innerText = answer.value;
//     if (
//         answer.value.toLowerCase() ==
//         questions[currentQuestion].answer.toLowerCase()
//     ){  
//         document.getElementById("checkCW").innerText = "answer: correct";
//     } else {
//         document.getElementById("checkCW").innerText = "answer: wrong";
//     }
// });


//This Show Next Question
// const nextButton = document.getElementById("nxtBtn");
// nextButton.addEventListener('click', function(){
//     currentQuestion++;
//     document.getElementById("queTextArea").innerText = questions[currentQuestion].question;
//     document.getElementById("answer").value = "";
//     document.getElementById("result").innerText = "";
// });

//This Show previous Question
// const previousButton = document.getElementById("prevBtn");
// previousButton.addEventListener('click', function() {
//     currentQuestion--;
//     document.getElementById("queTextArea").innerText = questions[currentQuestion].question;
// })

// Frontend fetch () backend Question
async function getQuestion() {
    try {
        const response = await fetch("https://ideal-space-spoon-7vv99xvpp7wxfv5v-8000.app.github.dev/question/1");
        const data = await response.json();
        console.log(data);
        document.getElementById("queTextArea").innerText = data.question;
    } catch (error) {
        console.error("Fetch operation failed:", error.message);
    }
}

getQuestion();
