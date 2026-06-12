const button = document.getElementById("btnBox");
const answer = document.getElementById("answer");
const questions = [
    {"question":"javascript extension ?",
     "answer":"js"
    },
    {"question":"python extension ?",
     "answer":"py"
    },
    {"question":"html extension ?",
     "answer":"html"
    }
]
let currentQuestion = 0;
document.getElementById("queTextArea").innerText = questions[currentQuestion].question;

button.addEventListener("click", function(){
    document.getElementById("result").innerText = answer.value;
    if (
        answer.value.toLowerCase() ==
        questions[currentQuestion].answer.toLowerCase()
    ){  
        document.getElementById("checkCW").innerText = "answer: correct";
    } else {
        document.getElementById("checkCW").innerText = "answer: wrong";
    }
});


const nextButton = document.getElementById("nxtBtn");
nextButton.addEventListener('click', function(){
    currentQuestion++;
    document.getElementById("queTextArea").innerText = questions[currentQuestion].question;
    document.getElementById("answer").value = "";
    document.getElementById("result").innerText = "";
});


const previousButton = document.getElementById("prevBtn");
previousButton.addEventListener('click', function() {
    currentQuestion--;
    document.getElementById("queTextArea").innerText = questions[currentQuestion].question;
})