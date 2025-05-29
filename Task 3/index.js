import express from "express"
const app = express();
const port = 3000;

let bookList = [{
        id: 1,
        title: "Semiconductors and Electronics",
        author: "Alok Dutta"}];

app.use(express.json());
app.use(express.urlencoded({extended: true}));

// API requests
app.get('/books', (req, res) =>{
   return res.json(bookList)
})

app.post('/books', (req, res) => {
    let {id, title, author} = req.body || {};
    // console.log(`id : ${id}, title: ${title}, author: ${author}`);
    // console.log(req.body);
    if(!id || !title || !author){
        return res.status(400).json("Please provide id, title, and author");
    }
    if(bookList.find(book => book.id == id)){
        return res.status(400).json("Book with this id already exists");
    }
    bookList.push({id:id, title:title, author:author});

    return res.json("Book added successfully");
})

app.put('/books/:id', (req, res) => {
    let {id} = req.params || {};
    let {title, author} = req.body || {};
    if(!id){
        return res.status(404).json("Invalid id");
    }
    if(!title  || !author){
        return res.status(404).json("Please provide title or author to update");
    }
    if(!bookList.find(book => book.id == id)){
        return res.status(404).json("Book not found");
    }
    let bk = bookList.find(book => book.id == id);
    bk.title = title;
    bk.Author = author;
    return res.json(`Book with id ${bk.id} updated successfully`);
})

app.delete('/books/:id', (req, res) => {
    let {id} = req.params || {};
    if(!id){
        return res.status(400).json("Book not found or invalid id");
    }

    if(!bookList.find(book => book.id == id)){
        return res.status(404).json("Book not found or invalid id");
    }
    let bk = bookList.find(book => book.id == id);
    bookList = bookList.filter(book => book.id == id);
    return res.json(`Book with id ${bk.id} deleted successfully`);
})

app.listen(port, (req, res) =>{
    console.log(`Server is running on http://localhost:${port}`);
})
