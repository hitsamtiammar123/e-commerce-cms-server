const router=require('express').Router();
const controller=require('../controllers/BannerController');

router.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader("Access-Control-Allow-Headers", "*");
    next();
})
router.get('/',controller.index);
router.post('/',controller.add);

module.exports=router;