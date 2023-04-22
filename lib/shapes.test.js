const Shape = require('./shapes.js');

describe('shapeCheck', () => {
    const text = 'svg';
    const textColor = 'blue';
    const shapeColor = 'green';

    describe('Text Test', () => {
        it(`Checks to see if text is equal to "${text}"`, () => {
            const shapeObj = new Shape(text);
            expect(shapeObj.text).toEqual(text);
        });
    });

    describe('Text Color Test', () => {
        it(`Checks to see if color is equal to "${textColor}"`, () => {
            const shapeObj = new Shape(text, textColor);
            expect(shapeObj.textColor).toEqual(textColor);
        });
    });

    describe('Shape Color Test', () => {
        it(`Checks to see if shape color is equal to "${shapeColor}"`, () => {
            const shapeObj = new Shape(text, textColor, shapeColor);
            expect(shapeObj.shapeColor).toEqual(shapeColor);
        });
    });
});