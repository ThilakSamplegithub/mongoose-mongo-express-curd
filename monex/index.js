const express=require("express")
const app=express()
app.use(express.json())
const {connection}=require("../database/db.js")
const {heroModel}=require("../schemaFiles/heroschema")
app.get("/",(req,res)=>{
   res.send("Welcome")
})
app.get("/getHeroes",async(req,res)=>{
    const {language,is_active}=req.query
    // console.log(id)
    try{
        let resp=await heroModel.find()
        res.send(resp)
    }catch(err){
        console.log(err.message)
    }
})
app.patch("/editHero/:id",async(req,res)=>{
    const {id}=req.params
    console.log(id)
    try{
        const data=req.body
        await heroModel.findByIdAndUpdate(id,data)
        // await heroModel.updateOne({_id:id},{$set:data}) also works
        res.send("got updated")
    }catch(err){
        console.log(err.message)
    }
})
app.delete("/deleteHero/:id",async(req,res)=>{
    const {id}=req.params
    console.log(id)
    try{
        // const data=req.body
        await heroModel.findByIdAndDelete(id)
        // await heroModel.updateOne({_id:id},{$set:data}) also works
        res.send("got deleted")
    }catch(err){
        console.log(err.message)
    }
})
app.post("/addHero",async(req,res)=>{
    try{
        const data=req.body
        await heroModel.create(data)
        res.send("hero data is added")
    }catch(err){
        console.log(err.message)
    }
})
app.listen(4500,async()=>{
    try{
        connection
        console.log(`mongodb connected to server`)
    }catch(err){
        console.log(err.message)
    }
    console.log("port 4500 is running")
})