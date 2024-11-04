const User = require('../models/Users');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.registerUser = async (req, res) => {
  try {
    const { nom, email, motDePasse } = req.body;

    if (!nom || !email || !motDePasse) {
      return res.status(400).json({ error: 'Tous les champs sont requis' });
    }
    
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'Cet utilisateur existe déjà' });
    }

    const user = new User({ nom, email, motDePasse });
    await user.save();

    res.status(201).json({ message: 'Utilisateur créé avec succès' });
    //console.log(res);
  } catch (error) {
    console.error(`Erreur lors de la création de l'utilisateur: ${error.message}`);
    res.status(500).json({ error: "Erreur du serveur" });
  }
};

// Connexion d'un utilisateur
exports.loginUser = async (req, res) => {
  try {
    const { email, motDePasse } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ error: 'Utilisateur non trouvé' });

    const isMatch = await bcrypt.compare(motDePasse, user.motDePasse);
    if (!isMatch) return res.status(400).json({ error: 'Mot de passe incorrect' });

    const token = jwt.sign({ userId: user._id }, 'SECRET_KEY', { expiresIn: '1h' });
    res.json({ message: 'Connexion réussie', token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtenir tous les utilisateurs
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select('-motDePasse');
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtenir un utilisateur par ID
exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select('-motDePasse');
    if (!user) return res.status(404).json({ error: 'Utilisateur non trouvé' });
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Mettre à jour un utilisateur
exports.updateUser = async (req, res) => {
  try {
    const { nom, motDePasse ,email} = req.body;
    const updates = { nom,email };
    if (motDePasse) {
      updates.motDePasse = await bcrypt.hash(motDePasse, 10);
    }
    const user = await User.findByIdAndUpdate(req.params.id, updates, { new: true }).select('-motDePasse');
    res.json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Supprimer un utilisateur
exports.deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
     res.status(201).json({ message: 'Utilisateur delete avec succès' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
