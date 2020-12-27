const express = require("express")
const ObjId = require("mongoose").Types.ObjectId

let router = express.Router()

let {postMessage} = require("../models/postM.js")

router.get('/',(req,res)=>{
    postMessage.find((err,docs)=>{
        if(!err) res.send(docs) 
        else console.log("Error while retrieving all records")
    })
})

router.post("/",(req,res)=>{
    // console.log("datas"+ req.body.title +" " + req.body.message)
    console.log(  req.body )
    let newRocord = new postMessage({
        title: req.body.title,
        message :req.body.message
    })
     
    newRocord.save((err,docs)=>{
        if(!err) res.send(docs) 
        else console.log("Error while retrieving all records")
    })
})

router.put("/:id",(req,res)=>{
    if(!ObjId.isValid( req.params.id))
        return res.status(400).send("no record given"+req.params.id)

    let updeteRocord = {
        title: req.body.title,
        message :req.body.message
    }    

    postMessage.findByIdAndUpdate(req.params.id,{$set:updeteRocord},{new:true},(err,docs)=>{
        if(!err) res.send(docs) 
        else console.log("Error while updating all records")
    })
     
})

router.delete('/:id',(req,res)=>{

    if(!ObjId.isValid( req.params.id))
    return res.status(400).send("no record given"+req.params.id)

    postMessage.findByIdAndRemove(req.params.id,(err,docs)=>{
        if(!err) res.send(docs) 
        else console.log("Error while deleting all records",JSON.stringify(err,undefined,2))
    })
     

})


module.exports = router