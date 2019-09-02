const nodeGeoCoderClient = require('./node-geocoder-client');
const geoCoderXyzClient = require('./geocodexyz-client');

let long = -68.14408421516418;
let lat = -16.53061043296733;

let direction = nodeGeoCoderClient(lat, long);
direction.then(res => console.log(res)).catch(error => console.log("error"));
