import os
import json
import re
from langchain_anthropic import ChatAnthropic

def clean_claude_json(raw):
    return re.sub(r"^```(?:json)?|```$", "", raw.strip(), flags=re.MULTILINE)

def generate_frontend(requirements, project_name):
    llm = ChatAnthropic(
        model="claude-opus-4-20250514",
        api_key=os.getenv("ANTHROPIC_API_KEY"),
        temperature=0.2,
        max_tokens=32000
    )

    
    prompt = f"""
        You are an expert full-stack React developer. Generate a production-ready **Vite + React 18** frontend using **Tailwind CSS v3+** and **React Router v6+**, based on the following requirements.

        REQUIREMENTS:
        {requirements}

        📁 FILE STRUCTURE & MUST-HAVES:
        Respond with a valid JSON array of files. Each file must include:
        - "path": full relative file path (e.g., "frontend/src/pages/LoginPage.jsx")
        - "content": valid JavaScript or CSS code

        ✅ REQUIRED FILES:
        1. "frontend/src/main.jsx" — ReactDOM.createRoot + <BrowserRouter>
        2. "frontend/src/App.jsx" — Main layout with <Routes>
        3. "frontend/src/index.css" — @import "tailwindcss"; -> must same content.
        4. "frontend/src/pages/" — One file per page (e.g., LoginPage.jsx, Dashboard.jsx)
        5. "frontend/src/components/" — Reusable components (e.g., LoginForm.jsx, NavBar.jsx)

        🧠 LOGIC REQUIREMENTS:
        - Use functional components only
        - Each page/component that interacts with backend must include a `uses_api` block in JSON spec
        - All API requests must hit paths defined in backend spec (e.g., `/api/login`)
        - Use axios or fetch for API calls
        - All content should be rich, professional, and include placeholder data
        - Form validation must be present if applicable
        - Include error display and loading UI as needed
        - All models used in UI must match backend `models` section

        ⚠️ STRICT FORMAT RULES:
        - Output must be a **pure JSON array**
        - NO markdown, comments, or extra text
        - File paths must follow Vite + React project structure
        - All imports must be valid and relative
        - All code must be runnable in a real Vite app
        - Make sure the all the file should contain the import React from 'react';
        """

    response = llm.invoke(prompt)
    raw = response.content
    print("RAW OUTPUT START\n", raw[:2000], "\nRAW OUTPUT END\n")

    try:
        files = json.loads(clean_claude_json(raw))
        return files
    except Exception as e:
        raise ValueError(f"Failed to parse frontend JSON: {str(e)}")
