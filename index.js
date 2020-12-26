require('./db')
const express = require("express")
const body = require("body-parser")
const app = express()

let postMessages = require("./controllers/postMC.js")

app.use(body.json())

app.listen(5000,console.log("Port under : 5000"))

app.use("/postMessages",postMessages)