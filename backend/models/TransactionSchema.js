// import {model,Schema} from "mongoose";

const mongoose=require('mongoose')
const Schema=mongoose.Schema

const TransactionSchema= new Schema ( {
   name:{type:String, require:true},
   price:{type:Number,required:true},
   description:{type:String,required:false,default:'none'},
   datetime:{type:Date,required:false,default:Date.now()}
});

const TransactionModel=mongoose.model('Transaction',TransactionSchema)
module.exports=TransactionModel