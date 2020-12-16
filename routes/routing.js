const  exp = require("express")
const router = exp.Router()

const mybd = require('../models/db')


router.post('/send', (req,res)=>{

    let send = new mybd({
        name:req.body.name,
        
        age: req.body.age
    })  
    {
        send.save()
        .then((suc)=>console.log(suc))
        .catch((err)=>console.log(err))
    }

    res.redirect('/out')
})

router.get('/out',(q,s)=>{
    s.send("sce")
})

router.get('/',(q,s)=>{
    s.send("<h1 /> home page")
})
module.exports= router