// controllers/bookController.js
const Book = require('../models/Books');

// Créer un livre
exports.createBook = async (req, res) => {
  try {
    const book = new Book(req.body);
    await book.save();
    res.status(201).json(book);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Liste de tous les livres
exports.getAllBooks = async (req, res) => {
  try {
    const books = await Book.find().populate('mainAuthor secondaryAuthors category');
    res.json(books);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Détails d'un livre par ID
exports.getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id).populate('mainAuthor secondaryAuthors category');
    if (!book) return res.status(404).json({ error: 'Livre non trouvé' });
    res.json(book);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Mettre à jour un livre
exports.updateBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(book);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Supprimer un livre
exports.deleteBook = async (req, res) => {
  try {
    await Book.findByIdAndDelete(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Emprunter un livre
exports.borrowBook = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book || !book.available) return res.status(400).json({ error: 'Livre non disponible' });
    book.available = false;
    await book.save();
    res.json({ message: 'Livre emprunté avec succès' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Rendre un livre
exports.returnBook = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book || book.available) return res.status(400).json({ error: 'Ce livre est déjà rendu' });
    book.available = true;
    await book.save();
    res.json({ message: 'Livre rendu avec succès' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
