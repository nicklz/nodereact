module.exports = (sequelize, Sequelize) => {
  const Location = sequelize.define("location", {
    name: {
      type: Sequelize.STRING
    },
    startDate: {
      type: Sequelize.INTEGER
    },
    endDate: {
      type: Sequelize.INTEGER
    }
  });

  return Location;
};
