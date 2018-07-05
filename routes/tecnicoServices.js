const express = require('express');
const router = express.Router();
const tecnicoController=require('../controllers/tecnicoController');



router.post('/', function(req, res, next) {
  tecnicoController.addTecnico(req,res);
});
router.get('/all',function(req,res,next){
	tecnicoController.getAll(res);
});
router.get('/search/:id',function(req,res,next){
	tecnicoController.getByTeam(req.params.id,res);
});


module.exports = router;
