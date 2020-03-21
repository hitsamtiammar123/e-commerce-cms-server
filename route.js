const router=require('express').Router();
const product=require('./routes/product');
const auth=require('./routes/auth');
const index=require('./routes/index');
const banner=require('./routes/banner');

router.use('/product',product);
router.use('/auth',auth);
router.use('/banners',banner);
router.use('/',index);

module.exports=router;