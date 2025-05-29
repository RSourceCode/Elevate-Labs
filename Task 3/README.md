## Task 3

## Book List Management API  
This is a simple RESTful API built using **Node.js** and **Express.js** to manage a list of books. All CRUD operations are handled in a single file: `index.js`. The project stores data in memory and does not require a database.

## Technologies Used  
- Node.js
- Express.js
- Postman (for Testing)

## Getting Started
Run the following commands to do all required installtions:  
- Git clone
```
git clone https://github.com/RSourceCode/Elevate-Labs/tree/main/Task%203
```
- Run the command
```
npm init -y
pip install express
```
- Start the node
```
node index.js
```
Now the server will be running at http://localhost:3000

## Using the API requests

To use these API requests:
- Open Postman
- GET : /books => Returns the list of books stored
- POST : /books => Adds a new book to the existing list.  
Here's an example of raw data that is to be posted : {"id":1, "title": "Getting Started", author: "Rahul Singh"}
- PUT : /books/:id => Updates title and author of existing bookList.  
Here's an example of raw data that is to be posted : {"title": "Getting Started", author: "Rahul Singh"}
- DELETE : /books/:id => Deletes book of the particular id mentioned

