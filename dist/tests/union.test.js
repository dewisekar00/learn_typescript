"use strict";
describe('Union', () => {
    it('Should be Union', () => {
        let sample = ' anna';
        sample = 100;
        sample = 'jean';
        sample = true;
    });
    function process(value) {
        {
            if (typeof value === 'string') {
                return value.toUpperCase();
            }
            else if (typeof value === 'number') {
                return value + 100;
            }
            else {
                return !value;
            }
        }
    }
    expect(process(100)).toBe(200);
    expect(process('Anna')).toBe('ANNA');
    expect(process(true)).toBe(false);
});
