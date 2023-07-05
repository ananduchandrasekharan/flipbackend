const express=require('express')


//import product controller

 const productContoller=require('../controllers/productController')

 //import wishliast controller

 const wishlistController=require('../controllers/wishlistController')

 //import cart controller
const cartController = require('../controllers/cartController')
//using express create an object for router class inorder to setup

const router= new express.Router()

//resolve client request in varioys server routes


//getall products

router.get('/products/all-products',productContoller.getAllProducts)

router.get('/products/viewproducts/:id',productContoller.viewProduct)



//add to wishlist
router.post('/products/addtowishlist',wishlistController.addtowishlist)

//getwishlist
router.get('/products/getwishlist',wishlistController.getWishlist)

//delete wishlist
router.delete('/products/deletewishlist/:id',wishlistController.deleteWishlist)

//add to cart

router.post('/products/addtocart',cartController.addToCart)

//getcart

router.get('/products/getcart',cartController.getCart)

//delete cartitem
router.delete('/products/deletecart/:id',cartController.removeCartItem)


//cart increment
router.get('/products/increment/:id',cartController.incrementCart)

//cart decrement
router.get('/products/decrement/:id',cartController.decrementCart)
//export router
module.exports=router