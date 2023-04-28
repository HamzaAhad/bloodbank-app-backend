"use strict";
const data = require("../data/appointmentData");
const now = data.appointmentData;

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Appointments", now, {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Appointments", null, {});
  },
};
