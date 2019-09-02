const geJsonFileReader = require('./geoJsonFileReader');
const coordsArrayToDirectionsArray = require('./coordsArrayToDirectionsArray');

let geoJsonFileName = './geoJsonTestFile.geojson';
const input = typeof geoJsonFileName === "string" ?
  geJsonFileReader(geoJsonFileName) : geoJsonFileName;

let coords = input.features[0].geometry.coordinates; 

let dirs = coordsArrayToDirectionsArray(coords);
dirs.then(res => console.log(res));
