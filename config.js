const { Sequelize } = require('sequelize');

// Set up Sequelize with your MySQL credentials
const sequelize = new Sequelize('reservation_system', 'root', 'GameT!me0106', {
  host: '127.0.0.1',
  dialect: 'mysql',
});

module.exports = sequelize;
