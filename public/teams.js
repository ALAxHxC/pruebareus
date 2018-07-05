(function($) {
    var namespace;
    namespace = {
      //get de paises
      loadTeams: function(element){
        loadDataTeams(element);
    },
    loadTeam:function(team){
     loadTeam(team);
    },
        //Crea un equipo
    createTeam:  function(){
     // try{
        let new_team={
          name: $('#new_team_name').val(),
          imagen: $('#new_team_image').val(),
          escudo: $('#new_team_escudo').val(),
          players:[],
          tecnico:[]
        };
      //  console.log(new_team);
       sendData(new_team);
        //En caso de querer manejar por base 64
         // var base64_image=document.getElementById('new_team_image').files[0];
        //var base64_escudo=document.getElementById('new_team_escudo').files[0];
        //loadBase64Images(base64_image,base64_escudo,new_team);
        //console.log(new_team.imagen.result);
    },
    createPlayer:function(team){
      var player={
            id_team:team._id,
            name: $("#new_name_player").val(),
            lastname: $("#new_lastname_player").val(),
            date: $("#new_player_nacimiento").val(),
            posicion:  $("#new_posicion_player").val(),
            imagen: $("#new_team_image").val(),
            numero: $("#new_player_numero").val(),
            titular:  $("#new_titular_player").is(':checked'),
      };
      console.log(player);
      sendDataPlayer(player,team);
    },
    loadPlayer: function(player){
     // console.log(player);
     loadPlayer(player);
      
    },
     loadTecnico: function(tecnico){
    //  console.log(tecnico);
      loadTecnico(tecnico);
    },
    createTecnico:function(team){
      var tecnico={
            id_team:team._id,
            name:   $("#new_name_tecnico").val(),
            lastname: $("#new_lastname_tecnico").val(),
            date: $("#new_tecnico_nacimiento").val(),
            nacionalidad:  $("#new_tecnico_nacionalidad").val(),
            rol: $("#new_tecnico_rol").val()
      };
     // console.log(tecnico);
      sendDataTecnico(tecnico,team);
    },
    loadReport:function(){
      $.get(reporte(),function(data,status){
        console.log(data);
        $('#modal_report').modal("show");
        $('#total_equipos').val(data.total_equipos);
        $('#total_jugadores').val(data.total_players);
        $('#total_suplentes').val(data.jugadores_suplentes);
        $('#promedio_edad').val(data.avg_suplentes.prom_age);
        $('#promedio_suplentes').val(data.avg_suplentes.prom_players);
        $('#equipo_masjugadores').val(data.avg_suplentes.team_size.name+" "+data.avg_suplentes.team_size.size+"# Jugadores")
        $('#tecnico_mas_viejo').click(function(event){
          $('#modal_report').modal("hide");
          loadTecnico(data.tecnico_viejo[0]);
        });
        $('#jugador_mas_joven').click(function(event){
          $('#modal_report').modal("hide");
          loadPlayer(data.jugador_joven[0]);
        });
        $("#jugador_mas_viejo").click(function(event){
          $('#modal_report').modal("hide");
            loadPlayer(data.jugador_viejo[0]);
        });
        $('#promedio_edades').click(function(event){
          let csv=arrayToCSV(data.avg_suplentes.teams_suplentes);
          descargarcsv(csv,"edades.csv", 'text/csv;encoding:utf-8');
          console.log(csv);
        })
        $('#tecnicos_nacionalidades').click(function(event){
           let csv=arrayToCSV(data.avg_suplentes.tecnicos);
           console.log(csv);
          descargarcsv(csv,"edades.csv", 'text/csv;encoding:utf-8');
        })
       

      });
    }
  };
   window.ns = namespace;

})(this.jQuery);
//transforma a base 64 las imagenes
function  loadBase64Images(image,escudo,new_team){
   var reader_image  = new FileReader();
   var reader_escudo  = new FileReader();
   reader_image.readAsDataURL(image);
   reader_image.onload = function(e){
    //console.log(reader_image.result);
       new_team.image=reader_image.result;
       reader_escudo.readAsDataURL(escudo);   
   };
   reader_escudo.onload = function(e){
    //console.log(reader_escudo.result);
      new_team.escudo=reader_escudo.result;
      sendData(new_team);
   };
 }
 function convertDate(value){
  var now = new Date(value);
  var day = ("0" + now.getDate()).slice(-2);
  var month = ("0" + (now.getMonth() + 1)).slice(-2);
  var today = now.getFullYear()+"-"+(month)+"-"+(day) ;  
  return today;
 }


