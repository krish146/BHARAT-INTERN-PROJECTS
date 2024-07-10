const express= require('express')
const mongoose=require('mongoose')
const dotenv=require('dotenv')
const cors = require('cors');
const modell=require('./models/registration_model')

dotenv.config();
const PORT=process.env.PORT || 4000;

const app=express()
app.use(cors());
app.use(express.json()) //parse incomming requests 
app.use('/',(req,res,next)=>{
    console.log(req.method," ",req.path)
    next();
})

app.post('/register',async (req,res)=>{
    try{
      const {name,age,email,mobile,gender}=req.body
      if (!name || !age || !email || !gender) {
        return res.status(400).json({ error: 'Please provide name, age, email, and gender' });
      }
    
    const user=new modell({name:name,age:age,email:email,mobile:mobile,gender:gender})
    const saveduser= await user.save();
    // saveduser=await modell.create({name,age,email,mobile,gender})
        console.log("Saved: ",saveduser);
        res.status(201).json(saveduser);
    res.end()
    }

    catch(err){
        if (err.name === 'ValidationError') {
            const errors = Object.values(err.errors).map(er => er.message);
            return res.status(400).json({ error: errors });
          }

          console.error('Error in Registering:', err);
          res.status(500).json({ error: 'Failed to register user' }); // Handle other types of errors uniformly
    }
});

mongoose.connect(process.env.CONNECTION_URL).then(()=>{
    console.log("Connected to Mongo:")
    try{
        app.listen(PORT,()=>{console.log(`Listening to PORT ${PORT}`)})
    }
    catch(err){
     console.log("Error will connecting to port", err)
    }
}).catch((err)=>{
    console.log("Error while connecting to mongodb",err)
});

