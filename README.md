# 🧪 Diagnostic Lab Report System

A professional-grade backend API built with **Node.js**, **Express**, and **TypeScript**. This system manages patient data and diagnostic test results.

---

## 🛠️ Tech Stack

| Technology | Usage |
| :--- | :--- |
| **TypeScript** | Type-safe development & modern syntax |
| **Node.js/Express** | Server-side logic & RESTful routing |
| **MongoDB** | NoSQL Document database |
| **Mongoose** | Schema-based data modeling |
| **Docker** | Containerized database orchestration |

---

## 🌟 Key Features

* **Patient Portal**: Seamless registration and management of patient demographics.
* **Test Management**: Create and track lab reports with status transitions (`pending` to `completed`).
* **Automated Infrastructure**: One-command database setup using Docker Compose.

---

## ⚙️ Environment Configuration

The application requires an environment file to manage credentials. Create a `.env` file in the root directory:

```env
PORT=3009
NODE_ENV=development

# MongoDB (Docker Configuration)
MONGO_INITDB_ROOT_USERNAME=yourusername
MONGO_INITDB_ROOT_PASSWORD=yourpassword
MONGO_INITDB_DATABASE=yourdb

# Connection URI
MONGODB_URI=mongodb://admin:yourpassword@localhost:27017/yourdb?authSource=admin
```
## 🚀 Getting Started

Follow these steps to get your development environment running.

### 1. Installation

First, clone the repository and install the necessary dependencies using npm:

```bash
# Clone the repository
git clone <your-repository-url>

# Navigate into the project directory
cd Diagnostic_Lab_Report_System

# Install dependencies
npm install
```
### 2. Database Setup (Docker)

This project uses Docker to ensure a consistent database environment.

Ensure **Docker Desktop is running on your machine**, then execute:

```bash
docker-compose up -d
```
### 3. Run Development Server

Once the database is up and running, you can start the TypeScript development server:

```bash
npm run dev
```
The API will be live and listening for requests at: 
```bash
http://localhost:3009
```
