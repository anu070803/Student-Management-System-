# 📘 Student Management System

A full-stack web application built using React (Frontend) and Spring Boot (Backend) to manage student details such as name, email, and age.
This project allows adding, viewing, updating, and deleting student records.

# 🚀 Features
🎨 Frontend (React)

* Add new students

* View all students

* Edit existing student details

* Delete student

* Clean UI with components

* API integration with backend

🖥 Backend (Spring Boot)

* REST APIs for CRUD operations

* Uses Spring Data JPA

* Connects with MySQL database

* CORS enabled for communication with React

# 🛠 Tech Stack
Frontend

* React.js

* JavaScript

* Axios

* CSS 

Backend

* Java

* Spring Boot

* Spring Web

* Spring Data JPA

* MySQL Database

# 📁 Project Structure

    Student-Management-System/
    │
    ├── student-frontend/        # React Frontend
    │   ├── src/
    │   ├── public/
    │   └── package.json
    │
    └── student-backend/         # Spring Boot Backend
    ├── src/main/java/
    ├── src/main/resources/
    └── pom.xml


 # 🔧 How to Run the Project

▶️ 1. Run Backend (Spring Boot)

Configure Database (MySQL)

* Create a database:
  
                           CREATE DATABASE studentdb;

* Update application.properties:

      spring.datasource.url=jdbc:mysql://localhost:3306/studentdb
      spring.datasource.username=YOUR_USERNAME
      spring.datasource.password=YOUR_PASSWORD
      spring.jpa.hibernate.ddl-auto=update

* Start backend

      mvn spring-boot:run


* Your backend will run at:
http://localhost:8080/students

▶️ 2. Run Frontend (React)

* Move to frontend folder:

       cd student-frontend

* Install dependencies:

      npm install

* Start React app:

      npm start

* React runs at:
http://localhost:3000


# 🔗 API Endpoints

         | Method | Endpoint         | Description       |
         | ------ | ---------------- | ----------------- |
         | GET    | `/students`      | Get all students  |
         | GET    | `/students/{id}` | Get student by ID |
         | POST   | `/students`      | Add new student   |
         | PUT    | `/students/{id}` | Update student    |
         | DELETE | `/students/{id}` | Delete student    |

# 📸 Screenshots

* Home Page

![Home Page](https://raw.githubusercontent.com/anu070803/Student-Management-System-/main/Screenshot 2025-11-22 140113.png)
