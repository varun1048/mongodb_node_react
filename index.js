require('./db')
const express = require("express")
const app = express()
const cors = require("cors")


let postMessages = require("./controllers/postMC.js") 

app.use(cors())
app.use(express.json())

app.use("/postMessages",postMessages)
app.listen(5000,console.log("Port under : 5000"))
