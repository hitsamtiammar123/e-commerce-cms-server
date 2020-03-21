const router=require('express').Router();
const product=require('./routes/product');
const auth=require('./routes/auth');
const index=require('./routes/index');

router.use('/product',product);
router.use('/auth',auth);
router.use('/',index);

module.exports=router;