# 🚀 Production-Ready E-Commerce Deployment on Amazon EKS

A cloud-native MERN Stack e-commerce application deployed on **Amazon Elastic Kubernetes Service (EKS)** using **Docker**, **Kubernetes**, **Amazon ECR**, **AWS Application Load Balancer (ALB)**, and a **custom domain**.

This project demonstrates a complete end-to-end deployment workflow following modern DevOps practices.

---

## 📌 Project Highlights

- Dockerized MERN application
- Amazon Elastic Kubernetes Service (EKS)
- Amazon Elastic Container Registry (ECR)
- Kubernetes Deployments & Services
- Kubernetes ConfigMaps & Secrets
- AWS Load Balancer Controller
- Application Load Balancer (ALB)
- Kubernetes Ingress
- Custom Domain Configuration
- Production Frontend using Nginx
- MongoDB Atlas Integration

---

# 🏛 Architecture

```
                 Users
                   │
                   ▼
        www.arslan.bond
                   │
                   ▼
     AWS Application Load Balancer
                   │
             Kubernetes Ingress
                   │
       ┌───────────┴───────────┐
       ▼                       ▼
 Frontend Service        Backend Service
       │                       │
Frontend Deployment    Backend Deployment
       │                       │
       └──────────────┬────────┘
                      ▼
               MongoDB Atlas
```

---

# ⚙️ Tech Stack

## Frontend

- React
- Redux Toolkit
- Vite
- Bootstrap

## Backend

- Node.js
- Express.js
- MongoDB
- JWT Authentication

## DevOps

- Docker
- Kubernetes
- Helm
- kubectl

## AWS Services

- Amazon EKS
- Amazon ECR
- AWS IAM
- Elastic Load Balancer (ALB)

## DNS

- Hostinger
- Custom Domain

---

# 📁 Project Structure

```
.
├── client/
├── server/
├── k8s/
│   ├── backend/
│   ├── frontend/
│   ├── ingress/
│   ├── namespace.yaml
│   ├── configmap.yaml
│   └── secret-example.yaml
├── Dockerfile
├── docker-compose.yml
└── README.md
```

---

# 🚀 Deployment Workflow

### 1. Containerization

- Dockerized Frontend
- Dockerized Backend

↓

### 2. Container Registry

- Build Docker Images
- Push Images to Amazon ECR

↓

### 3. Kubernetes Deployment

- Namespace
- ConfigMap
- Secret
- Deployments
- Services

↓

### 4. AWS Integration

- Install AWS Load Balancer Controller
- Configure IAM Roles
- Create ALB using Kubernetes Ingress

↓

### 5. DNS

- Configure Custom Domain
- Point Domain to AWS ALB

---

# 🔥 Kubernetes Resources Used

- Namespace
- Deployment
- Service
- ConfigMap
- Secret
- Ingress

---


---

# 🛡 Security

The repository excludes sensitive information.

Ignored files include:

```
.env
node_modules/
k8s/secret.yml

```

---

# 📚 Skills Demonstrated

- Docker
- Kubernetes
- Amazon EKS
- Amazon ECR
- AWS IAM
- AWS ALB
- Kubernetes Ingress
- DNS Configuration
- Production Deployment
- Linux
- DevOps

---


# 👨‍💻 Author
**Arsalan Tandel**

GitHub: **https://github.com/Arsalantandel**
