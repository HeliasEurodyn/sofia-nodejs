const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Rita API',
      version: '1.0.0',
      description: 'API documentation',
    },
    servers: [
      {
        url: 'http://localhost:3010',
      },
    ],
  },
  apis: ['./routes/*.js'], // ΠΟΥ θα ψάξει για annotations
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;
