"use strict";
var paint = {
        graphics: new PIXI.Graphics(),
        marker:new PIXI.Graphics(),
        stage:new PIXI.Container(),
        prevX:null,
        prevY:null,
        renderer:null,
        
        init: function (canvas) {
            this.renderer = PIXI.autoDetectRenderer(
                canvas.width, 
                canvas.height,
                {view:canvas}
            );

            this.graphics.beginFill('transparent');
            this.graphics.drawRect(0, 0, canvas.width, canvas.height);
            this.graphics.endFill();
            this.graphics.interactive = true;

            this.stage.addChild(this.graphics);
            this.stage.addChild(this.marker);
            render();

            this.marker.lineStyle(2, 0xffd900, 1);
            this.graphics.on('mousedown', handleDown);
        },


  };


    var handleDown = function (event) {
        paint.prevX = event.data.global.x;
        paint.prevY = event.data.global.y;

        paint.graphics.on('mousemove', handleMove);
        paint.graphics.on('mouseup', handleUp);
    };

    var handleMove = function (event) {
        drawLine(paint.prevX, paint.prevY, event.data.global.x, event.data.global.y);
        paint.prevX = event.data.global.x;
        paint.prevY = event.data.global.y;
    };

    var handleUp =  function (event) {
        paint.graphics.off('mousemove', handleMove);
        paint.graphics.off('mouseup', handleUp);
    };

    var drawLine = function (fromX, fromY, toX, toY) {
        paint.marker.moveTo(fromX, fromY);
        paint.marker.lineTo(toX, toY);
        render();
    };
    
    var render = function () {
        paint.renderer.render(paint.stage);
    }