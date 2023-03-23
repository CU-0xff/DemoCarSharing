const mysql = require("mysql");

/* BAD FUNCTION - USES HARDCODED CREDENTIALS */
var dbCon = mysql.createConnection({
    host: "localhost",
    user: "yourusername",
    password: "yourpassword"
  });

function getVehicleList() {
    return dbCon.connect(function(err) {
        if(err) throw err;
        dbCon.query("SELECT LICENSE FROM VEHICLES", function (err, result, fields) {
            if(err) throw err;
            return result;
        })
    })
}

function getVehicleDetails(license) {
    return dbCon.connect(function(err) {
        if(err) throw err;
        var query = "SELECT * FROM VEHICLES WHERE LICENSE LIKE ";
        dbCon.query(query,[license], function (err, result, fields) {
            if(err) throw err;
            return result;
        })
    })
}

function reserveVehicle(license) {
    //Do something meaningful
    return `SUCCESS $licence`;
}
module.exports = {
    getVehicleList : getVehicleList,
    getVehicleDetails : getVehicleDetails,
}
