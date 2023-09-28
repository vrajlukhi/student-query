const mongoose=require("mongoose")

const userschema= new mongoose.Schema({
    name: String,
    gender: String,
    class: String,
    section: String,
    maths: Number,
    science: Number,
    english: Number
})

let user=mongoose.model("studentqueries",userschema)

module.exports=user