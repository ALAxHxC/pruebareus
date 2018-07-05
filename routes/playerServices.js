const express = require('express');
const router = express.Router();
const playerController=require('../controllers/playerController');



router.post('/', function(req, res, next) {
  playerController.addPlayer(req,res);
});
router.get('/all',function(req,res,next){
	playerController.getAll(res);
});
router.get('/search/:id',function(req,res,next){
	playerController.getByTeam(req.params.id,res);
});
router.get('/',function(req,res,next){
	res.render('basic');
});

module.exports = router;
