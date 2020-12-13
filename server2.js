const express = require('express')
const routCourses = require("./routes/courses")
const app = express()

app.use(express.json())
app.use("/api/courses",routCourses)

app.listen(3001,()=>console.log("server under :3001")) 
