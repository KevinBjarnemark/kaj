
# Kaj

## Table of Contents

- 🗺️ [Project Scope](#project-scope)
- 💡 [Introduction](#introduction)
- ⭐️ [Features](#features)
- 🌐 [API](#api)
- 🏃‍♂️ [Run the App](#run-the-app)
- ☁️ [Deployment](#deployment-with-github-actions)
- ⛔️ [Known Issues](#known-issues)
- 🔧 [Testing](#testing)
- 🖥️ [Code Documentation](#code-documentation)
- ✨ [Credits](#credits)
- 🖊️ [References](#references)

## Project Scope
1. GitHub
2. MySQL, maven, docker, CRUD, API anrop, etc., 
    - Simple API call (weather, price, synonyms, etc.,)
3. Modify the response 
    - `Example:` *It's a cold day today, perfect weather for a brisk walk in the park!*
4. Creative / extra work

### 🌿 Branches 
<!-- TODO -->

## Introduction
<!-- TODO -->

## Features
<!-- TODO -->

## API
<!-- TODO -->

## Run Backend

### 1. 🔧 Configure environment variables
1. 📄 Create a file called `.env` in 📁 `/backend`
    - ❕ View example file [.env.example](.env.example)
2. Add your **password**, **username**, etc., 

> ⚠️ This file is personal and will **not** be pushed to GitHub!

### 2. 📦 Create docker containers  
1. Ensure you're in the 📁 `/backend` folder (terminal) 
    - `cd backend`   
2. Run `docker-compose up -d`  

### 3. 🏃 Run application
1. Ensure you're in the 📁 `/backend` folder (in terminal) 
    - `cd backend`
2. Run `mvnw spring-boot:run` 
3. Go to  [http://localhost:8080/welcome/yourname](http://localhost:8080/welcome/yourname)
4. Web browser should display: `Welcome <yourname>! 😃`

### 4. 🛢️ (Optional)  Run MySql directly
1. Run `docker exec -it mySqlContainer bash`
2. Run `mysql -uroot -p`
3. Type in your password (see .env file)
4. Run any SQL command directly

## Run Frontend

### 1. 📁 Enter the frontend folder (terminal)
- `cd frontend` 

### 2. 📦 Install npm libraries (terminal)
- `npm install` 

### 3. 🏃 Run application (terminal)
- `npm run dev`
    - Go to [http://localhost:3000/](http://localhost:3000/)

## Deployment
<!-- TODO -->

## Known Issues
<!-- TODO -->

## Testing
<!-- TODO -->

## Code Documentation
<!-- TODO -->

## Credits
<!-- TODO -->

## References






  





