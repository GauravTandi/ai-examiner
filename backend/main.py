from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = [
    "https://ideal-space-spoon-7vv99xvpp7wxfv5v-5500.app.github.dev"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins = origins,
    allow_credentials = True,
    allow_methods = ["*"],
    allow_headers = ["*"],
    
)

class QnA(BaseModel):
    question: int
    answer: str


questions = [
        {
        "que": "What javascript extension ?",
        "ans": "js"
        },
        {
        "que": "What python extension ?",
        "ans": "py"
        },
        {
        "que": "What html extension ?",
        "ans": "html"
        }
    ]

@app.get('/')
def home():
    return {"status":"ok"}

@app.get("/question/{id}")
def give_question(id: int):
    return {"question":questions[id]["que"]}

@app.post("/answer")
def give_answer(qna: QnA):
    question = qna.question
    answer = qna.answer
    
    ans = questions[question]["ans"]
    result = ""
    
    if answer.lower() == ans.lower():
        result = "correct"
    else:
        result = "wrong"

    return {
        "given_answer": answer,
        "correct_answer": ans,
        "result": result
    }
