# AI Eco-Tourism Platform

## Project Overview

AI-powered Eco-Tourism & Homestay Recommendation Platform built using Next.js, FastAPI, and Supabase.

## Tech Stack

* Frontend: Next.js
* Backend: FastAPI
* Database: Supabase PostgreSQL
* Styling: Tailwind CSS

## How to Run Backend Locally

```bash
cd backend

python -m venv venv

.\venv\Scripts\activate

pip install fastapi uvicorn python-dotenv

python -m uvicorn app.main:app --reload
```

Backend URL:

```text
http://127.0.0.1:8000
```

Swagger Documentation:

```text
http://127.0.0.1:8000/docs
```

## Available API Endpoints

* GET /homestays
* GET /homestays/{id}
* POST /homestays
* PUT /homestays/{id}
* DELETE /homestays/{id}
* GET /homestays/search/{location}
