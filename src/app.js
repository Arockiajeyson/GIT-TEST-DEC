const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const marioModel = require("./models/marioChar")

// Middlewares
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// your code goes here

app.get("/mario",async (req,res)=>{

    const data=await marioModel.find()
    res.json({
        status:"success",
        message:data
    })
})

app.get("/mario/:id",async (req,res)=>{

    const data=await marioModel.find({_id:req.params.id})
    if(data){
        res.json({
            status:"success",
            message:data
        })
    }else{
        res.status(400).json({
            message: error.message
        })
    }
})

app.post("/mario",async (req,res)=>{
    // return res.send("ok")
    try{
        const {name,weight}=req.body
        if(name && weight){
            const data =await marioModel.create({
                name:name,
                weight:weight
            })
            res.json({
                status:"success",
                message:[data]
            })
        }else{
            res.status(400).json({
                message: 'either name or weight is missing'
            })
        }
    }catch(e){
       res.json({message:e.message})
    }
})
// m

app.put("/mario/:id",async(req,res)=>{
    try{
        const data =await marioModel.find({_id:req.params.id})
        if(data){
            const updated =await marioModel.updateOne({_id:req.params.id},{...req.body})
            res.json({
                status:"success",
                message:updated
            })
        }else{
            res.status(400).json({
                message: error.message
            })
        }
    }catch(e){
        res.json({
            message:e.message
        })
    }
})

app.delete("/mario/:id",async(req,res)=>{
    try{
        const data =await marioModel.find({_id:req.params.id})
        if(data){
            const updated =await marioModel.deleteOne({_id:req.params.id})
            res.json({
                status:"success",
                message:updated
            })
        }else{
            res.status(400).json({
                message: error.message
            })
        }
    }catch(e){
        res.json({
            message:e.message
        })
    }
})
module.exports = app;