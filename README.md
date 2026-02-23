# Kaj

## Table of Contents

- 🗺️ [Admin dashboard](#admin-dashboard)
- 📄 [Git Cheatsheet](#git-cheatsheet)
- 💡 [Introduction](#introduction)
- 🏃‍♂️ [Run the App](#run-the-app)
- ⛔️ [Known Issues](#known-issues)

## Admin dashboard

### ✔️ Avklarade Uppdrag
- ✔️ Maven
- ✔️ Docker
- ✔️ Frontend (NextJS)
- ✔️ Alla i gruppen har projektet implementerat   
- ✔️ Git konflikter träning
- ✔️ Landing page  
    - ✔️ Logo      
- ✔️ User API  
    - ✔️ Create user    
    - ✔️ Get all users    
    - ✔️ Get user    (by id)   
    - ✔️ Update user (by id)   
    - ✔️ Delete user (by id)  

## Introduction     
An experimental project for managing platforms as an admin. The system allows you to manage users, perform database operations, view logging, and use admin tools.

## Run the App

### Backend

#### 1. 🔧 Configure environment variables
1. 📄 Create a file called `.env` in 📁 `/backend`
    - ❕ View example file [.env.example](backend/.env.example)  
2. Add your **password**, **username**, etc., 
3. Do exactly the same but for the frontend

> ⚠️ These files are personal and will **not** be pushed to GitHub!

#### 2. 📦 Create docker containers  
1. Ensure you're in the 📁 `/backend` folder (terminal) 
    - `cd backend`   
2. Run `docker-compose up -d`  
    - ⚠️ Run this in Ubunto terminal, if you're using WSL

#### 3. 🏃 Run application
1. Ensure you're in the 📁 `/backend` folder (in both CMD and WSL) 
    - `cd backend`  
2. 
    - Run `docker-compose up -d` (in WSL)   
3. Run `mvnw spring-boot:run` (in CMD)
4. Go to  [http://localhost:8080/welcome/yourname](http://localhost:8080/welcome/yourname)
5. Web browser should display: `Welcome <yourname>! 😃`

#### 4. 🛢️ (Optional)  Run MySql directly
1. Run `docker exec -it mySqlContainer bash`
2. Run `mysql -uroot -p`
3. Type in your password (see .env file)
4. Run any SQL command directly

### Frontend

#### 1. 📁 Enter the frontend folder (terminal)
- `cd frontend` 

#### 2. 📦 Install npm libraries (terminal)
- `npm install` 
    - ❕ You only have to do this once   

#### 3. 🏃 Run application (terminal)
- `npm run dev`
    - Go to [http://localhost:3000/](http://localhost:3000/)

## Known Issues  
- ⚠️ Minimal error handling   
