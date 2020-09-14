const express = require('express')
const nunjucks = require('nunjucks')
// Iniciando o Server
const server = express()


server.use(express.static('public'))

// Config Templateengie
server.set("view engine", "njk")

nunjucks.configure("views", {
    express:server
})


server.get("/", function(req, res){
    return res.render("about")
})


server.get("/classes", function(req, res){
    return res.render("classes")
})



server.listen(5000, function() {
    console.log("Server is running")
})
