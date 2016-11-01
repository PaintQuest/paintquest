class Canvas {
    constructor(viewObject) {
        this.renderer = PIXI.autoDetectRenderer(
            viewObject.width, 
            viewObject.height,
            {view:viewObject}
        );

        this.graphics = new PIXI.Graphics();
        this.marker = new PIXI.Graphics();
        this.stage = new PIXI.Container();

        this.graphics.beginFill('transparent');
        this.graphics.drawRect(0, 0, viewObject.width, viewObject.height);
        this.graphics.endFill();
        this.graphics.interactive = true;

        this.stage.addChild(this.graphics);
        this.stage.addChild(this.marker);
        this.render();

        this.marker.lineStyle(2, 0xffd900, 1);
        var _this = this;
        this.graphics.on('mousedown', function(event) {_this.handleDown(event, _this)});
    }

    setCallbackOnDraw(callbackOnDraw) {
        this.callbackOnDraw = callbackOnDraw;
    }

    handleDown(event, _this) {
        _this.prevX = event.data.global.x;
        _this.prevY = event.data.global.y;

        _this.graphics.on('mousemove', function(event) {_this.handleMove(event, _this)});
        _this.graphics.on('mouseup', function(event)  {_this.handleUp(event, _this)});
    };

    handleMove(event, _this) {
        if(Canvas.distance(_this.prevX, _this.prevY, event.data.global.x, event.data.global.y) < 5) {
            return;
        }
        
        _this.drawLine(_this.prevX, _this.prevY, event.data.global.x, event.data.global.y);
        _this.prevX = event.data.global.x;
        _this.prevY = event.data.global.y;
    };

    handleUp(event, _this) {
        _this.graphics.off('mousemove');
        _this.graphics.off('mouseup');
    };

    drawLine(fromX, fromY, toX, toY) {
        this.handlePaintMove([fromX, fromY, toX, toY]);
        if(this.callbackOnDraw) {
            this.callbackOnDraw([fromX, fromY, toX, toY]);
        }
    };

    handlePaintMove(paintmove) {
        this.marker.moveTo(paintmove[0], paintmove[1]);
        this.marker.lineTo(paintmove[2], paintmove[3]);
        this.render();
    };

    render() {
        this.renderer.render(this.stage);
    }

    //Pythagoras
    static distance(x1, y1, x2, y2) {
        return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));  
    }
};