var low = require('lowdb')
var geo = require('geo-nearby')
var db = low()
debugger;
db('cities').push(  { i: 'Perth',     g: 3149853951719405 })
db('cities').push(  { i: 'Adelaide',  g: 3243323516150966 })
db('cities').push(  { i: 'Melbourne', g: 3244523307653507 })
db('cities').push(  { i: 'Canberra',  g: 3251896081369449 })
db('cities').push(  { i: 'Sydney',    g: 3252342838034651 })
db('cities').push(  { i: 'Brisbane',  g: 3270013708086451 })
db('cities').push(  { i: 'Sydney',    g: 3252342838034651 })
db._.mixin({nearBy: function(arr,lat,lon,dist) {
  return geo(arr).nearBy(lat,lon,dist);
}})

console.log(db('cities').nearBy(-33.87, 151.2, 5000));
