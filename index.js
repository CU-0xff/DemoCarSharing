const express = require('express');
const config = require('./config/VTSconfig.js');
const vehicleDb = require('./dbInterface/vehicleDb.js');

const app = express();

app.get(config.urlPrefix+`vehicles/list`, (req, res) =>{
    return res.send(vehicleDb.getVehicleList());
})

app.get(config.urlPrefix+`vehicles/:vehicleId`, (req,res) => {
    return res.send(vehicleDb.getVehicleDetails(req.params.vehicleId),);
})

app.listen(config.PORT, () => 
    console.log(`Vehicle Telemetry Service is listening on port ${config.PORT}!`),
);