// const { Parser } = require('json2csv');
 
// // const fields = ['car.make', 'car.model', 'price', 'color'];
// // const myCars = [
// //   {
// //     "car": {"make": "Audi", "model": "A3"},
// //     "price": 40000,
// //     "color": "blue"
// //   }, {
// //     "car": {"make": "BMW", "model": "F20"},
// //     "price": 35000,
// //     "color": "black"
// //   }, {
// //     "car": {"make": "Porsche", "model": "9PA AF1"},
// //     "price": 60000,
// //     "color": "green"
// //   }
// // ];


// const myCars = [
//   {
//     "car": 'car1',
//     "price": 40000,
//     "color": "blue"
//   }, {
//     "car": 'car2',
//     "price": 35000,
//     "color": "black"
//   }, {
//     "car": 'car3',
//     "price": 60000,
//     "color": "green"
//   }
// ];
// // const json2csvParser = new Parser({ fields });
// // const csv = json2csvParser.parse(myCars);
 
// // console.log(csv);

// const fields = [
//   {
//     label: 'Car Name',
//     value: 'car'
//   },
//   {
//     label: 'Price USD',
//     value: 'price'
//   }];
   
//   const json2csvParser = new Parser({ fields, quote: '' });
//   const csv = json2csvParser.parse(myCars);
   
//   console.log(csv);


var request = require('request');
request('https://geocode.xyz/-16.533834875904414,-68.13811361789703?json=1&auth=347869298996045324943x3350', function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
});