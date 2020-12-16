const mongoose= require("mongoose")
mongoose.connect("mongodb+srv://varundb:varun@cluster0.pqsyb.mongodb.net/server3",
    {useNewUrlParser:true , useUnifiedTopology: true }, 
    ()=>console.log("new Database connected")
)
let schema = mongoose.Schema({
    name:String,
    age:Number
})

module.exports = mongoose.model("info",schema)