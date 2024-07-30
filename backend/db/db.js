const mongoose = require('mongoose')
const db = async () =>{
    try{
        // mongoose.set( 'strictQuery',false )
        await mongoose.connect(process.env.Connection_Url)
        console.log("DB Connected")
    }
    catch(error){  
        console.log('DB Connected  Error')
    }
}

module.exports=db;
