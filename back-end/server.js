const express = require('express')
const nunjucks = require('nunjucks')


// Iniciando o Server
const server = express()



server.get("/", function(req, res){
    return res.send("Hi!!!");
})

server.listen(5000, function() {
    console.log("Server is running")
})
