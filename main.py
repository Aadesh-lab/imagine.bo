import os
import json
from dotenv import load_dotenv
from langchain_openai import ChatOpenAI
from agents.parse_prompt import PromptJsonSpec
from agents.new_prompt_parser import newPromptJsonSpec
from agents.frontend import generate_frontend
from agents.backend import generate_backend
from agents.set_up import write_backend_files, write_db_files_and_setup_prisma, write_frontend_files
from create_react import frontend_project
from create_express import backend_project
from create_model import generate_DB
from run_preview import run_and_preview

# Load environment variables
load_dotenv()

llm = ChatOpenAI(model="gpt-4-turbo", api_key=os.getenv("OPENAI_API_KEY"))

# Main execution
def main(user_prompt, project_name):
    try:
        print("🔍 Parsing prompt...")
        parsed = PromptJsonSpec(user_prompt)
        print(json.dumps(parsed, indent=2))  # Pretty-print parsed spec

        print("📁 Setting up project structure...")
        frontend_path = f"generated_projects/{project_name}/frontend"
        backend_path = f"generated_projects/{project_name}/backend"

        frontend_project(frontend_path)
        backend_project(backend_path)

        print("🎨 Generating frontend...")
        frontend_files = generate_frontend(parsed["frontend"], project_name)
        write_frontend_files(project_name, frontend_files)
        print(frontend_files)

        print("🔧 Generating DataBase Models...")
        Database_files = generate_DB(parsed["models"])
        write_db_files_and_setup_prisma(project_name, Database_files, reset_db=True)
        print(Database_files)

        print("🔧 Generating backend...")
        backend_files = generate_backend(parsed["backend"], project_name)
        write_backend_files(project_name, backend_files)
        print(backend_files)

        print("✅ Frontend written to disk.")
        print("🚀 Starting preview servers...")
        run_and_preview(project_name)
        return parsed

    except Exception as e:
        return {"status": "error", "message": str(e)}

if __name__ == "__main__":
    user_prompt = """
        Create a full-stack web application for college students. The application should include a 
        React frontend styled with Tailwind CSS and a Node.js backend using Express.js. The frontend 
        should feature a homepage, login page, signup page, about page, contact page, and a dedicated 
        resume upload page where students can upload their resumes. All pages should include a 
        responsive navigation bar for smooth navigation between Home, About, Contact, Resume Upload, 
        Login, and Signup using React Router (client-side routing). A footer should also be present 
        on every page, displaying basic site information like copyright.
    """
    project_name = "website_2"
    parsed = main(user_prompt, project_name)

    while True:
        follow_up = input("Do you want to update something? (yes/no): ").strip().lower()
        if follow_up != "yes":
            break

        new_prompt = input("Enter your follow-up update (e.g., Update Navbar, add BlogPage): ")

        try:
            print("🔁 Updating prompt...")
            parsed = newPromptJsonSpec(user_prompt, new_prompt, parsed)
            user_prompt = new_prompt  # For next follow-up
            print(json.dumps(parsed, indent=2))

            if "frontend" in parsed:
                print("🎨 Regenerating frontend with updates...")
                frontend_files = generate_frontend(parsed["frontend"], project_name)
                setup_result = write_frontend_files(project_name, frontend_files)
                print(frontend_files)

            if "models" in parsed:
                print("🔧 Generating DataBase Models...")
                Database_files = generate_DB(parsed["models"])
                write_db_files_and_setup_prisma(project_name, Database_files, reset_db=False)
                print(Database_files)

            if "backend" in parsed:
                print("🔧 Generating backend...")
                backend_files = generate_backend(parsed["backend"], project_name)
                write_backend_files(project_name, backend_files)
                print(backend_files)

            print("✅ Update complete.")

        except Exception as e:
            print(f"⚠️ Follow-up update failed: {e}")
