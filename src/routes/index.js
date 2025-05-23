const express = require('express');
const router = express.Router();
const userController = require('../../controllers/userController');

// Route de test initiale
router.get('/test', (req, res) => {
  res.json({ message: 'Route de test fonctionnelle !' });
});

// Routes pour les utilisateurs
router.get('/users', userController.getAllUsers);
router.get('/users/:id', userController.getUserById);
router.post('/users', userController.createUser);
router.put('/users/:id', userController.updateUser);
router.delete('/users/:id', userController.deleteUser);

module.exports = router;