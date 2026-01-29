sequenceDiagram 
    participant Browser 
    participant Server 

    Browser ->> Server POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server 
    Server ->> Browser (status 201 created) returns response: {"message":"note created"}
    deactivate server