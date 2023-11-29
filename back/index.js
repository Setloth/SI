const express = require("express")
const app = express()
const cors = require("cors")

const types = {
    MUSIC: "music"
}

app.use(cors())

const projects = [
 
]

for (var i = 0; i < 10; i++) {
    projects.push({
        id: (Math.random() + 1).toString(36).substring(7),
        name: (Math.random() + 1).toString(36).substring(5),
        description: (Math.random() + 1).toString(36).substring(32),
        type: types.MUSIC,
        contributors: ["SI", (Math.random() + 1).toString(36).substring(7)],
        length: Math.round(45 + Math.random() * (3*60), 2),
        createdAt: Date.now()
    })
}

app.get("/projects", (req,res) => {
    res.send(projects)
})

app.get("/projects/:id", (req,res) => {
    res.send(projects.find(p => p.id == req.params.id))
})

app.listen(8080)