from langchain_openai import ChatOpenAI
import os
import json

def PromptJsonSpec(requirements: str):
    llm = ChatOpenAI(model="gpt-4", api_key=os.getenv("OPENAI_API_KEY"))

    prompt = f"""
        You are a senior full-stack architect with 10+ years of experience. Your task is to convert a user's app idea into a structured JSON specification for a full-stack web application generator.

        Analyze the following user prompt carefully:

        "{requirements}"

        ---

        OBJECTIVE:
        Generate a **synchronized**, detailed full-stack JSON specification. It will be used to auto-generate code for frontend, backend, and database layers.

        Include `file_path` for each component, model, API endpoint, and page — this is essential for routing code generation correctly.

        ---

        OUTPUT STRUCTURE:
        {{
        "frontend": {{
            "framework": "React",
            "styling_tools": "Tailwind CSS",
            "client_side_routing_tool": "React Router",
            "required_models": ["User", ...],
            "pages": [
            {{
                "name": "Home",
                "description": "Landing page for the app",
                "file_path": "frontend/src/pages/Home.jsx",
                "components": [
                {{
                    "name": "HeroSection",
                    "file_path": "frontend/src/components/HeroSection.jsx",
                    "uses_api": [
                    {{
                        "method": "GET",
                        "path": "/api/home-data",
                        "request_body": [],
                        "response_type": "JSON",
                        "auth_required": false
                    }}
                    ]
                }}
                ]
            }}
            ]
        }},
        "models": [
            {{
            "name": "User",
            "file_path": "backend/models/User.js",
            "fields": [
                {{
                "name": "email",
                "type": "String",
                "required": true,
                "unique": true,
                "default": null
                }},
                {{
                "name": "password",
                "type": "String",
                "required": true,
                "unique": false,
                "default": null
                }}
            ],
            "relationships": []
            }}
        ],
        "backend": {{
            "runtime": "Node.js",
            "framework": "Express.js",
            "database": "prisma + supabase",
            "entities": ["User", ...],
            "list_of_api_endpoints": [
            {{
                "method": "POST",
                "path": "/api/login",
                "file_path": "backend/routes/auth/login.js",
                "description": "Authenticates a user using email and password.",
                "auth_required": false,
                "validation": ["email", "password"],
                "response_type": "object"
            }}
            ],
            "authentication": {{
            "required": true,
            "type": "JWT",
            "endpoints": {{
                "login": "/api/login",
                "signup": "/api/signup",
                "logout": "/api/logout"
            }},
            "user_fields": ["email", "password"]
            }},
            "file_handling": {{
            "required": true,
            "upload_types": ["pdf", "image"],
            "max_size": 10,
            "storage": "cloud",
            "endpoints": ["/api/upload"]
            }},
            "middleware": ["cors", "body-parser", "auth"]
        }}
        }}

        ---

        ✅ VALIDATION RULES:
        - `frontend.required_models` must match names in `models`
        - Each `component.uses_api.path` must exactly match a `backend.list_of_api_endpoints.path`
        - `backend.entities` must reference declared `models`
        - `authentication.user_fields` must exist in the User model
        - All endpoints must include a `file_path`
        - User-provided descriptions must be placed in the `description` fields
        - JSON must be strict and valid — return only JSON, no text or markdown
        - There Should be every component with proper file path. 
        - The component should be used correctly according to the need. 
        - If there is the any description provided by user for any webpage make sure that will written in the description field for that page.
        """


    response = llm.invoke(prompt)

    try:
        raw = response.content.strip()

        # Strip markdown-style formatting if present
        if raw.startswith("```json"):
            raw = raw.removeprefix("```json").removesuffix("```").strip()
        elif raw.startswith("```"):
            raw = raw.removeprefix("```").removesuffix("```").strip()

        return json.loads(raw)
    except Exception as e:
        raise ValueError(f"Failed to parse backend JSON: {str(e)}\nRaw output:\n{raw}")
