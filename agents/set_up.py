import os
import subprocess
import json

env = os.environ.copy()

def write_frontend_files(project_name, frontend_files):
    base_path = f"generated_projects/{project_name}"
    for file in frontend_files:
        file_path = os.path.join(base_path, file["path"])
        os.makedirs(os.path.dirname(file_path), exist_ok=True)
        
        content = file["content"]
        if isinstance(content, dict):
            content = json.dumps(content, indent=2)
        
        with open(file_path, "w", encoding="utf-8") as f:
            f.write(content)
    
    return {"status": "success", "message": "Frontend files written successfully"}

def write_backend_files(project_name, backend_files):
    base_path = f"generated_projects/{project_name}"
    for file in backend_files:
        file_path = os.path.join(base_path, file["path"])
        os.makedirs(os.path.dirname(file_path), exist_ok=True)
        
        content = file["content"]
        if isinstance(content, dict):
            content = json.dumps(content, indent=2)

        with open(file_path, "w", encoding="utf-8") as f:
            f.write(content)
    
    return {"status": "success", "message": "Backend files written successfully"}

def write_db_files_and_setup_prisma(project_name, db_files, reset_db = True):
    base_path = f"generated_projects/{project_name}"
    backend_dir = os.path.join(base_path, "backend")

    for file in db_files:
        file_path = os.path.join(base_path, file["path"])
        os.makedirs(os.path.dirname(file_path), exist_ok=True)

        content = file["content"]
        if isinstance(content, dict):
            content = json.dumps(content, indent=2)

        with open(file_path, "w", encoding="utf-8") as f:
            f.write(content)

    # Write .env manually
    env_path = os.path.join(backend_dir, ".env")
    with open(env_path, "w", encoding="utf-8") as f:
        f.write(
            "DATABASE_URL=postgresql://postgres.lpinsoygsvpxepbajimr:vpe%2At4Wc2%3FE_CzK@aws-0-ap-south-1.pooler.supabase.com:5432/postgres\n"
        )

    try:
        npx_cmd = "npx.cmd" if os.name == "nt" else "npx"
        npm_cmd = "npm.cmd" if os.name == "nt" else "npm"

        if os.path.exists(os.path.join(backend_dir, "package.json")):
            print("Installing backend dependencies...")
            subprocess.run([npm_cmd, "install"], cwd=backend_dir, check=True, env=env)

        if reset_db:
            print("Resetting Prisma DB...")
            subprocess.run(
                [npx_cmd, "prisma", "migrate", "reset", "--force"],
                cwd=backend_dir,
                check=True,
                env=env,
                capture_output=True,
                text=True
            )

        print("Running Prisma migrate...")
        subprocess.run(
            [npx_cmd, "prisma", "migrate", "dev", "--name", "init"],
            cwd=backend_dir,
            check=True,
            env=env,
            capture_output=True,
            text=True
        )

        print("Generating Prisma client...")
        subprocess.run(
            [npx_cmd, "prisma", "generate"],
            cwd=backend_dir,
            check=True,
            env=env,
            capture_output=True,
            text=True
        )

        return {"status": "success", "message": "DB files and Prisma setup completed"}

    except subprocess.CalledProcessError as e:
        return {
            "status": "error",
            "message": f"Prisma setup failed: {e}",
            "stdout": e.stdout,
            "stderr": e.stderr
        }

    except Exception as e:
        return {
            "status": "error",
            "message": f"Unexpected error: {str(e)}"
        }
