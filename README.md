# Kaj

## Table of Contents

- 🗺️ [Project Scope](#project-scope)
- 📄 [Git Cheatsheet](#git-cheatsheet)
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

### 👮 Grupp regler
- Skriv i gruppen innan du börjar med en feature 
- Ha en bra attityd   

### 📣 `DEADLINE`
- En stabil version måste finnas **ett par dagar** innan den `16 Mars`         
- ❕ INGA ändringar i sista sekund

### 📣 `Minimum krav` (individuellt)
- ❕ Måste kunna förklara koden     
- ❕ Måste kunna svara på frågor som rör tekniska lösningar    

### 📣 `Minimum krav` (grupp)
- ❌ Inga kommentarer i koden       
- ✔️ (klar, men ej testad än) Minst en docker container (MySQL)       
- ❌ API (Spring Boot)      
    - ✔️ `POST` requests för att spara data i databasen   
    - ❌ `CRUD` operationer mot MySql databasen  

### 📣 `Kursmål`   
- ❌ Ge exempel på hur `Javas standardbibliotek` kan användas för att lösa olika programmeringsuppgifter  
    - ❌ Behöver arrayList, hashmaps, etc., 
- ❌ Redogöra för hur olika ramverk kan använda för att lösa olika programmeringsuppgifter inom utveckling med Java
- ❌ Redogöra för datakommunikation och utveckling av nätverksapplikationer
- ❌ Redogöra för metoder och verktyg för att utveckla i en containermiljö
- ❌ Redogöra för driftsättning av program/system
- ❌ Redogöra för terminologi på engelska inom utveckling med Java

### 💡 Projekt ide `Admin dashboard`    

### 🔨 Uppdrag (postitlappar)
- ✔️ Maven
- ✔️ Docker
- ✔️ Frontend (NextJS)
- ✔️ Alla i gruppen har projektet implementerat   
    - ❌ Jakob?
- ✔️ Git konflikter träning
- ✔️ Landing page  
    - ✔️ Logo    
- ❌ User API 
    - ✔️ Create user   
    - ✔️ Get all users   
    - ❌ Get user    (by id)
    - ❌ Update user (by id)
    - ❌ Delete user (by id)


### 🔨 Pågående uppdrag  
- 👤 **Anton**
    - ❌ 
- 👤 **Kevin**  
    - ❌
- 👤 **Christoffer**   
    - ❌ 
- 👤 **Jakob**
    - ❌ 

### 🌿 Branches 
- Alla har varsin branch efter dens namn
    - ❕ Denna är till för att experimentera, vi gör feature branches sen

## Git Cheatsheet

### 🦾 Basics
1. See which branch you're on
    - `git branch`
2. Make sure you're on the correct branch
    - `git checkout YOUR_BRANCH`
3. Update your branch, so it's in sync with main branch 
    - `git pull origin main`  
    - ⚠️ If conflicts occur: resolve them, then `git add .` and `git commit`  
4. Work on your feature
    - ♻️ Cycle
        - `git add .`
            - Adds all changes to the upcoming commit
        - `git commit -m "DESCRIPTION"`
            - Commits your changes locally
                - This is like a checkpoint in a game
        - `git push`  
            - Push the changes to GitHub (your branch)  
    - 💡 Pull from main regularly to avoid big conflicts:
        - `git pull origin main` (ca 1 gång/dag om teamet är aktivt)
5. When the feature is done:
    - Create a pull request (GitHub)  
    - Wait for other team members to verify  
    - Merge into the main branch (via GitHub)  

## Introduction
<!-- TODO -->

## Features
<!-- TODO -->

## API
<!-- TODO -->

## Run the App

### Backend

#### 1. 🔧 Configure environment variables
1. 📄 Create a file called `.env` in 📁 `/backend`
    - ❕ View example file [.env.example](backend/.env.example)  
2. Add your **password**, **username**, etc., 
3. Do exactly the same but for the frontend

> ⚠️ This file is personal and will **not** be pushed to GitHub!

#### 2. 📦 Create docker containers  
1. Ensure you're in the 📁 `/backend` folder (terminal) 
    - `cd backend`   
2. Run `docker-compose up -d`  
    - ⚠️ Run this in Ubunto terminal, if you're using WSL
    - ❕ You only have to do this once

#### 3. 🏃 Run application
1. Ensure you're in the 📁 `/backend` folder (in terminal) 
    - `cd backend`
2. Run `mvnw spring-boot:run` 
3. Go to  [http://localhost:8080/welcome/yourname](http://localhost:8080/welcome/yourname)
4. Web browser should display: `Welcome <yourname>! 😃`

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






  





