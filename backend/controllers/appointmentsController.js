const Appointments = require("../models/appointmentModel");

const getAppointments = async (req, res) => {
  const appointments = await Appointments.find();
  res.status(200).json(appointments);
};

const setAppointment = async (req, res) => {
  if (!req.body.name || !req.body.description) {
    res.status(400).send("Missing name or description");
    return;
  }
  const appointment = await Appointments.create({
    name: req.body.name,
    description: req.body.description,
  });
  res.status(201).json(appointment);
};

const updateAppointment = async (req, res) => {
  const appointment = await Appointments.findById(req.params.id);
  if (!appointment) {
    res.status(404).send("Appointment not found");
    return;
  }
  const updatedAppointment = await Appointments.findByIdAndUpdate(
    req.params.id, req.body, { new: true }
  );
  res.status(200).send(`update appointment ${req.params.id}`);
};

const deleteAppointment = (req, res) => {
  res.status(200).send(`delete appointment ${req.params.id}`);
};

module.exports = {
  getAppointments,
  setAppointment,
  updateAppointment,
  deleteAppointment,
};
