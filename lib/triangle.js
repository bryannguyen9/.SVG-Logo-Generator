const Shape = require('./shapes.js');

class Triangle extends Shape {
    constructor(text, textColor, shapeColor){
        super(text, textColor, shapeColor);
    };
    renderTriangle() {
        return render(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
          <polygon cx="150" cy="100" r="80" fill="${this.shapeColor}" />
          <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>`);
    }
}

module.exports = Triangle;