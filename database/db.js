const mongoose=require("mongoose")
// const {heroModel}=require("../schemaFiles/heroschema")
const connection=mongoose.connect("mongodb://127.0.0.1:27017/Heroes")
module.exports={connection}