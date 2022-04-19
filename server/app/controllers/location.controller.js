const db = require("../models");
const Location = db.locations;
const Op = db.Sequelize.Op;

// Create and Save a new Location
exports.create = (req, res) => {
  const baseDate = 1641827450;

  let nameRandom = Math.floor(Math.random() * 100) + 1;
  let dateRandom = Math.floor(Math.random() * 10000000) + 1;

  // Create a Location
  const location = {
    name: `Location - ${titleRandom}`,
    startDate: baseDate + dateRandom,
    endDate: baseDate + (5 * dateRandom),
  };

  // Save Location in the database
  Location.create(location)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Location."
      });
    });
};

// Retrieve all Locations from the database.
exports.findAllByRange = (req, res) => {
  const startDate = req.query.startDate;
  const endDate = req.query.endDate;

  let condition = [
    startDate ? { startDate: { [Op.gte]: startDate } } : null,
    endDate ? { endDate: { [Op.lte]: endDate } } : null
  ];

  Location.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving locations."
      });
    });
};
