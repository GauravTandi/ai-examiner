from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class Answer(BaseModel):
    answer: str

@app.get('/')
def home():
    return {"status":"ok"}

@app.get("/question")
def give_question():
    return {"question":"ques1"}

@app.post("/answer")
def give_answer(answer: Answer):
    right_answer = "orange"
    result = ""
    if answer.answer.lower() == right_answer:
        result = "correct"
    else:
        result = "wrong"

    return {
        "answer": answer.answer.lower(),
        "result": result    
    }
