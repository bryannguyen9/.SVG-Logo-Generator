const Triangle = require('./triangle.js');

describe('Triangle Check', () => {
    const text = 'svg';
    const textColor = 'blue';
    const triangleColor = 'green';

    describe('Text Test', () => {
        it(`Checks to see if text is equal to "${text}"`, () => {
            const triangleObj = new Triangle(text);
            expect(triangleObj.text).toEqual(text);
        });
    });

    describe('Text Color Test', () => {
        it(`Checks to see if color is equal to "${textColor}"`, () => {
            const triangleObj = new Triangle(text, textColor);
            expect(triangleObj.textColor).toEqual(textColor);
        });
    });

    describe('Triangle Color Test', () => {
        it(`Checks to see if triangle color is equal to "${triangleColor}"`, () => {
            const triangleObj = new Triangle(text, textColor, triangleColor);
            expect(triangleObj.triangleColor).toEqual(triangleColor);
        });
    });

    describe('triangle Render Test', () => {
        it(`Checks if the triangle svg has rendered with text "${text}", text color "${textColor}", and triangle color "${triangleColor}"`, () => {
            const renderedTriangle = new Triangle(text, textColor, triangleColor);
            expect(renderedTriangle.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <polygon cx="150" cy="100" r="80" fill="${triangleColor}" />
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
          </svg>`);
        });
    });
});