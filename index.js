const express = require('express');
const config = require('./config/VTSconfig.js');
//const vehicleDb = require('./dbInterface/vehicleDB_test.js');
const vehicleDb = require('./dbInterface/vehicleDb.js');

const app = express();


app.listen(config.PORT, () => 
    console.log(`Vehicle Telemetry Service is listening on port ${config.PORT}!`),
);

app.get(config.urlPrefix+`vehicles/list`, (req, res) =>{
    let vehicleList = vehicleDb.getVehicleList();
    return res.send(vehicleList);
})

app.get(config.urlPrefix+`vehicles/:vehicleId`, (req,res) => {
    let vehicleDetail = vehicleDb.getVehicleDetails(req.params.vehicleId);
    return res.send(vehicleDetail);
})

app.put(config.urlPrefix+'vehicles/:vehicleId', (req, res) => {
    reqAction = req.params.reqAction;
    returnValue = "";
    switch(toUpper(reqAction)) {
        case "RESERVE":
        case "BOOK":
            returnValue = vehicelDb.reserveVehicle(req.params.vehicleId);
            break;
        default:
            returnValue = "ERROR: Unknown verb";
            break;
    }

    return returnValue;

})
