const { getAll } = require("./get-appointments.action");
const { postOne } = require("./post-appointments.action");
const { getOne } = require("./get-appointment.action");

module.exports = {
  "/": {
    get: {
      action: getAll,
      level: "public",
    },
    post: {
      action: postOne,
      level: "public",
    },
  },

  "/:id": {
    get: {
      action: getOne,
      level: "public",
    },
  },
};
