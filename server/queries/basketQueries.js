var Basket = require('../models/models').Basket;

module.exports = {
  addAll: function(eventID, guests, callback) {
    var baskets = [];
    for (var i = 0; i < guests.length; i++) {
      basket.push({ 
        eventID: eventID, 
        guestID: guests[i].id 
      });
    }
    Basket
      .bulkCreate(baskets)
      .then(function(newBaskets) {
        callback(newBaskets);
      })
  },

  getAll: function(eventID, callback) {
    Basket
      .findAll({
        where: {eventID: eventID}
      })
      .then(function(baskets) {
        callback(baskets);
      });
  },
}