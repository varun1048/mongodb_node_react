const express = require('express')
const router = express.Router()

const Courses = require("../models/CoursesSchema")

router.post('/',(req,res)=>{
    const mycourses = new Courses({
        course:req.body.course,
        tag:req.body.tag
    })

    {mycourses.save()

        .then(result =>{
            console.log(result)
        })
        .catch(err=>{
            console.log(err)
        })
    }

    res.send("done")
})

module.exports = router