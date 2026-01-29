sequenceDiagram
    participant browser
    participant server

    browser->>Server GET https://studies.cs.helsinki.fi/exampleapp/spa
    activate server
    SERVER ->> BROWSER returns spa.html
    deactivate server 

    browser->>Server GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    SERVER ->> BROWSER returns main.css (status 200 ok)
    deactivate server 

    browser->>Server GET https://studies.cs.helsinki.fi/exampleapp/spa.js
    activate server
    SERVER ->> BROWSER returns spa.js (status 200 ok)
    deactivate server 


    browser->>Server GET  https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    SERVER ->> BROWSER returns data.json object (status 200 ok)
    deactivate server 
