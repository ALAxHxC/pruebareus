//Access data para la collection Teams
const Collection=require('./collection');
const team=require('./teamCollection');
teamsCollection=new team();
const player=require('mongoose').model('player');
class Team extends Collection{
	constructor()
	{
		super(player);
	}
	async create(player){
		try{
			//verifica el equipo
			let team=await teamsCollection.getDocumentById(player.id_team);
			if(team){
				let newPlayer=await super.entity.create(player);
				return newPlayer;
			}
		throw("Cant Found Team");

		}catch(err){
			throw(err);
		}
	}
	async findByTeam(id){
		try{
				let players=await super.entity.find({id_team:id});
				return players;
			
		}catch(err){
			throw(err);
		}
	}
	async getRecent(){
			try{
				let player=await super.entity.find().sort({"date": -1}).limit(1);
				return player;
			
		}catch(err){
			throw(err);
		}
	}
	async getOld(){
			try{
				let player=await super.entity.find().sort({"date": 1}).limit(1);
				return player;
			
		}catch(err){
			throw(err);
		}
	}
	async getSuplents(){
			try{
				let player=await super.entity.countDocuments({"titular":false});
				return player;
			
		}catch(err){
			throw(err);
		}
	}


}
module.exports = Team;