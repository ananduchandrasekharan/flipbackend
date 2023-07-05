const products=require('../models/productSchema')

//define logic to resolve client request

//get all products

exports.getAllProducts=async (req,res)=>{
    try{

        const allProducts= await products.find()
        res.status(200).json(allProducts)
    }
    catch(error){
res.status(401).json(error)
    }
}
//get paricular product id
exports.viewProduct = async(req,res)=>{

    //get product id from request
    const id=req.params.id
//logic

try{

    const product= await products.findOne({id})
    if(product){
        res.status(200).json(product)
    }
    else{
        res.status(404).json("product not found")

    }
}
catch(error){
    res.status(404).json(error)
}
}