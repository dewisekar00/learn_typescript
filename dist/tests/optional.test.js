"use strict";
describe('Optional', () => {
    it('should support null and undefind', function () {
        function sayHello(name) {
            if (name) {
                console.info(`Hello ${name}`);
            }
            else {
                console.info('Hello');
            }
        }
        sayHello('Anna');
        const name = undefined;
        sayHello(name);
        sayHello(null);
    });
});
