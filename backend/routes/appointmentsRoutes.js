const express = require("express");
const router = express.Router();
const {
  getAppointments,
  setAppointment,
  updateAppointment,
  deleteAppointment,
} = require("../controllers/appointmentsController");

router.route("/").get(getAppointments).post(setAppointment);

router.route("/:id").patch(updateAppointment).delete(deleteAppointment);

module.exports = router;
