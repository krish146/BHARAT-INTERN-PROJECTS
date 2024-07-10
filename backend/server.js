const mongoose=require('mongoose')
const express=require('express')
const cors=require('cors')
const dotenv=require('dotenv')
const trackerModel=require('./models/TransactionSchema')
const app=express();
app.use(express.json())
app.use(cors())
dotenv.config()

app.get('/retrieve',(req,res)=>{
    trackerModel.find().then((data)=>{
        if(data){ res.status(200).send(data)} else { res.send(401).send({msg:"Can't retrieve data"})}
    }).catch((err)=>{console.log(err)})
})
app.post('/AddTransaction',async (req,res)=>{
    try{
  const {name,price,description,datetime}=req.body 
  const transaction = await trackerModel.create({name,price,description,datetime})
  // Verify if this outputs the current timestamp
  if(!transaction){
    res.status(401).send({msg:"not able to insert"})
  }
  res.status(200).send({msg:"Done"})
    }
    catch(err){
        console.log(err)
    }
});

mongoose.connect(process.env.CONNECTION_URL).then(()=>{
    console.log("Connected to Mongo:")
    try{
        app.listen(process.env.PORT,()=>{console.log(`Listening to PORT ${process.env.PORT}`)})
    }
    catch(err){
     console.log("Error will connecting to port", err)
    }
}).catch((err)=>{
    console.log("Error while connecting to mongodb",err)
});



