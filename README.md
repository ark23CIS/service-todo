## How to check it
```
test api urls:
  https://uyvlv5zu04.execute-api.eu-west-1.amazonaws.com/dev/todos - PUT
    with body keys ['id, 'title', 'status', 'userID'] and type of string

  https://uyvlv5zu04.execute-api.eu-west-1.amazonaws.com/dev/todos/{userId} - DELETE
  
  https://uyvlv5zu04.execute-api.eu-west-1.amazonaws.com/dev/todos - POST
    with body keys ['id, 'title', 'status', 'userID'] and type of string

  https://uyvlv5zu04.execute-api.eu-west-1.amazonaws.com/dev/todos/{userId} - GET
```
