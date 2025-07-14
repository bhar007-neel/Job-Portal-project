# 💼 Job Portal Project

![GitHub repo size](https://img.shields.io/github/repo-size/bhar007-neel/Job-Portal-project?color=blue)
![GitHub last commit](https://img.shields.io/github/last-commit/bhar007-neel/Job-Portal-project?color=success)
![Contributions welcome](https://img.shields.io/badge/contributions-welcome-orange.svg)
![Deployed on Render](https://img.shields.io/badge/deployed-render-success)

🔗 **Live App**: [[https://job-portal-project-6tlj.onrender.com](https://job-portal-project-6tlj.onrender.com)](https://job-portal-project-6tlj.onrender.com/api-doc/)  
📁 **Frontend (Coming Soon)** | 📦 **Backend (This Repo)**

---

## 🚀 Overview

**Job Portal** is a full-featured backend system for job seekers and employers. It supports **authentication**, **job listings CRUD**, **user role management**, and **MongoDB integration**, built with **Node.js**, **Express**, and **JWT** authentication.

> 🔐 This app mimics platforms like Indeed or LinkedIn Jobs with a secure, scalable backend foundation.

---

## 🧠 Key Features

- 🔐 **User Authentication & Authorization (JWT)**
- 🧾 **Register/Login/Update Profile**
- 📄 **Create, Read, Update, Delete (CRUD) Job Posts**
- 📌 **Search, Filter & Sort Job Listings**
- 📊 **Stats Dashboard**
- 🧠 **Global Error Handling**
- 🎯 **RESTful APIs**
- 📚 **Swagger API Documentation**
- 🛡️ **Security via Helmet, Express Rate Limit, and CORS**
- 📦 **Environment Variable Config (dotenv)**
- 🚀 **Deployable on Render / Railway / Heroku**

---

## 🛠️ Tech Stack

| Category | Tech |
|---------|------|
| **Language** | JavaScript (ES6) |
| **Runtime** | Node.js |
| **Framework** | Express.js |
| **Database** | MongoDB Atlas |
| **ORM** | Mongoose |
| **Auth** | JWT + Bcrypt |
| **Docs** | Swagger UI |
| **Security** | Helmet, CORS, XSS-clean, Rate Limiting |
| **Deploy** | Render |
| **Dev Tools** | Nodemon, ESLint |

---

## 🔐 API Endpoints

### 🧑‍💼 Auth Routes

| Method | Route | Description |
|--------|-------|-------------|
| `POST` | `/api/v1/auth/register` | Register new user |
| `POST` | `/api/v1/auth/login` | Login user |
| `PUT` | `/api/v1/auth/update-user` | Update profile |

### 💼 Job Routes

| Method | Route | Description |
|--------|-------|-------------|
| `POST` | `/api/v1/job/create-job` | Create job |
| `GET`  | `/api/v1/job/get-jobs` | Get all jobs |
| `PUT`  | `/api/v1/job/update-job/:id` | Update job |
| `DELETE`| `/api/v1/job/delete-job/:id` | Delete job |
| `GET`  | `/api/v1/job/job-stats` | Job statistics |

📘 For full documentation, visit `/api-docs` after running the project locally.

---

---

Job-Portal-project/
│
├── controller/        # Auth & Job Controllers
├── models/            # Mongoose Schemas
├── middleware/        # Auth, Error, Rate Limiter
├── routes/            # API Routes
├── utils/             # Custom error handling
├── swagger/           # Swagger docs
├── .env               # Environment Config
├── server.js          # Entry Point
└── README.md          # You are here!


