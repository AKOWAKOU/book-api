// swagger.js
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const path = require('path');
const fs = require('fs');
const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Library Management API',
    version: '1.0.0',
    description: 'API documentation for Library Management System',
  },
  servers: [
    {
      url: 'http://localhost:3000/',
    },
  ],
};

const options = {
  swaggerDefinition,
  apis:[
    path.join(__dirname, 'authorSwagger.js'),
    path.join(__dirname, 'bookSwagger.js'),
    path.join(__dirname, 'categorySwagger.js'),
    path.join(__dirname, 'userSwagger.js'),

  ]
};

const swaggerSpec = swaggerJSDoc(options);
fs.writeFileSync('documentation/swagger-output.json', JSON.stringify(swaggerSpec, null, 2));
const setupSwaggerDocs = (app) => {
  app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};

module.exports = setupSwaggerDocs;
