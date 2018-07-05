//Access data para la collection Teams
const Collection=require('./collection');
const team=require('mongoose').model('teams');
class Team extends Collection{
	constructor()
	{
		super(team);
	}
	async getAvgSuplents(total_players){
	try{
	let teams=await super.entity.aggregate([{
     $lookup:
       {
         from: "players",
         localField: "_id",
         foreignField: "id_team",
         as: "jugadores"
       }
  },{
     $lookup:
       {
         from: "tecnicos",
         localField: "_id",
         foreignField: "id_team",
         as: "tecnicos"
       }
  }]);
	return this.getAvgCalcualte(teams,total_players);
	//return teams;
     
	}catch(err){
		console.log(err.stack,err.causes)
		throw(err);
	}

	}
	getAvgCalcualte(teams,total_players){
		let actual_date=new Date();
		let team_size={name:null,size:0};
		let prom_players=0;
		let prom_age=0;
		let teams_suplentes=Array();
		for (var team of teams) {
			let prom_player=0;
			//nomina de jugadores
			if(team_size.size<team.jugadores.length){
					team_size.name=team.name;
				team_size.size=team.jugadores.length;
			}
			prom_players+=team.jugadores.length;
  			for (var player of team.jugadores){
  				if(!player.titular)	prom_player++;
  				let edad=new Date(player.date);
  				//suma las edades
  				//console.log(edad.getFullYear());

  					prom_age+=(actual_date.getFullYear()-edad.getFullYear());
  			}
  			let suplentes_avg=prom_player/team.jugadores.length;
  			teams_suplentes.push({team:team.name,suplentes_avg:suplentes_avg});
  			
		}
		prom_age=prom_age/total_players;
		prom_players=prom_players/teams.length;
		return {
			teams_suplentes:teams_suplentes,
			prom_age:prom_age,
			team_size: team_size,
			prom_players:prom_players,
			tecnicos:this.getTecnicos(teams)
		}

	}
	getTecnicos(teams){
		let tecnicos=Array();
		for (var team of teams) {
			for (var tecnico of team.tecnicos){
				if(!(tecnico.nacionalidad.trim() ===team.name.trim())){
						tecnicos.push({team:team.name,tecnico:tecnico.name});

				}
			}
		}

		return tecnicos;
	}
}
module.exports = Team;