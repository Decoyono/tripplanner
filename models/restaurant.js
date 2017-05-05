var db = require('./db')
const Sequelize = require('sequelize')


var Restaurant = db.define('restaurant', {
  name: {
    type: Sequelize.STRING
  },
  cuisine: {
    type: Sequelize.STRING
  },
  price: {
    type: Sequelize.INTEGER
  }

});



module.exports = Restaurant;
