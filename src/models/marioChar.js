const mongoose =require('mongoose')

//  Your code goes here
const Schema =mongoose.Schema

const mariochar =new Schema({
    name:{type:String},
    weight:Number
})

const marioModel =mongoose.model("Mario",mariochar)

module.exports = marioModel;