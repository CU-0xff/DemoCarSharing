const mysql = require("mysql");

/* BAD FUNCTION - USES HARDCODED CREDENTIALS */
var dbCon = mysql.createConnection({
    host: "localhost",
    // deepcode ignore NoHardcodedCredentials: <please specify a reason of ignoring this>
    user: "yourusername",
    // deepcode ignore NoHardcodedPasswords: <please specify a reason of ignoring this>
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
        var query = "SELECT * FROM VEHICLES WHERE LICENSE LIKE ?";
        dbCon.query(query, [license], function (err, result, fields) {
            if(err) throw err;
            return result;
        })
    })
}

module.exports = {
    getVehicleList : getVehicleList,
    getVehicleDetails : getVehicleDetails,
}
