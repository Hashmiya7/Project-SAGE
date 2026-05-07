# Project SAGE 🔍🤖

Project SAGE is an AI-powered Research Agent designed to automatically search, analyze, gather information, explain concepts, and generate detailed reports from available data sources. The system combines AI capabilities with a modern web interface to provide intelligent research assistance.

---

# Features

- Automated research and data gathering
- AI-powered analysis and explanation
- Intelligent report generation
- Modern and responsive UI
- Secure backend API integration
- Real-time user interaction
- Structured research workflow

---

# Tech Stack

## Frontend
- HTML
- CSS
- JavaScript

## Backend
- Node.js
- Express.js
- CORS
- Dotenv

## AI Integration
- Cohere API

---

# Project Structure

```bash
Project Sage/
│
├── Backend/
│   ├── server.js
│   ├── package.json
│   └── .env
│
├── frontend/
│   └── app.html
│
└── README.md
```

---

# How It Works

```text
User Query
    ↓
Research Agent
    ↓
Search & Data Collection
    ↓
Analysis & Processing
    ↓
AI Explanation
    ↓
Report Generation
```

---

# Installation

## 1. Clone Repository

```bash
git clone <repository-url>
cd Project-Sage
```

## 2. Install Dependencies

```bash
cd Backend
npm install
```

## 3. Configure Environment Variables

Create a `.env` file inside Backend folder.

```env
COHERE_API_KEY=your_api_key
PORT=3000
```

## 4. Run Backend Server

```bash
node server.js
```

## 5. Launch Frontend

Open:

```bash
frontend/app.html
```

---

# API Endpoint

## POST `/api/cohere`

### Request Example

```json
{
  "message": "Generate a report on Artificial Intelligence"
}
```

---

# Future Enhancements

- Multi-agent collaboration
- PDF and document upload
- Database integration
- Authentication system
- Real-time streaming responses
- Advanced report export

---

# Applications

- Academic research
- Technical report generation
- AI-assisted learning
- Data analysis
- Information summarization

---
