const router=require('express').Router();
const controller=require('../controllers/BannerController');


router.get('/',controller.index);
router.post('/',controller.add);
router.delete('/:name',controller.delete);

module.exports=router;