import os
import subprocess
import tempfile
import shutil

def backend_project(backend_path):
    # os.makedirs(backend_path, exist_ok=True)
    npm_cmd = "npm.cmd" if os.name == "nt" else "npm"
    npx_cmd = "npx.cmd" if os.name == "nt" else "npx"
    env = os.environ.copy()

    with tempfile.TemporaryDirectory() as tmpdir:
        # Step 1: Initialize npm project
        subprocess.run([npm_cmd, "init", "-y"], cwd=tmpdir, check=True, env=env)

        # Step 2: Install production dependencies
        subprocess.run([
            npm_cmd, "install",
            "express",
            "cors",
            "dotenv",
            "morgan",
            "cookie-parser",
            "bcrypt",
            "jsonwebtoken",
            "uuid",
            "multer",
            "dayjs",
            "prisma", 
            "@prisma/client"
        ], cwd=tmpdir, check=True, env=env)

        # Step 3: Install nodemon globally
        subprocess.run([npm_cmd, "install", "-g", "nodemon"], check=True, env=env)

        subprocess.run([npx_cmd, "prisma", "init"], cwd=tmpdir, check=True, env=env)  

        # Step 5: Modify package.json to use nodemon
        package_json_path = os.path.join(tmpdir, "package.json")
        with open(package_json_path, "r") as f:
            package_data = f.read()

        package_data = package_data.replace(
            '"test": "echo \\"Error: no test specified\\" && exit 1"',
            '"dev": "nodemon server.js"'
        )

        with open(package_json_path, "w") as f:
            f.write(package_data)

        if os.path.exists(backend_path):
            shutil.rmtree(backend_path)
        shutil.copytree(tmpdir, backend_path)

        print(f"Backend project created successfully at: {backend_path}")
        print("Run it using:")
        print(f"  cd {backend_path} && npm run dev")
