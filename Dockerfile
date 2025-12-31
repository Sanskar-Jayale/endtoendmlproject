# Base image
FROM python:3.10-slim

# Set working directory
WORKDIR /app

# Copy requirements first (for layer caching)
COPY requirements.txt .

# Install dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy the entire project
COPY . .

# Expose Flask port
EXPOSE 5000

# Environment variable for Flask
ENV FLASK_ENV=production

# Run the Flask app
CMD ["python", "app.py"]
