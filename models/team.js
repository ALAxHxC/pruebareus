exports = module.exports = function(app, mongoose) {
var mongoose = require('mongoose');
var apiSchema = new mongoose.Schema(
  { 
  name: {type: String, require:true},
  imagen: {type: String,require:true},
  escudo:{type: String,require:true},
  players:[],
  tecnico:[]
  });
 mongoose.model('teams', apiSchema);
};