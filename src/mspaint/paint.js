var paint = {
	paintContext: null,
	currentIcon: null,
	start: function(canvas) {

		this.paintContext = canvas.getContext('2d');
		
		/* Drawing on Paint App */
		this.setLineWidth(5);
		this.setLineCap('round');
		this.setLineJoin('round');
		this.setColor('black');
	},
	setLineWidth: function(lineWidth) {
		this.paintContext.lineWidth = lineWidth;
	},
	setLineCap: function(lineCap) {
		this.paintContext.lineCap = lineCap;
	},
	setLineJoin: function(lineJoin) {
		this.paintContext.lineJoin= lineJoin;
	},
	setColor: function(color) {
		this.paintContext.strokeStyle = '#' + color;
	},
	drawLine: function(x1, y1, x2, y2) {
		this.paintContext.beginPath();
		this.paintContext.moveTo(x1, y1);
		this.paintContext.lineTo(x2, y2);
		this.paintContext.stroke();
	}
}
