window.onload = function() {

  var client = deepstream('127.0.0.1:6020').login();
  var paintMove = client.record.getRecord('paintMove');

  var canvas = document.querySelector('#paint');
  var sketch = document.querySelector('#sketch');
  var sketch_style = getComputedStyle(sketch);
  canvas.width = parseInt(sketch_style.getPropertyValue('width'));
  canvas.height = parseInt(sketch_style.getPropertyValue('height'));

  let xStart, yStart, xCurrent, yCurrent;

/* Mouse Capturing Work */
  canvas.addEventListener('mousemove', function(e) {
    xCurrent = e.pageX - this.offsetLeft;
    yCurrent = e.pageY - this.offsetTop;
  }, false);

  canvas.addEventListener('mousedown', function(e) {
    xStart = xCurrent;
    yStart = yCurrent;

    onPaint();

    canvas.addEventListener('mousemove', onPaint, false);

  }, false);

  canvas.addEventListener('mouseup', function() {
    canvas.removeEventListener('mousemove', onPaint, false);
  }, false);

  var distance = function(xStart, yStart, xCurrent, yCurrent) {
    return Math.sqrt(Math.pow(xStart - xCurrent, 2) + Math.pow(yStart - yCurrent, 2));  // Pythagoras
  }

  var onPaint = function() {

    if (distance(xStart, yStart, xCurrent, yCurrent) < 5) {
      return;
    }

    var coordinates = paintMove.get('coordinates');
    
    if (!coordinates) {
      coordinates = [];
    }
    
    coordinates.push([xStart, yStart, xCurrent, yCurrent]);

    paintMove.set('coordinates', coordinates);
    paint.drawLine(xStart, yStart, xCurrent, yCurrent);
    xStart = xCurrent;
    yStart = yCurrent;
  };

	paint.start(canvas);

  paintMove.subscribe('coordinates', function(coordinates) {
    console.log(coordinates);
    var lastCoordinate = coordinates[coordinates.length - 1];
    paint.drawLine(lastCoordinate[0], lastCoordinate[1], lastCoordinate[2], lastCoordinate[3]);
  });

  //paint.drawLine(10, 10, 50, 50);
};
