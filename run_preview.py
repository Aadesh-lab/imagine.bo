import os
import subprocess
import socket
import time
import webbrowser

# Utility to check if port is available
def is_port_free(port):
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
        return s.connect_ex(('localhost', port)) != 0

def run_and_preview(project_name):
    base_path = f"generated_projects/{project_name}"
    frontend_path = f"{base_path}/frontend"
    backend_path = f"{base_path}/backend"
    npm_cmd = "npm.cmd" if os.name == "nt" else "npm"

    if not os.path.exists(frontend_path) or not os.path.exists(backend_path):
        return {"status": "error", "message": "Frontend or backend directory missing"}

    # Vite default port is 5173, Node backend default is assumed as 5000
    if not is_port_free(5173):
        return {"status": "error", "message": "Port 5173 is in use (Vite)"}
    if not is_port_free(5000):
        return {"status": "error", "message": "Port 5000 is in use (Backend)"}

    try:
        # Start Vite frontend
        frontend_process = subprocess.Popen([npm_cmd, "run", "dev"], cwd=frontend_path)
        # Start backend (assumes `server.js` exists and runs on port 5000)
        backend_process = subprocess.Popen(["node", "server.js"], cwd=backend_path)

        time.sleep(5)  # Short wait for servers to start

        try:
            webbrowser.get("chrome").open("http://localhost:5173")
        except webbrowser.Error:
            return {"status": "warning", "message": "Servers started. Open http://localhost:5173 manually."}

        return {"status": "success", "message": "Servers running and Chrome opened"}
    except Exception as e:
        return {"status": "error", "message": f"Preview failed: {str(e)}"}
