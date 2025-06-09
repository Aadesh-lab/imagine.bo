from langchain_openai import ChatOpenAI
import os
import json

def generate_DB(requirements):
    llm = ChatOpenAI(model="gpt-4", api_key=os.getenv("OPENAI_API_KEY"))

    prompt = f""" 
        You are an expert database architect. Based on the following requirements, generate a complete database schema using Prisma ORM for Supabase (PostgreSQL). 
        
        Requirements: 
        {requirements} 
        
        ✅ Output a JSON array. Each item should have: 
        - "path": full file path (e.g., "backend/prisma/schema.prisma") 
        - "content": complete and valid Prisma schema or configuration content. 
        
        ✅ Include the following **mandatory** files: 
        1. "backend/prisma/schema.prisma" — complete Prisma schema with models, relations, and configurations. 
        
        💡 The database schema must: 
        - Use Prisma syntax with PostgreSQL provider for Supabase. 
        - Include proper model relationships (one-to-one, one-to-many, many-to-many). 
        - Define appropriate field types, constraints, and indexes. 
        - Include createdAt and updatedAt timestamps where needed. 
        - Use proper naming conventions (camelCase for fields, PascalCase for models). 
        - Include UUID primary keys where appropriate. 
        - Set up database connection for Supabase PostgreSQL. 
        
        ⚠️ Output must be a pure JSON array — no markdown, no triple backticks, no explanations. 
        ⚠️ All file paths must start with "backend/". 
        ⚠️ Ensure Prisma schema includes generator and datasource blocks. 
        """

    response = llm.invoke(prompt)
    print(response)
    try:
        files = json.loads(response.content)
        return files
    except Exception as e:
        raise ValueError(f"Failed to parse backend JSON: {str(e)}")
