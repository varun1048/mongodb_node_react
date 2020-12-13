const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://varundb:varun@cluster0.pqsyb.mongodb.net/server2",
    {useNewUrlParser:true , useUnifiedTopology: true }, 
    ()=>console.log("Database connected")
)
const CourseSchema = mongoose.Schema({
    course:String,
    tag : String,
    date:Date
})

module.exports = mongoose.model("Courses",CourseSchema)