require('dotenv').config(); 

module.exports = {
  "development": {
    "username": process.env.DB_USERNAME || 'postgres',
    "password": process.env.DB_PASSWORD || '123456789',
    "database": process.env.DB_DATABASE || 'e-commerce',
    "host": process.env.DB_HOST || '127.0.0.1',
    "dialect": process.env.DB_DIALECT || 'postgres',
  },
  "test": {
    "username": "postgres",
    "password": "123456789",
    "database": "e-commerce",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "production": {
    "username": process.env.DB_USERNAME,
    "password": process.env.DB_PASSWORD || '',
    "database": process.env.DB_DATABASE || 'trello-discord',
    "host": process.env.DB_HOST,
    "dialect": process.env.DB_DIALECT,
    "dialectOptions": {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    }
  }
}