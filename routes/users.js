// routes/users.js
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const userController = require('../controllers/userController');

// Routes pour les utilisateurs
router.post('/register', userController.registerUser);
router.post('/login', userController.loginUser);
router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUserById);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;
