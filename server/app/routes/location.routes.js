module.exports = app => {
  const locations = require("../controllers/location.controller.js");

  var router = require("express").Router();

  // Create a new Location
  router.get("/create", locations.create);

  // Retrieve all published Locations
  router.get("/list", locations.findAllByRange);


  app.use('/api/locations', router);
};
