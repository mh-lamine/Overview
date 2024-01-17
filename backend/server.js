const express = require('express');

const app = express();
app.use(express.json());

app.use('/appointments', require('./routes/appointmentsRoutes'));

app.listen(3000, () => console.log(`http://localhost:3000`));