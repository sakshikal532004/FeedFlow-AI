# FeedFlow AI 

FeedFlow AI is an AI-powered Instagram Feed Personalization application built using **React Native (Expo)**, **FastAPI**, **Supabase**, and **Google Gemini AI**.

The application helps users improve their Instagram feed by selecting their interests and generating AI-powered feed optimization strategies with real-time analytics.

---

# Features

* User Authentication (Supabase Auth)
* Interest Selection
* AI Strategy Generation using Gemini AI
* Dynamic Analytics Dashboard
* Instagram Feed Optimization
* User Profile Screen
* Dynamic Dashboard Refresh
* Logout Functionality

---

# Tech Stack

## Frontend

* React Native
* Expo
* TypeScript

## Backend

* FastAPI
* Python

## Database & Authentication

* Supabase

## AI

* Google Gemini API

---

# Project Structure

```
FeedFlow-AI/
│
├── backend/
│   ├── app/
│   ├── routes/
│   ├── database.py
│   ├── gemini.py
│   ├── main.py
│   └── requirements.txt
│
├── mobile-app/
│   ├── src/
│   │   ├── api/
│   │   └── screens/
│   ├── App.tsx
│   └── package.json
│
└── README.md
```

---

# Installation

## Backend

```bash
cd backend

pip install -r requirements.txt

uvicorn app.main:app --reload
```

Backend runs at:

```
http://127.0.0.1:8000
```

Swagger Documentation:

```
http://127.0.0.1:8000/docs
```

---

## Frontend

```bash
cd mobile-app

npm install

npx expo start
```

---

#  Environment Variables

Create a `.env` file inside `backend/`:

```
SUPABASE_URL=YOUR_SUPABASE_URL

SUPABASE_KEY=YOUR_SUPABASE_KEY

GEMINI_API_KEY=YOUR_GEMINI_API_KEY
```

> Never upload your `.env` file to GitHub.

---

# 📊 API Endpoints

## Authentication

```
POST /signup

POST /login
```

## Preferences

```
POST /preferences
```

## Dashboard

```
GET /dashboard/{user_id}
```

## Analytics

```
GET /analytics/{user_id}
```

## AI Strategy

```
POST /generate-strategy
```

---

# Future Improvements

* Instagram OAuth Integration
* AI Feed Ranking
* Personalized Reel Suggestions
* Daily Feed Reports
* Push Notifications

---

# 👩‍💻 Author

**Sakshi Kalyankar**

Built with ❤️ using React Native, FastAPI, Supabase and Gemini AI.
