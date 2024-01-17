const getAppointments = (req, res) => {
  res.status(200).send("get appointments");
  console.log(req.body);
};

const setAppointment = (req, res) => {
  res.status(200).send("set appointment");
};

const updateAppointment = (req, res) => {
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
