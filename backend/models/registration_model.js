const mongoose=require('mongoose')
const Schema=mongoose.Schema

const userschema=new Schema({
     name:{
        type:String,
        required:true
     },
     age:{
        type:Number,
        required:true
     },
     email:{
        type:String,
        required:true
     },
     mobile:{
        type:String,
        validate: {
            validator: function(v) {
              // Custom validation function to check if input is a valid mobile number (optional)
              return v === '' || /^[0-9]{10}$/.test(v);
            },
            message: 'Invalid mobile number format. Must be a 10-digit number.',
          },
          default: '',
     },
     gender:{
        type:String,
        required:true
     }
})

module.exports=mongoose.model(
    'User',userschema
);