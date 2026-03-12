# 🌐 Chandana Priya Badina — Portfolio with AI Chat

A cyberpunk-themed personal portfolio with an AI chatbot powered by OpenRouter that answers questions about Chandana's resume in real-time.

**Tech Stack:** React + TypeScript (Frontend) · Python FastAPI (Backend) · SQLite (Database) · OpenRouter (AI Engine)

---

## 🚀 Quick Start

### Step 1: Get OpenRouter API Key (FREE)
1. Go to [https://openrouter.ai/keys](https://openrouter.ai/keys)
2. Sign up for free — no credit card needed
3. Create a new API key and copy it

---

### Step 2: Setup Backend (Python)

```bash
cd backend

# Create virtual environment
python -m venv venv

# Activate it
# Windows:
venv\Scripts\activate
# Mac/Linux:
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Create .env file
cp .env.example .env
# Edit .env and paste your OpenRouter API key

# Run the server
uvicorn main:app --reload --port 8000
```

Backend will run at: `http://localhost:8000`  
API Docs at: `http://localhost:8000/docs`

---

### Step 3: Setup Frontend (React + TypeScript)

Open a **new terminal**:

```bash
cd frontend

# Install dependencies
npm install

# Run dev server
npm run dev
```

Frontend will run at: `http://localhost:3000`

---

## 📁 Project Structure

```
portfolio/
├── frontend/                  # React + TypeScript
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.tsx      # Navigation bar
│   │   │   ├── Hero.tsx        # Hero section with typewriter
│   │   │   ├── About.tsx       # About + Education
│   │   │   ├── Skills.tsx      # Tech skills + Certifications
│   │   │   ├── Projects.tsx    # 6 Featured projects
│   │   │   ├── Experience.tsx  # Internships + Activities
│   │   │   └── ChatBot.tsx     # 🤖 AI Chat widget
│   │   ├── App.tsx
│   │   └── main.tsx
│   ├── package.json
│   ├── vite.config.ts
│   └── tsconfig.json
│
└── backend/                   # Python FastAPI
    ├── main.py                 # FastAPI app + OpenRouter integration
    ├── requirements.txt
    ├── .env.example
    └── chat_history.db         # SQLite (auto-created on first run)
```

---

## 🤖 How the AI Chat Works

1. User opens the **"Ask AI"** button (bottom right)
2. Types a question about Chandana (skills, projects, experience, etc.)
3. Frontend sends the message to `POST /api/chat`
4. Python backend adds the full resume as system context + sends to **OpenRouter**
5. OpenRouter uses **Llama 3.2 (free)** to generate a relevant response
6. Response is saved to **SQLite** and returned to the user

### Free AI Model Used
`meta-llama/llama-3.2-3b-instruct:free` via OpenRouter — completely free with no rate limit concerns for demos.

To switch models, change `FREE_MODEL` in `backend/main.py`.

---

## 🌍 Deployment (Bonus — GitHub Pages + Cloudflare Tunnel)

### Frontend → GitHub Pages
```bash
cd frontend
npm run build
# Push the dist/ folder to gh-pages branch
```

Or use Vercel/Netlify for instant deployment.

### Backend → Cloudflare Tunnel (Free Public URL)
```bash
# Install cloudflared
# Windows: winget install Cloudflare.cloudflared
# Mac: brew install cloudflare/cloudflare/cloudflared

# Expose your local backend publicly
cloudflared tunnel --url http://localhost:8000
```
This gives you a public URL like `https://random-words.trycloudflare.com`.  
Update the fetch URL in `ChatBot.tsx` from `http://localhost:8000` to your tunnel URL.

---

## 🔗 Links

- GitHub: [github.com/chandanapriyabadina](https://github.com/chandanapriyabadina)
- LinkedIn: [linkedin.com/in/chandana-priya-badina-827b97276](https://www.linkedin.com/in/chandana-priya-badina-827b97276/)
- Email: chandanapriyabadina@gmail.com

---

