const Shape = require('./shapes.js');

describe('shapeCheck', () => {
    describe('Text Test', () => {
        it('Checks to see if text is equal to "svg"', () => {
            const text = 'svg';
            const shapeObj = new Shape(text);
            expect(shapeObj.text).toEqual(text);

        });
    });
    describe('Text Color Test', () => {
        it('Checks to see if color is equal to "blue"', () => {
            const text = 'svg';
            const textColor = 'blue';
            const shapeObj = new Shape(text, textColor);
            expect(shapeObj.textColor).toEqual(textColor);

        });
    });
    describe('Shape Color Test', () => {
        it('Checks to see if shape color is equal to green', () => {
            const text = 'svg';
            const textColor = 'blue';
            const shapeColor = 'green';
            const shapeObj = new Shape(text, textColor, shapeColor);
            expect(shapeObj.shapeColor).toEqual(shapeColor);
        });
    });
});