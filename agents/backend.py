from langchain_openai import ChatOpenAI
import os
import json

def generate_backend(requirements, project_name):
    llm = ChatOpenAI(model="gpt-4", api_key=os.getenv("OPENAI_API_KEY"))

    prompt = f"""
        You are an expert backend developer. Based on the following requirements, generate a complete **Node.js backend** using **Express.js**, **Prisma ORM**, and **Supabase** as the database.

        REQUIREMENTS:
        {requirements}

        📁 FILE STRUCTURE:
        Output a valid JSON array. Each item must contain:
        - "path": full file path (e.g., "backend/server.js")
        - "content": full valid JavaScript or JSON code

        ✅ REQUIRED FILES (MANDATORY):
        1. "backend/server.js" — Set up Express app, JSON parser, CORS, middleware, routes, error handler.
        2. "backend/routes/" — One file per route group (e.g., auth.js, users.js, posts.js).
        3. "backend/controllers/" — One controller file per route group.
        4. "backend/middleware/" — Custom middleware (e.g., auth.js, error.js).
        5. "backend/prisma/schema.prisma" — Full Prisma schema with Supabase-compatible config.
        6. "backend/prisma/client.js" — Prisma client initialization.
        7. "backend/utils/" — Helper files (e.g., JWT handling, validation).
        8. Include dotenv usage to read Supabase DATABASE_URL from `.env`.

        🧠 LOGIC REQUIREMENTS:
        - All models in the spec must be defined in `schema.prisma`.
        - Route handlers must use Prisma client (no raw SQL).
        - Use async/await and proper error handling.
        - Middleware: add `cors`, `body-parser`, and `auth` as needed.
        - Port: 5000
        - Supabase-compatible types must be used in `schema.prisma`.
        - Auth must use JWT (if required).
        - If file upload is required: use `multer` and support image/pdf upload to Supabase storage or S3.

        ⚠️ OUTPUT STRICTLY RULED:
        - Output ONLY a JSON array
        - NO markdown, triple backticks, or extra text
        - DO NOT truncate output
        - Every file path must start with "backend/"
        - Make sure that backend code logic should be correct.
        - Make sure that endpoint is used by you should be correct.
        """
    
    response = llm.invoke(prompt)
    try:
        files = json.loads(response.content)
        return files
    except Exception as e:
        raise ValueError(f"Failed to parse backend JSON: {str(e)}")
