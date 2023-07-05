//Import mongoose

const mongoose=require('mongoose');

//define scheme for product model
const productSchema = new mongoose.Schema({

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
    description:{
        type:String,
        required :true,
    },
    
    category:{
        type:String,
        required :true,
    },

    
    image:{
        type:String,
        required :true,
    },
    rating:{
       rate:{ type:String,
        required :true,
    },
       count:{ type:Number,
         required :true,
     },
},
    
    
})


//Create a model to store products

const products=new mongoose.model('products',productSchema)

//export the model

module.exports=products