const express = require("express")
const mongoose=require("mongoose")
const app=express()
app.use(express.json)
mongoose.connect('mongodb://localhost:27017/studentDb')
.then(()=>{console.log("mongodb connected")
app.listen(3000, () => {
    console.log('Server is running on port 3000');

});
})
.catch(err=>console.log(err))
const studentSchema = new mongoose.Schema({
    id:Number,
    name:String,
    course:String,
    dept:String 
})
const Student=mongoose.model('student',studentSchema)
app.get("/",(req,res)=>{
        res.send("Student management api")
})
app.post("/students",async (req,res)=>{
    try{
        const student = new Student(req.body);
        await student.save();
        res.status(201).json({
            message:'student added successfully'
        })
    }
    catch(err){
        res.status(500).json({error:err.message})
    }
})
