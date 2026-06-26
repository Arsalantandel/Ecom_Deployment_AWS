# 🐳 Dockerized MERN Ecommerce Application

A production-ready **MERN Stack Ecommerce Application** containerized using **Docker** and **Docker Compose**, enabling seamless development, deployment, and scalability through multi-container architecture.

🔗 **Frontend:** http://localhost:3000
⚙️ **Backend API:** http://localhost:5000

---

## 🚀 Highlights

* Dockerized full-stack MERN application
* Multi-container setup with Docker Compose
* React frontend with Node.js/Express backend
* Environment variable configuration
* Isolated networking between containers
* Easy one-command application startup

---

## 🧰 Tech Stack

### Frontend

* React (Vite)
* Redux Toolkit
* React Router
* Axios

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication

### Containerization

* Docker
* Docker Compose

---

## 🖥️ Key Features

### 👤 User Features

* User Registration & Login
* Browse Products
* Search Products
* Shopping Cart
* Checkout Process
* PayPal Payment Integration
* Order History

### 🛠️ Admin Dashboard

* Product Management (CRUD)
* User Management
* Order Management
* Product Image Uploads

---

## 📂 Project Structure

```
.
├── client/                 # React Frontend
├── server/                 # Express Backend
├── docker-compose.yml      # Multi-container configuration
├── Dockerfile              # Backend Docker Image
├── client/Dockerfile       # Frontend Docker Image
└── .dockerignore
```

---

## 🐳 Docker Architecture

The application is divided into multiple Docker containers:

* **Frontend Container** – React (Vite)
* **Backend Container** – Node.js + Express API
* **Docker Network** – Enables communication between services


---

## 💡 What This Project Demonstrates

* Docker containerization of a MERN application
* Multi-container orchestration with Docker Compose
* Container networking
* Environment variable management
* Production-ready project structure
* Full-stack application deployment workflow

---

## ⚙️ Getting Started

### Clone the Repository

```bash
git clone https://github.com/Arsalantandel/Dockerize-MERN-ecommerce.git

cd Dockerize-MERN-ecommerce
```

### Run with Docker Compose

```bash
docker compose up --build
```

The application will be available at:

* Frontend → http://localhost:3000
* Backend → http://localhost:5000

To stop the containers:

```bash
docker compose down
```

To remove containers, networks, and volumes:

```bash
docker compose down -v
```

---

## 📦 Docker Commands

Build containers

```bash
docker compose build
```

Start containers

```bash
docker compose up
```

Run in detached mode

```bash
docker compose up -d
```

View running containers

```bash
docker ps
```

View logs

```bash
docker compose logs -f
```

Stop containers

```bash
docker compose down
```

---

## 📚 Learning Outcomes

This project demonstrates practical experience with:

* Docker Images
* Docker Containers
* Docker Compose
* Docker Networking
* Multi-container Applications
* MERN Stack Deployment
* Environment Variables
* Production-ready Containerization

---

## 👨‍💻 Author

**Arsalan Tandel**



GitHub: https://github.com/Arsalantandel
