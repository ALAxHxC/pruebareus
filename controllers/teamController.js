
//Controlador de Equipos

const Team=require("../database/teamCollection");
const Player=require("../database/playerCollection");
const Tecnico=require("../database/tecnicoCollection");
const teamEntity=new Team();
const playerEntity=new Player();
const tecnicoEntity=new Tecnico();

exports.addTeam=async function(req,res){
	try{
		let newTeam=await teamEntity.create(req.body);
		res.status(201).json({status:201,team:newTeam});
	}catch(err){
		console.log(err.stack,err.cause);
		res.status(400).json({status:400,error:"Team error",cause:err.cause});
	}
};

exports.getAll=async function(res){
	try{
		let teams=await teamEntity.getAll();
		res.status(201).json({status:201,teams:teams});
	}catch(err){
		console.log(err.stack,err.cause);
		res.status(400).json({status:400,error:"Team error",cause:err.cause});
	}
};
exports.getStatics=async function(res){
	try{
		let count_teams=await teamEntity.count();
		let count_players=await playerEntity.count();
		let jugador_joven=await playerEntity.getRecent();
		let jugador_viejo=await playerEntity.getOld();
		let jugadores_suplentes=await playerEntity.getSuplents();
		let avg_suplentes=await teamEntity.getAvgSuplents(count_players);
		let tecnico_viejo=await tecnicoEntity.getOld();
		res.status(200).json({
			total_equipos:count_teams,
			total_players:count_players,
			jugador_joven: jugador_joven,
			jugador_viejo:jugador_viejo,
			jugadores_suplentes:jugadores_suplentes,
			avg_suplentes:avg_suplentes,
			tecnico_viejo: tecnico_viejo
		});
	}catch(err){
			console.log(err.stack,err.cause);
		res.status(400).json({status:400,error:"Team error",cause:err.cause});
	}
}
