const mongoose = require("mongoose")

var postMessage = mongoose.model('postMessage',{
    title : {type:String},
    message : {type:String}
})

module.exports= { postMessage }