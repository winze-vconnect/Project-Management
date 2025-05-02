const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;
const deviceLocationRoutes = require('./routes/deviceLocations');


require('dotenv').config();
app.use(cors());
app.use(express.json());

app.use('/api/facilities', require('./routes/facilities'));
app.use('/api/devices', require('./routes/devices'));
app.use('/api/users', require('./routes/users'));
app.use('/api/device-locations', deviceLocationRoutes);
app.use('/api/excel-upload', require('./routes/ExcelUpload'));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
