function getVehicleList() {
    return [{LICENCE:'KQZ-123'},{LICENCE:'RQZ-223'},{LICENCE:'DQZ-465'},{LICENCE:'UQZ-354'}];
}

function getVehicleDetails(licence) {
    return { LICENCE: licence, MILEAGE: 12345, MILEAGEUNIT: 'KM', TYPE: 'KIA PERFORMA 1.3 HYBRID', PRODUCTIONYEAR: 2015}
}

function setNewVehicle(newVehicle) {
    return `SUCCESS $newVehicle.LICENSE`;
}

function setVehicleDetail(licence, changes) {
    return `SUCCESS $licence`;
}

module.exports = {
    getVehicleList : getVehicleList,
    getVehicleDetails : getVehicleDetails,
    setNewVehicle : setNewVehicle,
    setVehicleDetail : setVehicleDetail,
}
