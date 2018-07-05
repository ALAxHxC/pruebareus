//Access data para la collection Teams
const Collection=require('./collection');
const team=require('./teamCollection');
teamsCollection=new team();
const entity=require('mongoose').model('tecnico');
class Tecnico extends Collection{
	constructor()
	{
		super(entity);
	}
	async create(tecnico){
		try{
			//verifica el equipo
			let team=await teamsCollection.getDocumentById(tecnico.id_team);
			if(team){
				let newTecnico=await super.entity.create(tecnico);
				return newTecnico;
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
	async getOld(){
			try{
				let player=await super.entity.find().sort({"date": 1}).limit(1);
				return player;
			
		}catch(err){
			throw(err);
		}
	}

}
module.exports = Tecnico;