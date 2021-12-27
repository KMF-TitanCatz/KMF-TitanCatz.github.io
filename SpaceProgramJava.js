
/*********************
Declare the Class
 *********************/

class InputData {

    constructor(
        TimeElapsed,
        Latitude,
        Longitude,
        GPSAltitude,
        BMPSensorAltitude,
        BMPSensorePressure,
        BMPSensorTemperature,
        DigitalSensorTemperature,
        CSSSensorTemperature,
        CSSSensoreCO2,
        CSSSensorTVOC,
        UV,
        AccelX,
        AccelY,
        AccelZ,
        MagneticX,
        MagneticY,
        MagneticZ,
        GyroX,
        GyroY,
        GyroZ,
    ) {
        this.TimeElapsed = TimeElapsed;
        this.Latitude = Latitude;
        this.Longitude = Longitude;
        this.GPSAltitude = GPSAltitude;
        this.BMPSensorAltitude = BMPSensorAltitude;
        this.BMPSensorePressure = BMPSensorePressure;
        this.BMPSensorTemperature = BMPSensorTemperature;
        this.DigitalSensorTemperature = DigitalSensorTemperature;
        this.CSSSensorTemperature = CSSSensorTemperature;
        this.CSSSensoreCO2 = CSSSensoreCO2;
        this.CSSSensorTVOC = CSSSensorTVOC;
        this.UV = UV;
        this.AccelX = AccelX;
        this.AccelY = AccelY;
        this.AccelZ = AccelZ;
        this.MagneticX = MagneticX;
        this.MagneticY = MagneticY;
        this.MagneticZ = MagneticZ;
        this.GyroX = GyroX;
        this.GyroY = GyroY;
        this.GyroZ = GyroZ;
    }
}

/*********************
 Functions
 *********************/

 //Get Data
 function GetData() {
     var LoadedData = loadData();
     return LoadedData;
 }
/**
* @param {*} legend
* @param {*} value
* @param {*} units
*/
 //Format the Data
 function DataRow(legend, value, units) {
     msg = "<td>";
     msg += legend;
     msg += ": </td><td>";
     msg += value;
     msg += " " + units;
     msg += "</td>";
     return msg;
 }


 //Back Function

 function Back() {
    location.replace("index.html");
 }