const express=require("express");
const router=express.Router();
const Todo=require("../models/Todo");


router.get("/",async(req,res)=>{
    try {
        const todos=await Todo.find();
        res.json(todos);
    } catch (error) {
        res.status(500).json({
            message:"server error",
        })
    }
})

router.post("/",async(req,res)=>{
    try {
        console.log(req);
        const {body,status}=req.body;
        const newTodo=new Todo({
            body,status
        })
        await newTodo.save()
    } catch (error) {
        res.status(500).json({
        message:"server error"}
        )
    }
})


module.exports=router