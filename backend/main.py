"""
Portfolio AI Chat Backend
"""
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Optional
import httpx
import sqlite3
import uuid
from datetime import datetime

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

OPENROUTER_API_KEY = "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"
OPENROUTER_URL = "https://openrouter.ai/api/v1/chat/completions"
FREE_MODEL = "openrouter/free"

RESUME_CONTEXT = """You are Chandana Priya Badina's AI portfolio assistant. Answer all questions confidently and professionally using the information below. Always respond in first person as if you ARE Chandana.

Name: Chandana Priya Badina
Email: chandanapriyabadina@gmail.com
Phone: +91 9440190432
Location: Jangareddygudem, Andhra Pradesh, India
LinkedIn: https://www.linkedin.com/in/chandana-priya-badina-827b97276/
GitHub: https://github.com/chandanapriyabadina

EDUCATION:
- B.Tech CSE | Narasaraopeta Engineering College | 2022-2026 | CGPA: 9.0 (90%)
- Intermediate XII MPC | Surya Junior College | 2022 | 83.40%
- SSC X | Surya EM High School | 2020 | CGPA: 10.0

WORK EXPERIENCE:
1. MERN Full Stack + AI Intern | Datavalley Pvt. Ltd. | Apr 2025 - Sep 2025
   - Built 4 responsive web apps (Weather, Portfolio, Food, Movie) using React, Node.js, MongoDB
   - Improved UI performance by 40%
   - Reduced deployment issues by 20%
   - Delivered 6 features with 100% on-time completion
   - Built Medibot AI Health Chatbot using NLP

2. Data Science Intern | Prodigy Infotech | May 2025
   - Built Decision Tree Classifier using UCI Bank Marketing dataset
   - Conducted sentiment analysis on Twitter data using NLP
   - Created dashboards on global population data

SKILLS:
- Frontend: React.js, TypeScript, Angular, HTML5, CSS3, Bootstrap
- Backend: Node.js, Express.js, Python, Flask, FastAPI, REST APIs
- Databases: MongoDB, MySQL, Firebase
- AI/ML: TensorFlow, CNN, Deep Learning, NLP, Machine Learning, Pandas
- Tools: GitHub, Postman, VS Code, Google Colab, Jupyter

PROJECTS:
1. Breast Cancer Detection - 99.07% accuracy using CNN, TensorFlow, U-Net++, Flask
2. Community Pulse Web App - React, Node.js, MySQL, 100+ survey responses, 95% uptime
3. Weather App - HTML, CSS, JavaScript, OpenWeatherMap API, real-time forecast
4. Medibot AI Chatbot - Python, NLP, Node.js, React, MongoDB
5. Doctor Appointment App - Kotlin, Android, Firebase
6. Portfolio Website - React, TypeScript, Python FastAPI, OpenRouter AI, SQLite

CERTIFICATIONS:
- IBM Web Development Fundamentals
- IBM SkillsBuild: AI Fundamentals
- MERN Full Stack with AI (Datavalley Inc)
- HackerRank Python Certificate
- MongoDB Certificate
- Oracle Cloud Infrastructure
- NPTEL: Joy of Computing Using Python
- Responsive Web Development (IBM/Coursera)

EXTRACURRICULAR:
- Smart India Hackathon Team Leader
- 24-hour Hackathon Certificate of Merit
- Ideathon Team Leader
- NSS Volunteer
- Tech Fest Organizer
- LeetCode: 65+ DSA problems solved

Available for Full Stack Developer internships. Graduating May 2026.

IMPORTANT INSTRUCTIONS:
- Always answer in first person as if YOU are Chandana speaking
- Be confident, specific, and professional
- Always mention exact numbers when relevant: 90% CGPA, 99.07% accuracy, 40% UI performance improvement, 100% on-time delivery
- Never say you don't know — use the information above to answer everything
- Keep answers concise and impressive — 3 to 5 sentences max unless more detail is asked
- If asked about skills, list them clearly with categories
- If asked about projects, mention tech stack and key achievement
- If asked about internships, mention company, duration, and key contributions
- Always end with something that shows enthusiasm for new opportunities"""

def init_db():
    conn = sqlite3.connect("chat_history.db")
    conn.execute("CREATE TABLE IF NOT EXISTS conversations (id TEXT PRIMARY KEY, session_id TEXT, role TEXT, content TEXT, timestamp TEXT)")
    conn.commit()
    conn.close()

init_db()

def save_message(session_id, role, content):
    conn = sqlite3.connect("chat_history.db")
    conn.execute("INSERT INTO conversations VALUES (?, ?, ?, ?, ?)", (str(uuid.uuid4()), session_id, role, content, datetime.utcnow().isoformat()))
    conn.commit()
    conn.close()

class ChatMessage(BaseModel):
    role: str
    content: str

class ChatRequest(BaseModel):
    message: str
    history: Optional[List[ChatMessage]] = []
    session_id: Optional[str] = None

class ChatResponse(BaseModel):
    response: str
    session_id: str

@app.get("/")
def root():
    return {"status": "online"}

@app.get("/health")
def health():
    return {"status": "healthy"}

@app.post("/api/chat", response_model=ChatResponse)
async def chat(req: ChatRequest):
    session_id = req.session_id or str(uuid.uuid4())
    save_message(session_id, "user", req.message)
    messages = [{"role": "system", "content": RESUME_CONTEXT}]
    if req.history:
        for msg in req.history[-6:]:
            messages.append({"role": msg.role, "content": msg.content})
    messages.append({"role": "user", "content": req.message})
    try:
        async with httpx.AsyncClient(timeout=60.0) as client:
            response = await client.post(
                OPENROUTER_URL,
                headers={
                    "Authorization": f"Bearer {OPENROUTER_API_KEY}",
                    "Content-Type": "application/json",
                    "HTTP-Referer": "http://localhost:3000",
                    "X-Title": "Chandana Portfolio",
                },
                json={"model": FREE_MODEL, "messages": messages, "max_tokens": 600, "temperature": 0.5},
            )
        if response.status_code != 200:
            raise HTTPException(status_code=502, detail=f"OpenRouter error: {response.text}")
        data = response.json()
        ai_reply = data["choices"][0]["message"]["content"]
        save_message(session_id, "assistant", ai_reply)
        return ChatResponse(response=ai_reply, session_id=session_id)
    except httpx.TimeoutException:
        raise HTTPException(status_code=504, detail="Timed out.")
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
