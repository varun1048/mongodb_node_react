const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require("body-parser")
const app = express()
app.use(bodyParser.urlencoded({extended:true}))
mongoose.connect("mongodb+srv://varundb:varun@cluster0.pqsyb.mongodb.net/notesDB",{ useNewUrlParser: true ,useUnifiedTopology: true}, )

const notesSchema   ={
    title: String,
    content: String
}
const Note = mongoose.model("Note2",notesSchema)
app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html")
})

app.post('/',(req,res)=>{
    let newNote = new Note({
        title:req.body.title,
        content:req.body.content
        
    })
    newNote.save()
    res.redirect('/')

})


app.listen(3001,()=>console.log("server under :3001"))