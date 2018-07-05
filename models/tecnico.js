exports = module.exports = function(app, mongoose) {
var mongoose = require('mongoose');
var apiSchema = new mongoose.Schema(
  { 
  id_team:{type: mongoose.Schema.Types.ObjectId,index: true},
  name: {type: String},
  lastname:{type: String},
  date:{type: Date},
  nacionalidad: {type: String},
  rol:{type:String}
  } 
  );
 mongoose.model('tecnico', apiSchema);
};