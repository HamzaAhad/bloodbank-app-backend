const db = require("../../models/index");
const AppointmentModel = db.Appointments;

module.exports.getOne = async (request, response) => {
  try {
    const data = await AppointmentModel.findOne({
      where: { id: request.params.id },
    });
    response.header("Access-Control-Allow-Origin", "*");
    response.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    response.header(
      "Access-Control-Allow-Headers",
      "Content-Type, Authorization"
    );
    response.status(200).json(data);
  } catch {
    response.status(500).json("Some Error Occured");
  }
};
