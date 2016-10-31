window.onload = function() {
 // var client = deepstream('127.0.0.1:6020').login();
  //var paintMove = client.record.getRecord('paintMove');

  var canvas = document.querySelector('#canvas');
  var sketch = document.querySelector('#sketch');
  var sketch_style = getComputedStyle(sketch);
  canvas.width = parseInt(sketch_style.getPropertyValue('width'));
  canvas.height = parseInt(sketch_style.getPropertyValue('height'));
  paint.init(canvas);
};