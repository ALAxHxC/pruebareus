
//Controlador de Equipos

const Player=require("../database/playerCollection");
const playerEntity=new Player();

exports.addPlayer=async function(req,res){
	try{
		let newTeam=await playerEntity.create(req.body);
		res.status(201).json({status:201,team:newTeam});
	}catch(err){
		console.log(err.stack,err.cause);
		res.status(400).json({status:400,error:"Payer error",cause:err.cause});
	}
};

exports.getAll=async function(res){
	try{
		let players=await playerEntity.getAll();
		res.status(201).json({status:201,players:players});
	}catch(err){
		console.log(err.stack,err.cause);
		res.status(400).json({status:400,error:"Payer error",cause:err.cause});
	}
};
exports.getByTeam=async function(id,res){
	try{
		let players=await playerEntity.findByTeam(id);
		res.status(201).json({status:201,players:players});
	}catch(err){
		console.log(err.stack,err.cause);
		res.status(400).json({status:400,error:"players error",cause:err.cause});
	}
};