require('dotenv').config()
const cors=require('cors')
const express=require("express")//also used for parsing incomming data
const app=express() //used for routing
const db=require('./db/db')
const routes=require('./routes/transactions')
const {readdirSync} = require('fs')
const path=require('path')
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(cors())

readdirSync('./routes').forEach((file) => { // mount api to all files 
      if (file.endsWith('.js')) {
            const routepath=path.join(__dirname,'routes',file);
          // app.use('/api/v1', require(`./routes/${file}`));
            app.use('/api/v1',require(routepath));
      }
  });//seems like map doesn't retunr anythings thats why it doesnt work as thought

 
( async () => {
    try{
    await db(); // Ensure db is called correctly if it returns a promise
    console.log("Listening on port:", PORT);
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
    }
    catch(error){
      console.error('Error starting server: ',error);
    }
})()
