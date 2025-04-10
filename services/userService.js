// [Créez un tableau initial nommé 'users' contenant quelques objets représentant des utilisateurs. Chaque objet doit avoir au moins un 'id', un 'name' et un 'email'. Ajoutez d'autres propriétés si vous le souhaitez.]
let users = [
    // [Exemple : { id: 1, name: "Alice", email: "alice@example.com" }]
    {id: 1, name: "Calvain", email: "calvinopro007@gmail.com", profil: null, password: 'Pa$$w0rd!', createdAt: new Date(), updatedAt: new Date()},
    {id: 2, name: "Hassan", email: "hassan@example.com", profil: null, password: 'Pa$$w0rd!', createdAt: new Date(), updatedAt: new Date()},
    {id: 3, name: "Felix", email: "felix@example.com", profil: null, password: 'Pa$$w0rd!', createdAt: new Date(), updatedAt: new Date()},
  ];
  
  // [Fonction pour récupérer tous les utilisateurs. Retourne le tableau 'users'.]
  const getAllUsers = () => {
    return users;
  };
  
  // [Fonction pour récupérer un utilisateur par son ID. Retourne l'utilisateur ou null s'il n'existe pas.]
  const getUserById = (id) => {
    return users.find(user => user.id === id) || null;
  };
  
  // [Fonction pour ajouter un nouvel utilisateur. 
  // Crée un objet avec les données fournies et l'ajoute au tableau. 
  // Retourne le nouvel utilisateur.]
  const createUser = (userData) => {
    const newId = users.length > 0 ? Math.max(...users.map(user => user.id)) + 1 : 1;
    const createdAt = new Date();
    const newUser = { id: newId, ...userData, createdAt: createdAt, updatedAt: createdAt };
    users.push(newUser);
    return newUser;
  };
  
  // [Fonction pour mettre à jour un utilisateur existant par son ID. 
  // Met à jour les champs fournis et retourne l'utilisateur modifié ou null s'il n'existe pas.]
  const updateUser = (id, userData) => {
    const index = users.findIndex(user => user.id === id);
    if (index === -1) return null;
    const updatedAt = new Date();
    users[index] = { ...users[index], ...userData, updatedAt: updatedAt };
    return users[index];
  };
  
  // [Fonction pour supprimer un utilisateur par son ID. 
  // Retire l'utilisateur du tableau et retourne l'utilisateur supprimé ou null s'il n'existe pas.]
  const deleteUser = (id) => {
    const index = users.findIndex(user => user.id === id);
    if (index === -1) return null;
    
    const deletedUser = users[index];
    users.splice(index, 1);
    return deletedUser;
  };
  
  module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
  };
  
  /**
   * Note : Pour cet atelier, il n'est pas nécessaire d'utiliser une base de données.
   * Le tableau 'users' agit comme une source de données en mémoire pour simplifier l'apprentissage.
   */