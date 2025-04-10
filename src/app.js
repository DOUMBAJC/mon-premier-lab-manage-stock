const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
// Importation des routes
const routes = require('./routes/index');

// Middleware pour parser les requêtes JSON
app.use(express.json());

// Route racine par défaut
app.get('/', (req, res) => {
  res.send('<strong style="color: red;">MonPremierLab</strong> : Bienvenue et merci de votre participation à ce challenge !');
});

app.use('/api', routes);

// Lancement du serveur
app.listen(port, () => {
  console.log(`Serveur démarré sur http://localhost:${port}`);
});