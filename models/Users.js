// models/Utilisateur.js
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const utilisateurSchema = new mongoose.Schema({
  nom: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  motDePasse: { type: String, required: true },
  livresEmpruntes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Books' ,required:false}],
});

utilisateurSchema.pre('save', async function (next) {
  if (!this.isModified('motDePasse')) return next();
  this.motDePasse = await bcrypt.hash(this.motDePasse, 10);
  next();
});

utilisateurSchema.methods.comparePassword = function (candidatePassword) {
  return bcrypt.compare(candidatePassword, this.motDePasse);
};

module.exports = mongoose.model('Users', utilisateurSchema);
