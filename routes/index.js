const express = require('express')
const router = express.Router();
const Promise = require('bluebird')
const db = require('../models')
var Hotel = require('../models/hotel')
var Activity = require('../models/activity')
var Place = require('../models/place')
var Restaurant = require('../models/restaurant')

router.get('/', function (req, res, next){
  console.log('hi')
  Hotel.findAll()
  .then(function(hotels){
    console.log('found hotels')
    var allHotels = hotels;
    return Restaurant.findAll()
    .then(function(restaurants){
      var allRestaurants = restaurants;
      return Activity.findAll()
      .then(function(activities){
        var allActivities = activities;
        var uglyObject = {}
        uglyObject.hotels = allHotels;
        uglyObject.restaurants = allRestaurants;
        uglyObject.activities = allActivities;
        res.json(uglyObject)
      })
    })
  })
  .catch(next)
})




module.exports = router;



// var allHotels = Hotel.findAll();
// var allPlaces = Place.findAll();
// var allRestaurants = Restaurant.findAll();
// db.
