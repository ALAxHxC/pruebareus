const express = require('express');
const router = express.Router();
const teamController=require('../controllers/teamController');



router.post('/', function(req, res, next) {
  teamController.addTeam(req,res);
});
router.get('/all',function(req,res,next){
	teamController.getAll(res);
});
router.get('/statics',function(req,res,next){
	teamController.getStatics(res);
});
router.get('/',function(req,res,next){
	res.render('basic');
})

module.exports = router;
