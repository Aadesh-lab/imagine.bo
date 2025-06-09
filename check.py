import os
import subprocess
import tempfile
import shutil

def frontend_project(frontend_path):
    npm_cmd = "npm.cmd" if os.name == "nt" else "npm"
    npx_cmd = "npx.cmd" if os.name == "nt" else "npx"
    env = os.environ.copy()

    with tempfile.TemporaryDirectory() as tmpdir:
        print("Creating Vite React app in temporary directory...")
        subprocess.run([npx_cmd, "create-vite@latest", ".", "--template", "react"], cwd=tmpdir, check=True, env=env)

        print("Installing dependencies...")
        subprocess.run([npm_cmd, "install"], cwd=tmpdir, check=True, env=env)

        print("Installing Tailwind CSS and dependencies...")
        subprocess.run([npm_cmd, "install", "-D", "tailwindcss", "postcss", "autoprefixer"], cwd=tmpdir, check=True, env=env)
        # subprocess.run([npx_cmd, "tailwindcss", "init", "-p"], cwd=tmpdir, check=True, env=env)

        print("Installing react-router-dom...")
        subprocess.run([npm_cmd, "install", "react-router-dom"], cwd=tmpdir, check=True, env=env)

        # Update tailwind.config.js
        tailwind_config_path = os.path.join(tmpdir, "vite.config.js")
        with open(tailwind_config_path, "w") as f:
            f.write("""\
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
plugins: [
    tailwindcss(),
],
})
            """)

        # Update index.css with Tailwind directives
        index_css_path = os.path.join(tmpdir, "src", "index.css")
        with open(index_css_path, "w") as f:
            f.write("""\
@import "tailwindcss";
            """)

        # Delete destination if exists and copy project
        if os.path.exists(frontend_path):
            shutil.rmtree(frontend_path)
        shutil.copytree(tmpdir, frontend_path)

        print(f"Frontend project created successfully at: {frontend_path}")

# Example usage
frontend_project(os.path.join("generated_projects", "website_2", "frontend"))
