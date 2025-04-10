const userService = require('../services/userService');

// [Fonction pour gérer la requête GET /users. 
// Récupère tous les utilisateurs via le service et renvoie une réponse JSON.]
const getAllUsers = (req, res) => {
  const users = userService.getAllUsers();
  res.json(users);
};

// [Fonction pour gérer la requête GET /users/:id. 
// Récupère un utilisateur par ID via le service et renvoie une réponse JSON ou une erreur 404 si non trouvé.]
const getUserById = (req, res) => {
  const id = parseInt(req.params.id);
  const user = userService.getUserById(id);
  
  if (!user) {
    return res.status(404).json({ message: "Utilisateur non trouvé" });
  }
  
  res.json(user);
};

// Fonction pour gérer la requête POST /users
// Crée un nouvel utilisateur avec les données fournies et renvoie une réponse JSON
const createUser = (req, res) => {
  const userData = req.body;
  
  if (!userData.name || !userData.email) {
    return res.status(400).json({ message: "Le nom et l'email sont requis" });
  }
  
  const newUser = userService.createUser(userData);
  res.status(201).json(newUser);
};

// Fonction pour gérer la requête PUT /users/:id
// Met à jour un utilisateur existant et renvoie une réponse JSON ou une erreur 404 si non trouvé
const updateUser = (req, res) => {
  const id = parseInt(req.params.id);
  const userData = req.body;
  
  const updatedUser = userService.updateUser(id, userData);
  
  if (!updatedUser) {
    return res.status(404).json({ message: "Utilisateur non trouvé" });
  }
  
  res.json(updatedUser);
};

// Fonction pour gérer la requête DELETE /users/:id
// Supprime un utilisateur et renvoie une réponse JSON ou une erreur 404 si non trouvé
const deleteUser = (req, res) => {
  const id = parseInt(req.params.id);
  
  const deletedUser = userService.deleteUser(id);
  
  if (!deletedUser) {
    return res.status(404).json({ message: "Utilisateur non trouvé" });
  }
  
  res.json({ message: "Utilisateur supprimé avec succès", user: deletedUser });
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
};