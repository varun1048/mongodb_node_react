
const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://varundb:varun@cluster0.pqsyb.mongodb.net/test",
    { useNewUrlParser: true ,useUnifiedTopology: true})
    .then(()=>{
        console.log("DB connected")
    })
    .catch((err)=>{
        console.log(err)
    }
)




