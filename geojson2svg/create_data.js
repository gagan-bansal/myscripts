var extent = {'left':-180,'bottom':-90,'right':180,'top':90};
var size = {width: 200, height: 100};
//console.log(process.argv[2] + 5);
var xres = (extent.right - extent.left)/size.width;
var yres = (extent.top - extent.bottom)/size.height;
var res = Math.max(xres,yres);
process.stdout.write('res: '+ res +'\n');
process.stdin.resume();
process.stdin.setEncoding('utf8');

 
process.stdin.on('data', function (chunk) {
  var points = JSON.parse(chunk);
  var svgPoints = points.map(function(p) {
     return [(p[0] - extent.left)/res + ',' + (extent.top - p[1])/res ];
  });
  process.stdout.write(svgPoints.join(' ') + '\n');
});
