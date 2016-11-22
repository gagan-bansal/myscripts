var dream = require('dreamjs')
var hash = require('ngeohash')
var jsonfile = require('jsonfile')
dream.customType('incrementalId', function(helper){
      return helper.previousItem ? helper.previousItem.id+1 : 1;
})
var data = dream
.schema({
  id: 'incrementalId',
  city: 'city',
  lat: 'latitude',
  lon: 'longitude'
})
.generateRnd(10000)
.output()

data.forEach(function(city) {
  city.geohash = hash.encode_int(city.lat, city.lon);
})
jsonfile.writeFileSync('random-locations.json', {cities: data}, {spaces: 2});

