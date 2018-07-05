var mongoose = require('mongoose');

mongoose.connect(global.MONGO);
mongoose.Promise = global.Promise;
	var db = mongoose.connection;
	db.on('error', console.error.bind(console, 'connection error:'));
	db.once('open', function() {
		console.log("Conecto DB");
});
	//inicia coleccion de base de datos
function initDatabase(app){
let team = require('../models/team')(app, mongoose);
let player = require('../models/player')(app, mongoose);
let tecnico= require('../models/tecnico')(app, mongoose);
}
/*
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Conecto con DB");
});*/

module.exports = {
  mongo: mongoose,
  initDatabase: initDatabase
};
