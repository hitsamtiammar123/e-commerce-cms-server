const router=require('express').Router();
const product=require('./routes/product');
const auth=require('./routes/auth');

router.use('/product',product);
router.use('/auth',auth);

module.exports=router;