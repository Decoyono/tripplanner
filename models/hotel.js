var db = require('./db')
const Sequelize = require('sequelize')
var Hotel = db.define('hotel', {
  name: {
    type: Sequelize.STRING
  },
  num_stars: {
    type: Sequelize.FLOAT
  },
  amenities: {
    // type: Sequelize.ARRAY(Sequelize.TEXT)
    type: Sequelize.STRING
  }

});


module.exports = Hotel
