const Circle = require('./circle.js');

describe('circleCheck', () => {
    describe('Text Test', () => {
        it('Checks to see if text is equal to "svg"', () => {
            const text = 'svg';
            const circleObj = new Circle(text);
            expect(circleObj.text).toEqual(text);

        });
    });
    describe('Text Color Test', () => {
        it('Checks to see if color is equal to "blue"', () => {
            const text = 'svg';
            const textColor = 'blue';
            const circleObj = new Circle(text, textColor);
            expect(circleObj.textColor).toEqual(textColor);

        });
    });
    describe('Circle Color Test', () => {
        it('Checks to see if circle color is equal to green', () => {
            const text = 'svg';
            const textColor = 'blue';
            const circleColor = 'green';
            const circleObj = new Circle(text, textColor, circleColor);
            expect(circleObj.circleColor).toEqual(circleColor);
        });
    });
    describe('Circle Render Test', () => {
        it('Checks if the Circle svg has rendered', () => {
            const text = 'svg';
            const textColor = 'blue';
            const circleColor = 'green';
            const renderedCircle = new Circle(text, textColor, circleColor);
            expect(renderedCircle.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <circle cx="150" cy="100" r="80" fill="${circleColor}" />
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
          </svg>`)
        })
    })
});