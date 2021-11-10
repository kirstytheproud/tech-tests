
# Marvel API Tech Test Continued
## Objectives
Create a  spring boot REST API to CRUD characters from the marvel universe. You will need 

## Step 1: GET

Build the following endpoints

### GET /character/ids 

```json
[1, 2, 3, 4, 5]
```

### GET /characters/1011334
### Snippet:
```json
{  
  "id": 1011334,  
  "name": "3-D Man",  
  "description": "",  
  "modified": "2014-04-29T14:18:17-0400",  
}
```

### GET /characters?modifiedBefore=DATE
### Snippet:
```json
{  
  "id": 1011334,  
  "name": "3-D Man",  
  "description": "",  
  "modified": "2014-04-29T14:18:17-0400"
}
```

## Step 2. Create a One-to-One Relationship

Change the GET /characters/:id so that it returns

```json
{  
  "id": 1011334,  
  "name": "3-D Man",  
  "description": "",  
  "modified": "2014-04-29T14:18:17-0400",  
  "thumbnail": {  
    "path": "http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784",  
    "extension": "jpg"  
  }
}
```

