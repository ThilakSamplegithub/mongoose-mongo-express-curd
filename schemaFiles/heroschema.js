const mongoose=require("mongoose")
const heroSchema=new mongoose.Schema({
    name:String,
    power:Number,
    city:String,
    villain:String,
    language:String,
    is_active:Boolean
},{versionKey:false})
        const heroModel= mongoose.model("heros",heroSchema)
        module.exports={heroModel}