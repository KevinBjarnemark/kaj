

**Filerna och infon nedan är från från learnpoint**


## `docker-compose.yaml`
Denna fil är för att spinna upp en mysql på en docker container. Innan ni kör scriptet behöver ni:
1. Ändra namnet på databasen i filen
2. Ändra lösenordet om ni önskar det
3. Ändra

Documents/DEV/dbfiles
 
under volumes så att den pekar mot en mapp på er egen lokala dator

volumes:
       - ~/Documents/DEV/dbfiles:/var/lib/mysql

För att köra scriptet:
1. Starta terminalen
2. Navigera (cd) till mappen där docker-compose.yaml
3. i terminalen skriv 
docker-compose up 


För att komma åt mysql i docker containern så

docker exec -it <container-id> bash

