
//Controlador de Cuerpo Técnico

const Tecnico=require("../database/tecnicoCollection");
const tecnicoEntity=new Tecnico();

exports.addTecnico=async function(req,res){
	try{
		let newTecnico=await tecnicoEntity.create(req.body);
		res.status(201).json({status:201,tecnico:newTecnico});
	}catch(err){
		console.log(err.stack,err.cause);
		res.status(400).json({status:400,error:"Team error",cause:err.cause});
	}
};

exports.getAll=async function(res){
	try{
		let cuerpo_tecnico=await tecnicoEntity.getAll();
		res.status(201).json({status:201,cuerpo_tecnico:cuerpo_tecnico});
	}catch(err){
		console.log(err.stack,err.cause);
		res.status(400).json({status:400,error:"Team error",cause:err.cause});
	}
};
exports.getByTeam=async function(id,res){
	try{
		let cuerpo_tecnico=await tecnicoEntity.findByTeam(id);
		res.status(201).json({status:201,cuerpo_tecnico:cuerpo_tecnico});
	}catch(err){
		console.log(err.stack,err.cause);
		res.status(400).json({status:400,error:"players error",cause:err.cause});
	}
};