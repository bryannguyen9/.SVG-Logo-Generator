const Shape = require('./shapes.js');
const { render } = require('./render.js');

class Triangle extends Shape {
    constructor(text, textColor, shapeColor){
        super(text, textColor, shapeColor);
    };
    renderTriangle() {
        const svg = `
            <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <polygon points="150,20 260,180 40,180" fill="${this.shapeColor}" />
            <text x="150" y="135" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
            </svg>`;
        return render(svg);
    }
    toString() {
        return this.renderTriangle();
      }
}

module.exports = Triangle;