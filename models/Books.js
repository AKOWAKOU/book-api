const mongoose = require('mongoose');

const livreSchema = new mongoose.Schema({
  titre: { type: String, required: true },
  auteurPrincipal: { type: mongoose.Schema.Types.ObjectId, ref: 'Author', required: true },
  auteursSecondaires: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Author' }],
  categorie: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
  disponible: { type: Boolean, default: true },
});

module.exports = mongoose.model('Books', livreSchema);
