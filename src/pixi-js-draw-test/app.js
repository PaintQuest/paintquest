window.onload = function() {
  let ds = deepstream('127.0.0.1:6020')
  let client = ds.login( {}, function(success, errorEvent, errorMsg) {
      if(success) {
          console.log('Application Started');
      }
      else {
          console.log('Login failed: ' + errorMsg);
      }
  });

  ds.on( 'error', function( msg, event, topic ){
      console.log(msg);
  });

  let canvasActions = client.record.getRecord('canvas-actions');

  let canvasArea = document.querySelector('#canvas-area');
  let sketch = document.querySelector('#sketch');
  let sketch_style = getComputedStyle(sketch);
  canvasArea.width = parseInt(sketch_style.getPropertyValue('width'));
  canvasArea.height = parseInt(sketch_style.getPropertyValue('height'));
  
  let canvas = new Canvas(canvasArea);
  
  let count = 0;
  canvas.setCallbackOnDraw(function(paintmove) {
    let paintmoves = canvasActions.get('paintmoves') || [];
    paintmoves.push(paintmove);
    canvasActions.set('paintmoves', paintmoves);
  });

  canvasActions.subscribe('paintmoves', function(paintmoves) {
    let lastPaintmove = paintmoves[paintmoves.length - 1];
    canvas.handlePaintMove(lastPaintmove);
  });

  //Init canvas
  canvasActions.whenReady(() => {
      let paintmoves = canvasActions.get('paintmoves') || [];
      paintmoves.forEach(function(paintmove) {
        canvas.handlePaintMove(paintmove);
      });
  });
};