const express=require("express")
const connect = require("./db")
const user = require("./user")
let app=express()
app.use(express.json())

app.get("/",(req,res)=>{
    res.status(200).send("welcome to api")
})
app.get("/user",async(req,res)=>{
    let{gender,maths,science,english}=req.params
    let data = await user.find({gender: gender,maths: maths, science: science,english: english,}).count()
    res.status(200).send(data)
})
app.post("/user",async(req,res)=>{
    await user.create(req.body)
    res.status(201).send(req.body)
})
app.patch("/user/:id",async(req,res)=>{
    let {id}=req.params
    let data=await user.findByIdAndUpdate(id,req.body)
    res.status(200).send(data)
})
app.delete("/user/:id",async(req,res)=>{
    let {id}=req.params
    let data=await user.findByIdAndDelete(id)
    res.status(200).send(data)
})

app.listen(8090,()=>{
    console.log("8090 srver");
    connect()
})