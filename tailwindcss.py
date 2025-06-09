import os

def create_tailwind_index_css(project_name):
    full_path = os.path.join("generated_projects", project_name, "frontend", "src", "index.css")
    
    # Write the Tailwind import to the file
    with open(full_path, "w") as f:
        f.write("""\
@import "tailwindcss";
""")
    
    print(f"index.css created at: {full_path}")