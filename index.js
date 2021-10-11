const express = require('express');
const config = require('./config/VTSconfig.js');
const vehicleDb = require('./dbInterface/vehicleDB_test.js');
//const vehicleDb = require('./dbInterface/vehicleDb.js');

const app = express();


app.listen(config.PORT, () => 
    console.log(`Vehicle Telemetry Service is listening on port ${config.PORT}!`),
);