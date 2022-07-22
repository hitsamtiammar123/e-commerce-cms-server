const router=require('express').Router();
const controller=require('../controllers/ProductController');
const authenticated=require('../middleware/authenticated');

router.use(authenticated);
router.get('/',controller.index);
router.post('/',controller.create);
router.put('/:id',controller.update);
router.delete('/:id',controller.delete);

module.exports=router;