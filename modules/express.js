const express = require('express')

const app = express() 

app.get('/home', (req, res) =>{
    res.contentType("application/html");
    res.status(200).send("<h1>home page</h1>");
});

app.get('/users', (req, res) =>{
    const users = [
    {
        name: "marcos g",
        email: "marcos@.com",

    } 
];

    res.status(200).json(users);
});

const port = 8080;

app.listen(port, ()=>console.log(`rodando com express ${port}`))