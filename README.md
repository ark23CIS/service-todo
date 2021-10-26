## How to check it
```
test api urls:
  https://2y2hrbz2r7.execute-api.eu-west-1.amazonaws.com/dev/todos/ - PUT
    with body keys ['id, 'title', 'status', 'userID'] and type of string

  https://2y2hrbz2r7.execute-api.eu-west-1.amazonaws.com/dev/todos/{id} - DELETE
  
  https://2y2hrbz2r7.execute-api.eu-west-1.amazonaws.com/dev/todos/ - POST
    with body keys ['id, 'title', 'status', 'userID'] and type of string

  https://2y2hrbz2r7.execute-api.eu-west-1.amazonaws.com/dev/todos/{userId} - GET
```
