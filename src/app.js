const express = require("express")
const morgan = require("morgan")
const path =require("path")
const app =express()
const mongoose = require("mongoose")


//connecting to db

mongoose.connect('mongodb://localhost/crud-mongo').then(db=> console.log("Db Connected"))
.catch(err=>console.log(err))



// importing routes
const indexRoutes= require("./routes/index")


//settings
app.set("port",process.env.PORT || 3000)
app.set("views",path.join(__dirname,"views"))
app.set("view engine","ejs")


//middlewares
app.use(morgan("dev"))
app.use(express.urlencoded({extended:false}))  //para entender informacion que se reciba de un formulario


//routes
app.use("/",indexRoutes)


app.listen(app.get("port"),()=>{
    console.log("server on port "+app.get("port"))
})