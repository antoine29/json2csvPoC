const axios = require('axios');
 
// Make a request for a user with a given ID
// axios.get('/user?ID=12345')
//   .then(function (response) {
//     // handle success
//     console.log(response);
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   })
//   .finally(function () {
//     // always executed
//   });
 
// // Optionally the request above could also be done as
// axios.get('/user', {
//     params: {
//       ID: 12345
//     }
//   })
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   })
//   .then(function () {
//     // always executed
//   });  
 
// Want to use async/await? Add the `async` keyword to your outer function/method.
//module.exports = async function reverseGeoCode(lat, long) {
module.exports = async function reverseGeoCode(coords) {

  // let url = `http://localhost:3001/MockGeocoder/ReverseGeocode?lat=${lat}&long=${long}`;
  // try {
  //   // const response = await axios.get('http://localhost:3000/MockGeocoder/ReverseGeocode');
  //   const response = await axios.get(url);
  //   return response.data;
  // } catch (error) {
  //     return 'error';
  // }

  let directions = [];
  
  for(let index = 0; index < coords.length; index++) {
    try {
      let url = `http://localhost:3001/MockGeocoder/ReverseGeocode?lat=${coords[index].lat}&long=${coords[index].long}`;
      const response = await axios.get(url);
      directions.push(response.data.staddress);
      // return response.data;
    }
    catch (error) {
        // return 'error';
        console.log('error');
        directions.push('error');
    }
  }

  return directions;
}


// let result = reverseGeoCode();
// result.then(res => {
//   console.log(res)
// });