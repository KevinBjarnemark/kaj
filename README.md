
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

### ⚠️ `INNAN PRESENTATION`
- ❕❕ Ta bort kommentarer
- Ta bort denna sektion innan presentation

### 👮 Grupp regler
- Skriv i gruppen innan du börjar med en feature

### 🔨 Uppdrag (postitlappar)
- ✔️ Maven
- ✔️ Docker
- ✔️ Frontend (NextJS)
- ❌❕ Alla i gruppen har projektet implementerat   

### 🔨 Kommande uppdrag
- ❌ MySQL 
    - ❌ Behöver använda MySql
    - ❌ (CRUD)
- ❌ API anrop
    - ❌ Simple API call (weather, price, synonyms, etc.,)
    - ❌ Modify the response 
        - `Example:` *It's a cold day today, perfect weather for a brisk walk in the park!*
- ❌ Creative / extra work

### 💡 Projekt ideer
- Väder applikation
    - ❌ CRUD operationer blir svårt  
    - ✔️ Behöver inte tänka på tidszoner    
    - ❌ Vad kan man använda Javas standardbibliotek till? (hashmaps etc.,)
- Veckoschema  
    - ✔️ Lätt med CRUD operationer    
    - ❌ Blir svårt med tidszoner   
    - ✔️ Lätt att använda Javas standardbibliotek (hashmaps etc.,)
- Fiktiva produkter 
    - ✔️ Lätt med CRUD operationer   
    - ✔️ Behöver inte tänka på tidszoner    
    - ✔️ Lätt att använda Javas standardbibliotek (hashmaps etc.,)

### Kursmål
- ❌ Ge exempel på hur `Javas standardbibliotek` kan användas för att lösa olika programmeringsuppgifter  
    - ❌ Behöver arrayList, hashmaps, etc., 
- ❌ Redogöra för hur olika ramverk kan använda för att lösa olika programmeringsuppgifter inom utveckling med Java
- ❌ Redogöra för datakommunikation och utveckling av nätverksapplikationer
- ❌ Redogöra för metoder och verktyg för att utveckla i en containermiljö
- ❌ Redogöra för driftsättning av program/system
- ❌ Redogöra för terminologi på engelska inom utveckling med Java

### 🌿 Branches 
- Alla har varsin branch efter dens namn
    - ❕ Denna är till för att experimentera, vi gör feature branches sen

## Introduction
<!-- TODO -->

## Features
<!-- TODO -->

## API
<!-- TODO -->

## Run Backend

### 1. 🔧 Configure environment variables
1. 📄 Create a file called `.env` in 📁 `/backend`
    - ❕ View example file [.env.example](backend/.env.example)
2. Add your **password**, **username**, etc., 

> ⚠️ This file is personal and will **not** be pushed to GitHub!

### 2. 📦 Create docker containers  
1. Ensure you're in the 📁 `/backend` folder (terminal) 
    - `cd backend`   
2. Run `docker-compose up -d`  
    - ⚠️ Run this in Ubunto terminal, if you're using WSL

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






  





