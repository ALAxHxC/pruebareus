exports = module.exports = function(app, mongoose) {
var mongoose = require('mongoose');
var apiSchema = new mongoose.Schema(
  {
  id_team:{type: mongoose.Schema.Types.ObjectId,index: true},
  name: {type: String},
  lastname:{type: String},
  date:{type: Date,index: true},
  posicion:{type:String},
  imagen: {type: String},
  numero:{type:Number},
  titular:{type:Boolean,index: true}
  } 
  );
 mongoose.model('player', apiSchema);
};