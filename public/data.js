//Envia los datos al servicio cuando esta listo
 function sendData(new_team){
 
  console.log(new_team);
    console.log(urlAddTeam(),JSON.stringify(new_team));
    $.post( urlAddTeam(),new_team, function(data, status){
        if(data.status==201){
          loadDataTeams($("#teams"));
        }
        //$('#new_team').reset();
        console.log(data,status);
    });
     hideProcesandoDatos();
  
 }
 //envia los datos para crear un jugador
 function sendDataPlayer(player,team){
  console.log(addPlayer());
   $("#new_jugador_modal").modal("hide");
   $.post(addPlayer(),player, function(data, status){
    
    console.log("Usuario",data);
    loadPlayers(team);
    //   loadDataTeams($("#teams"));
   });
 }
 //envia los datos parar crear un tecnico
 function sendDataTecnico(tecnico,team){
   $("#new_tecnico_modal").modal("hide");
   $.post(addTecnico(),tecnico, function(data, status){
    console.log("Usuario",data);
    loadCuerpoTecnico(team);
    //   loadDataTeams($("#teams"));
   });
 }
 //carga un equipo
 function loadTeam(team){
      $("#name_team").text(team.name);
      $("#image_team").attr("src",team.imagen);
      $("#escudo_team").attr("src",team.escudo);
      loadPlayers(team);
      loadCuerpoTecnico(team);
 }
 //carga jugadores
function loadPlayers(team){
   initSelect($("#players"));
  console.log(searchPlayers()+team._id);
  $.get(searchPlayers()+team._id, function(data, status){
       setPlayers(data.players)
      // console.log("Jugadores",data.players);
        $.each(data.players,(key,entry)=>{ 
              $("#players").append($('<option></option>').attr('value', key).text(entry.name+" "+entry.lastname+" "+entry.numero));
         });         

  });
}
//carga cuerpo tecnico
function loadCuerpoTecnico(team){
  console.log(searchTecnico()+team._id);
 initSelect($("#tecnicos"));
  $.get(searchTecnico()+team._id, function(data, status){
   // console.log("Cuerpo tecnico",data.cuerpo_tecnico);
    setCuerpoTecnico(data.cuerpo_tecnico)
        $.each(data.cuerpo_tecnico,(key,entry)=>{ 
              $("#tecnicos").append($('<option></option>').attr('value', key).text(entry.name+" "+entry.lastname+" "+entry.rol));
         });
    
  });
}

//muestra el modal de un jugador
function loadPlayer(player){
   var date=convertDate(player.date);
     $("#new_name_player").val(player.name);
       $("#new_lastname_player").val(player.lastname);
       $("#new_posicion_player").val(player.posicion);
       $("#new_player_nacimiento").val(date);
       $("#new_titular_player").attr("checked",player.titular);
       $("#new_player_numero").val(player.numero);
       $("#image_player").attr("src",player.imagen);
       $("#new_jugador_modal").modal("show");
        $("#send_player_team").hide();
        $("#new_team_image").hide();
}
//muestra el modal de un tecnico
function loadTecnico(tecnico){
   var date=convertDate(tecnico.date);
     $("#new_name_tecnico").val(tecnico.name);
       $("#new_lastname_tecnico").val(tecnico.lastname);
       $("#new_tecnico_nacimiento").val(date);
        $("#new_tecnico_nacionalidad").val(tecnico.nacionalidad);
       $("#new_tecnico_rol").val(tecnico.rol);
       $("#new_tecnico_modal").modal("show");
        $("#send_tecnico_team").hide();
}

//limpa modal
function cleanDataPlayer(){
    $("#new_name_player").val("");
       $("#new_lastname_player").val("");
       $("#new_posicion_player").val("");
       $("#new_player_nacimiento").val("");
       $("#new_titular_player").attr("checked",false);
       $("#new_player_numero").val(0);
       $("#image_player").attr("src","");
       $("#new_jugador_modal").modal("show");
        $("#send_player_team").show();
        $("#new_team_image").show();
}
//limpa modal//limpa modal
function cleanDataTecnico(){
       $("#new_name_tecnico").val("");
       $("#new_lastname_tecnico").val("");
       $("#new_tecnico_nacimiento").val("");
       $("#new_tecnico_nacionalidad").val("");
       $("#new_tecnico_rol").val("");
       $("#send_tecnico_team").show();
       $("#new_tecnico_modal").modal("show");
      
      
}



//Carga los equipos
function loadDataTeams(element)
{
  //console.log("cargando elementos");
            initSelect(element);
           //  console.log(urlGetTeams());
       $.get(urlGetTeams(), function(data, status){
         //   console.log(data);
         //En caso de que no exista ningun equipo
         if(data.teams.length==0){
          $('#new_team').modal('show');
         // console.log("Falta crear teams");
          return;
         }
          $.each(data.teams,(key,entry)=>{ 
              element.append($('<option></option>').attr('value', key).text(entry.name));
         });
          setTeams(data.teams);
        });
}
//inicializa un select 
function initSelect(select){
           select.empty();
            select.append('<option selected="true" value="a">Selecciona una opcción</option>');
            select.append('<option selected="false" value="-1">Nuevo Equipo</option>');
            select.prop('selectedIndex', 0);
}
