const mongoose = require('mongoose');
const auteurSchema = new mongoose.Schema({
  nom:{
        type: String, 
        required: true 
    },
  prenom:{ 
        type: String, 
        required: true 
    },
  livres:[{ 
        type: mongoose.Schema.Types.ObjectId, ref: 'Books' ,
    required:false}],
});

module.exports = mongoose.model('Author', auteurSchema);
