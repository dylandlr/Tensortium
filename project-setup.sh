# Create project structure
mkdir tensortium
cd tensortium

# Set up Python virtual environment
python -m venv venv
source venv/bin/activate  # On Windows: .\venv\Scripts\activate

# Install core dependencies
pip install numpy torch matplotlib jupyter manim
pip install streamlit react plotly

# Create project structure
mkdir -p {notebooks,animations,webapp/{src,public},data}

# Initialize git repository
git init
touch README.md

# Create base files
echo "# Tensortium
An interactive learning platform for transformer architecture." > README.md

# Create requirements file
pip freeze > requirements.txt