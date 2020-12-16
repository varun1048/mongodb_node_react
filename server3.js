const  exp = require("express")
const router = require("./routes/routing")
const app = exp()

// const bodyParser = require("body-parser")
// app.use(bodyParser.urlencoded({extended:true}))



app.use(exp.json())
app.use("/",router)

const port=3001
app.listen(port,console.log("server3 under online port:"+port))