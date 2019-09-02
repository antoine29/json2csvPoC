const axios = require('axios');
 
module.exports = async function reverseGeoCode(coords) {

  let directions = [];
  let totalSize = coords.length;
  
  let coord, lat, long;
  // for(let index = 0; index < coords.length; index++) {
  for(let index = 0; index < 10; index++) {
    try {

      coord = coords[index];
      lat = coord[0];
      long = coord[1];

      //let url = `http://localhost:3001/MockGeocoder/ReverseGeocode?lat=${coords[index][0].lat}&long=${coords[index][1].long}`;
      let url = `http://localhost:3001/MockGeocoder/ReverseGeocode?lat=${lat}&long=${long}`;
      const response = await axios.get(url);
      directions.push(response.data.staddress);
    }
    catch (error) {
        console.log('error');
        directions.push('error');
    }
    finally {
      console.log(`${index+1}/${totalSize} coords processed `);
    }
  }

  return directions;
}
