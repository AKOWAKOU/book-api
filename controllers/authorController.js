// controllers/authorController.js
const Author = require('../models/Author');

// Créer un auteur
exports.createAuthor = async (req, res) => {
  try {
    const author = new Author(req.body);
    await author.save();
    res.status(201).json(author);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Obtenir tous les auteurs
exports.getAllAuthors = async (req, res) => {
  try {
    const authors = await Author.find();
    res.json(authors);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtenir un auteur par ID
exports.getAuthorById = async (req, res) => {
  try {
    const author = await Author.findById(req.params.id);
    if (!author) return res.status(404).json({ error: 'Auteur non trouvé' });
    res.json(author);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Mettre à jour un auteur
exports.updateAuthor = async (req, res) => {
  try {
    const author = await Author.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(author);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Supprimer un auteur
exports.deleteAuthor = async (req, res) => {
  try {
    await Author.findByIdAndDelete(req.params.id);
    res.status(204).send({ message: 'Auteur delete avec succès' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
