const db = require("../../models/index");
const AppointmentModel = db.Appointments;

module.exports.postOne = async (request, response) => {
  try {
    const data = await AppointmentModel.create(request.body);
    response.header("Access-Control-Allow-Origin", "*");
    response.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    response.header(
      "Access-Control-Allow-Headers",
      "Content-Type, Authorization"
    );
    response.status(200).json(data);
  } catch {
    response.status(422).json("Some Error Occured");
  }
};
