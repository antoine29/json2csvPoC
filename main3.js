const reverseGeoCode = require('./reverseGeoCode');

// let result = reverseGeoCode(12.85, -12.85);
// result.then(res => {
//   console.log(res)
// });



let coords = [
    {lat: 1.1, long:-1.2},
    {lat: 2.1, long:-2.2},
    {lat: 3.1, long:-3.2},
    {lat: 4.1, long:-4.2},
    {lat: 5.1, long:-5.2},
    {lat: 6.1, long:-6.2},
];

let result = reverseGeoCode(coords);
result.then(res => {
  console.log(res)
});
