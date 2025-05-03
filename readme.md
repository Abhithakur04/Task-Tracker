# Task Tracker Application

## Description

The Task Tracker Application is a simple and efficient tool designed to help users manage their work across up to four projects. Within each project, users can create, view, update, and delete tasks as needed. Every task includes a **title**, **description**, and **status** to track its progress—such as "To Do," "In Progress," or "Done." This application provides a streamlined way to organize tasks and monitor productivity without overwhelming the user, making it ideal for individuals or small teams handling a limited number of projects.

# Task Tracker - Backend

Welcome to the backend of the **Task Tracker** application! This app helps users manage their tasks and projects efficiently with authentication (JWT stored in cookies). The backend is built using **Node.js**, **Express**, and **MongoDB**.

## Project Overview

This is the backend of the Task Tracker application where users can:

- Sign up and log in using **JWT-based authentication**.
- Create projects and manage tasks.
- Track task progress with statuses like **pending**, **in-progress**, and **completed**.

The backend uses **MongoDB** to store user data, projects, and tasks, and **JWT** with **cookies** for secure user authentication.

## Technologies Used

- **Node.js** and **Express** for the backend framework.
- **MongoDB** with **Mongoose** for data storage and management.
- **JWT** (JSON Web Tokens) for secure user authentication.
- **cookie-parser** to read and manage cookies in HTTP requests.
- **dotenv** for managing environment variables securely.
- **CORS** (Cross-Origin Resource Sharing) to allow secure communication between the frontend and backend.
---

## 📁 Project Structure

```plaintext
task-tracker-backend/
├── config/
│   └── db.js              # MongoDB connection setup
├── middleware/
│   └── authMiddleware.js  # JWT authentication middleware
├── models/
│   ├── User.js            # User model
│   ├── Project.js         # Project model
│   └── Task.js            # Task model
├── routes/
│   ├── auth.js            # Authentication routes (signup, login, logout)
│   ├── project.js         # Project routes (create, list, delete)
│   └── task.js            # Task routes (create, list, update, delete)
├── .env                   # Environment variables
├── server.js              # Main server entry point
└── package.json           # Project dependencies and scripts
```

## Setup Instructions

Follow these steps to get the backend up and running on your local machine:

### 1. Clone the Repository
First, clone the repository to your local machine by running the following command:

```bash
git clone https://github.com/your-username/Task-Tracker/task-tracker-Backend.git
cd Task-Tracker/task-tracker-Backend
```
---
### 2. Install Dependencies

Before continuing, make sure you have **Node.js** installed on your machine. Once that's confirmed, navigate to the project directory and install all required dependencies by running:

```bash
npm install
```

### 3. Create a `.env` File
Next, you'll need to create a `.env` file in the root of your project. This file will hold your sensitive environment variables, such as the MongoDB URI and JWT secret.

Once the `.env` file is created, open it in your code editor and add the following environment variables:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/tasktracker
JWT_SECRET=yourSecretKey
```

### 4. Start MongoDB
Before running the server, make sure **MongoDB** is running locally on your machine. 

### 5. Run the Server
To start the backend server, run the following command in your terminal:

```bash
npm start
```


# Task Tracker Frontend (React + Tailwind CSS)

This is the frontend of the **Task Tracker** application where users can:
- Sign up and log in
- Create and view projects
- Add and manage tasks under each project

Built using **React** and styled with **Tailwind CSS**. Authentication is handled using **cookies** (via JWT), and all API calls are made directly from inside the components using `axios`.

---

## 🚀 Features

- User authentication (signup/login)
- Project creation and selection
- Task creation and listing by project
- Simple and clean UI using Tailwind CSS
- Uses environment variables for API URLs

---

## 📁 Folder Structure
task-tracker-frontend/
├── public/
├── src/
│ ├── components/ # All UI components (Login, Signup, Header, etc.)
│ ├── App.js # Main routing
│ ├── index.js # Entry point
│ └── index.css # Tailwind CSS styles
├── .env # Environment variables
├── package.json


## Setup Instructions

Follow these steps to get the Frontend up and running on your local machine:

### 1. Clone the Repository
First, clone the repository to your local machine by running the following command:

```bash
git clone https://github.com/your-username/Task-Tracker/task-tracker-Frontend.git
cd Task-Tracker/task-tracker-Frontend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Create a `.env` File
Create a .env file in the root of task-tracker-frontend and add:

```env
REACT_APP_API_URL=http://localhost:5000/api
```

### 4. Run the frontend locally
``bash
npm start
The app will be available at: http://localhost:3000

# ✅ Deployment Guide (Render + Vercel)

## 🚀 Deployment Instructions

This section explains how to deploy the **backend on Render** and the **frontend on Vercel**.

---

### 🔧 Backend Deployment (Render)

1. Go to [https://render.com](https://render.com) and sign in.
2. Click **"New > Web Service"**.
3. Connect your GitHub repository that contains the backend code.
4. In the **Root Directory**, choose the `backend` folder (if your code is structured in subfolders).
5. Set the following build and start commands:

   - **Build Command**:  
     ```
     npm install
     ```

   - **Start Command**:  
     ```
     node server.js
     ```

6. Set the **Environment Variables** in the Render dashboard:
   - `MONGO_URI` → (your MongoDB URI from Railway or MongoDB Atlas)
   - `JWT_SECRET` → (any secure random string)
   - `PORT` → `5000`

7. Click **"Create Web Service"**.

Render will deploy your backend and give you a URL like:
## 🌐 Live Backend URL

The backend for the **Task-Tracker** project is deployed on **Render** and can be accessed at:

🔗 [https://task-tracker-Backend.onrender.com](https://task-tracker-Backend.onrender.com)

Use this URL in your frontend for API calls.

---

### 🌐 Frontend Deployment (Vercel)

1. Go to [https://vercel.com](https://vercel.com) and sign in.
2. Click **"Add New > Project"**.
3. Import your GitHub repo containing the **frontend** code.
4. During setup, choose the `task-tracker-frontend` folder (or wherever your frontend is).
5. In the **Environment Variables** section, add:

   - `REACT_APP_API_URL` →  
     ```
     https://task-tracker-Backend.onrender.com/api
     ```

6. Click **"Deploy"**.

Vercel will build and deploy your frontend, giving you a URL like:
## 🌐 Live Frontend URL

🔗 [https://task-tracker-frontend.vercel.app](https://task-tracker-frontend.vercel.app)


