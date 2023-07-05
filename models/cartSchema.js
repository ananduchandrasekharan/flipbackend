//Import mongoose

const mongoose=require('mongoose');

//define scheme for product model
const cartSchema = new mongoose.Schema({

    id:{
        type:Number,
        required:true,
        unique:true,
    },
    price:{
        type:Number,
        required:true,
       
    },

    title:{
        type:String,
        required:true,
    },
 
 
    image:{
        type:String,
        required :true,
    },
    
    quantity:{
        type:Number,
        required :true,
    },
    grandTotal:{
        type:Number,
        required :true,
    },
    
    
})


//Create a model to store products

const carts=new mongoose.model('carts',cartSchema)

//export the model

module.exports= carts