var groupBy = require('../'),
  util = require('util'),
features = [
  {
    "id": 1, "geometry": "geojson-point",
    "properties": {"color": "blue","price": 150,"address": {"city": "New York"}}
  }, {
    "id": 2, "geometry": "geojson-point",
    "properties": {"color": "green","price": 200,"address": {"city": "London"}}
  }, {
    "id": 3, "geometry": "geojson-point",
    "properties": {"color": "red","price": 210,"address": {"city": "London"}}
  }, {
    "id": 4, "geometry": "geojson-point",
    "properties": {"color": "red","price": 280,"address": {"city": "New York"}}
  }, {
    "id": 5, "geometry": "geojson-point",
    "properties": {"color": "green","price": 300,"address": {"city": "New York"}}
  }, {
    "id": 6, "geometry": "geojson-point",
    "properties": {"color": "red","price": 360,"address": {"city": "Mumbai"}}
  }, {
    "id": 7, "geometry": "geojson-point",
    "properties": {"color": "yellow","price": 400,"address": {"city": "New York"}}
  }, {
    "id": 8, "geometry": "geojson-point",
    "properties": {"color": "yellow","price": 410,"address": {"city": "Mumbai"}}
  }
];

console.log('##### group by single property');
console.log('```javascript');
console.log(util.inspect(
  groupBy(features, 'properties.color')
  ,false,null));
console.log('```');

console.log('##### group by intervals');
console.log('```javascript');
console.log(util.inspect(
  groupBy(features, {
    intervals: [100, 200, 300, 500],
    property: 'properties.price'
  })
  ,false,null));
console.log('```');

console.log('##### group by intervals and labeling intervals');
console.log('```javascript');
console.log(util.inspect(
  groupBy(features, {
    intervals: [100, 200, 300, 500],
    property: 'properties.price',
    labels: ['low', 'medium', 'high']
  })
  ,false,null));
console.log('```');

console.log('##### group by intervals and another property');
console.log('```javascript');
console.log(util.inspect(
  groupBy(
    features, 
    {
      intervals: [100, 200, 300, 500],
      property: 'properties.price',
      labels: ['low', 'medium', 'high']
    },
    'properties.address.city'
  )
  ,false,null));
console.log('```');

console.log('##### group by property that value is an array of tags');
console.log('```javascript');
var features = [
  {labels: ['new', 'premium'], id: 1},
  {labels: ['premium', 'unique'], id: 2},
  {labels: ['old', 'unique'], id: 3},
  {labels: ['accessory'], id: 4}];
console.log(util.inspect(
  groupBy(features, 'labels')
  ,false,null));
console.log('```');

var data1 = [  
  {
    "id": 9, "geometry": "geojson-point",
    "properties": {"color": "red","price": 440,"address": {"city": "Mumbai"}}
  }, {
    "id": 10, "geometry": "geojson-point",
    "properties": {"color": "yellow","price": 500,"address": {"city": "Mumbai"}}
  }, {
    "id": 11, "geometry": "geojson-point",
    "properties": {"color": "yellow","price": 83076,"address": {"city": "Mumbai"}}
  }, {
    "id": 12, "geometry": "geojson-point",
    "properties": {"color": "blue","price": 12453,"address": {"city": "London"}}
  }, {
    "id": 13, "geometry": "geojson-point",
    "properties": {"color": "red","price": 94245,"address": {"city": "New York"}}
  }, {
    "id": 14, "geometry": "geojson-point",
    "properties": {"color": "blue","price": 95282,"address": {"city": "Mumbai"}}
  }, {
    "id": 15, "geometry": "geojson-point",
    "properties": {"color": "yellow","price": 95878,"address": {"city": "New York"}}
  }, {
    "id": 16, "geometry": "geojson-point",
    "properties": {"color": "green","price": 83008,"address": {"city": "New York"}}
  }, {
    "id": 17, "geometry": "geojson-point",
    "properties": {"color": "red","price": 72128,"address": {"city": "London"}}
  }, {
    "id": 18, "geometry": "geojson-point",
    "properties": {"color": "yellow","price": 57908,"address": {"city": "Mumbai"}}
  }, {
    "id": 19, "geometry": "geojson-point",
    "properties": {"color": "yellow","price": 30312,"address": {"city": "Mumbai"}}
  }, {
    "id": 20, "geometry": "geojson-point",
    "properties": {"color": "blue","price": 44766,"address": {"city": "London"}}
  }
];
