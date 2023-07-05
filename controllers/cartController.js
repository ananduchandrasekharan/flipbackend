//import cart collection
const carts = require('../models/cartSchema')
const cart=require('../models/cartSchema')

//add to cart
exports.addToCart= async(req,res)=>{
    //get product details from the request

    const{id,title,price,image,quantity}=req.body

    //logic
try{

    const product = await carts.findOne({id})
    if(product){

        //product is in the cart collection ,so increment product quality
        product.quantity+=1

        //update product grandTotal
        product.grandTotal=product.price*product.quantity
        //toupdate product garnd total in mongodb collection
     
        product.save()

        //to send response back to client
        res.status(200).json("product added succesfully")
    }
    else{

        //product is not in the cart collection
        //add product to cart
        const newProduct = new carts({id,title,price,image,quantity,grandTotal:price})
        //save  new product

        await newProduct.save()
        //to send response back to client
        res.status(200).json("product added succesfully")
    }
}
catch(error){
    res.status(401).json(error)
}
}



//getCART


exports.getCart=async (req,res)=>{

try{
    //logic
    const allcarts = await carts.find()
    res.status(200).json(allcarts)
}
catch{
    res.status(404).json(error)
}

}





//cart deletion
exports.removeCartItem=async(req,res)=>{

    //get id from the request
    const{id}=req.params
  
    //logic for delete cart product details
    try{
      const removeCartItem = await carts.deleteOne({id})
  
      if(removeCartItem.deleteCount!=0){
        const allcarts =await carts.find()
        res.status(200).json(allcarts)
      }else{res.status(404).json("item not found")}
    }
    catch(error){
    res.status(404).json(error)
    }
   }




   //increment
   exports.incrementCart=async(req,res)=>{
    const{id}=req.params
    try{
       //logic
       //check the product in the cart collection. if it 
       const product = await carts.findOne({id})
       if(product){

        //update product quantity
        product.quantity+=1
        product.grandTotal=product.price*product.quantity
        //save changes in mongodb
        await product.save()
        //increment the quantity ,get all cart collection item and updating in particular item count
        const allitems= await carts.find()
        res.status(200).json(allitems)
       }else{
        res.status(404).json("item not found")
       }
  
    }
    catch(error){
      res.status(404).json(error)
    }
  }

//decremeny

  exports.decrementCart=async(req,res)=>{
    const{id}=req.params
    try{
       //logic
       //check the product in the cart collection. if it 
       const product = await carts.findOne({id})
       if(product.quantity==0){
        const removeCart=await carts.deleteOne({id})

        const allcarts=await carts.find()
        res.status(200).json(allcarts)
       }
    else{
       if(product){
        //update product quantity
        product.quantity-=1
        product.grandTotal=product.price*product.quantity
        //save changes in mongodb
        await product.save()
        //increment the quantity ,get all cart collection item and updating in particular item count
        const allitems= await carts.find()
        res.status(200).json(allitems)
       }else{
        res.status(404).json("item not found")
       }}
  
    }
    catch(error){
      res.status(404).json(error)
    }
  }  