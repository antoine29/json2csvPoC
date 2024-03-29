const { Parser } = require('json2csv');
 
// const fields = ['car.make', 'car.model', 'price', 'color'];
// const myCars = [
//   {
//     "car": {"make": "Audi", "model": "A3"},
//     "price": 40000,
//     "color": "blue"
//   }, {
//     "car": {"make": "BMW", "model": "F20"},
//     "price": 35000,
//     "color": "black"
//   }, {
//     "car": {"make": "Porsche", "model": "9PA AF1"},
//     "price": 60000,
//     "color": "green"
//   }
// ];


const myCars = [
  {
    "car": 'car1',
    "price": 40000,
    "color": "blue"
  }, {
    "car": 'car2',
    "price": 35000,
    "color": "black"
  }, {
    "car": 'car3',
    "price": 60000,
    "color": "green"
  }
];
// const json2csvParser = new Parser({ fields });
// const csv = json2csvParser.parse(myCars);
 
// console.log(csv);

const fields = [
  {
    label: 'Car Name',
    value: 'car'
  },
  {
    label: 'Price USD',
    value: 'price'
  }];
   
  const json2csvParser = new Parser({ fields, quote: '' });
  const csv = json2csvParser.parse(myCars);
   
  console.log(csv);