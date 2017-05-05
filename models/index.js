var db = require('./db')

var Hotel = require('./hotel')
var Activity = require('./activity')
var Place = require('./place')
var Restaurant = require('./restaurant')

Restaurant.belongsTo(Place);
Activity.belongsTo(Place);
Hotel.belongsTo(Place);

module.exports = db

// Hotel.belongsTo(Place);
// Activity.belongsTo(Place);
// Restaurant.belongsTo(Place);
//
// // module.exports = {
// // //maybe
// // }
