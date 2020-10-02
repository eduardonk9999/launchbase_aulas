const express = require('express')
const nunjucks = require('nunjucks')
// Iniciando o Server
const server = express()

// Arq de vídeos
const videos = require("./data")

server.use(express.static('public'))

// Config Templateengie
server.set("view engine", "njk")

nunjucks.configure("views", {
    express:server
})


server.get("/", function(req, res){
    const data = {
        avatar_url: "https://avatars1.githubusercontent.com/u/18013936?s=460&u=6473577c965c80a490813f368c029bf7cbb6aa85&v=4",
        name: "Eduardo Silva",
        role: "Front End",
        description: 'Fazedor de site',
        links: [
            { name: "Github", url:""},
            { name: "Twitter", url:""},
            { name: "Linkedin", url:""},

        ]
    }



    return res.render("about", { data: data })
})


server.get("/classes", function(req, res){
    return res.render("classes", { items: videos })
})


server.get("/video", function(req, res){
    const id = req.query.id

    const video = videos.find(function(video) {
        if(video.id == id) {
            return true
        }
    })
    if (!video) {
        return res.send("Video not found!")
    }

    return res.render("video", { item: video })
})


server.listen(5000, function() {
    console.log("Server is running")
})
