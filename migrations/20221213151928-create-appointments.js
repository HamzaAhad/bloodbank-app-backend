"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Appointments", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      date: { type: Sequelize.STRING },
      time: { type: Sequelize.STRING },
      donationType: { type: Sequelize.STRING },
      hospital: { type: Sequelize.STRING },
      note: { type: Sequelize.STRING },
      bloodGroup: { type: Sequelize.STRING },
      name: { type: Sequelize.STRING },
      location: { type: Sequelize.STRING },
      feedback: { type: Sequelize.STRING },
      isDonated: { type: Sequelize.BOOLEAN },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Appointments");
  },
};
