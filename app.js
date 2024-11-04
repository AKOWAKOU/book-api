const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
//const swaggerJsDoc = require('swagger-jsdoc');
//const swaggerUi = require('swagger-ui-express');
const PORT = process.env.PORT || 3000;
const setupSwaggerDocs = require('./config/swagger');
const bookRoutes = require('./routes/books.js');
const authorRoutes = require('./routes/authors.js');
const categoryRoutes = require('./routes/categories');
const userRoutes = require('./routes/users');

// Middleware pour parser les requêtes JSON
app.use(express.json());
app.use(bodyParser.json());
// Configuration CORS
const corsOption = {
  origin: "*",//['http://localhost:3000/api'],'*'
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
};
app.use(cors(corsOption));

// Connexion à MongoDB (vérifiez bien le port)
mongoose.connect('mongodb://localhost:27018/biblio', )
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log('Error connecting to MongoDB:', err));

// Utilisation des routes
app.use('/api/books', bookRoutes);
app.use('/api/authors', authorRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/users', userRoutes);

setupSwaggerDocs(app);
// Démarrage du serveur
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
