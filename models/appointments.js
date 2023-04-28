"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Appointments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Appointments.init(
    {
      date: DataTypes.STRING,
      time: DataTypes.STRING,
      donationType: DataTypes.STRING,
      hospital: DataTypes.STRING,
      note: DataTypes.STRING,
      bloodGroup: DataTypes.STRING,
      name: DataTypes.STRING,
      feedback: DataTypes.STRING,
      location: DataTypes.STRING,
      isDonated: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "Appointments",
    }
  );
  return Appointments;
};
