const Shape = require('./shapes.js');
const { render } = require('./render.js');

class Square extends Shape {
    constructor(text, textColor, shapeColor){
        super(text, textColor, shapeColor);
    };
    renderSquare() {
        const svg = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect x="50" y="50" width="200" height="200" fill="${this.shapeColor}" />
        <text x="150" y="140" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>`
        return render(svg);
    }
    toString() {
        return this.renderSquare();
      }
}

module.exports = Square;