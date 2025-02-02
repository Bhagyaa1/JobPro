from fastapi import FastAPI
from pydantic import BaseModel
from ml_model import generate_career_advice, recommend_career
from database import get_skills_from_user, save_user_data

app = FastAPI()

class UserData(BaseModel):
    query: str

class SkillsData(BaseModel):
    skills: str

@app.post("/api/chatbot")
async def chat_with_bot(data: UserData):
    response = generate_career_advice(data.query)
    return {"response": response}

@app.post("/api/recommendations")
async def get_recommendations(data: UserData):
    recommendations = recommend_career(data.query)
    return {"recommendations": recommendations}

@app.post("/api/skills")
async def assess_skills(data: SkillsData):
    result = get_skills_from_user(data.skills)
    return {"result": result}
