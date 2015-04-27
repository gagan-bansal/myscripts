var reproject = require('reproject'),
  proj4 = require('proj4'),
  i = require('./input.js'),
  clone = require('clone');

for( var type in i)  {
  i[type]['output'] = reproject.reproject(
    clone(i[type].input)
    ,'EPSG:4326','EPSG:3857',proj4.defs);
}

var f = require('fs');
  stringify = require('json-stringify-safe');
f.writeFile('./output.js', 
  '// projected data generated using reproject and proj4 \n'
  + 'module.exports ='
  + stringify(i,null,2)
);

