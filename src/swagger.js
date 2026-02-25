const swaggerJsdoc = require('swagger-jsdoc');
const path = require('path');

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
        url: 'http://ng-soc-rita-server.eurodyn.com:3010',
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    }
  },
  apis: [
    path.join(__dirname, 'routes/**/*.js')
   ]
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;
