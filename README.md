# 🧾 Mini Local Business Dashboard

This is a simple full-stack project that simulates how small businesses can view SEO content and Google Business data.

### 🔧 Tech Stack

- _Frontend:_ React + Tailwind CSS
- _Backend:_ Node.js + Express

---

## 🚀 Features

- Input business name and location
- Show random Google rating and review count
- Display AI-generated SEO headline
- Regenerate SEO headline with one click

---

## 📁 Folder Structure

mini-local-business-dashboard/
├── backend/ ← Node.js + Express API
└── frontend/ ← React + Tailwind CSS

---

## Run the Backend

- cd backend
- npm install
- node server.js

## Run the Frontend

- cd ../frontend
- npm install
- npm run dev/npm start

## 🌐 API Endpoints

- POST /business-data
  Returns rating, reviews, and an AI-style SEO headline.

- GET /regenerate-headline?name=...&location=...
  Returns a new headline based on input.

---

## 🧠 Notes

- All data is simulated — no database needed
- Headlines are randomly chosen from a static list
