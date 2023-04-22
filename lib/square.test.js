const Square = require('./square.js');

describe('Square Check', () => {
    const text = 'svg';
    const textColor = 'blue';
    const squareColor = 'green';

    describe('Text Test', () => {
        it(`Checks to see if text is equal to "${text}"`, () => {
            const squareObj = new Square(text);
            expect(squareObj.text).toEqual(text);
        });
    });

    describe('Text Color Test', () => {
        it(`Checks to see if color is equal to "${textColor}"`, () => {
            const squareObj = new Square(text, textColor);
            expect(squareObj.textColor).toEqual(textColor);
        });
    });

    describe('Square Color Test', () => {
        it(`Checks to see if square color is equal to "${squareColor}"`, () => {
            const squareObj = new Square(text, textColor, squareColor);
            expect(squareObj.squareColor).toEqual(squareColor);
        });
    });

    describe('Square Render Test', () => {
        it(`Checks if the square svg has rendered with text "${text}", text color "${textColor}", and square color "${squareColor}"`, () => {
            const renderedsquare = new Square(text, textColor, squareColor);
            expect(renderedsquare.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <square cx="150" cy="100" r="80" fill="${squareColor}" />
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
          </svg>`);
        });
    });
});