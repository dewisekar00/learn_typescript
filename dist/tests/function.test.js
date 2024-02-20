"use strict";
describe('function', () => {
    it('should be func in ts', () => {
        function sayHello(name) {
            return `Hello ${name}`;
        }
        expect(sayHello('Anna')).toBe('Hello Anna');
        // "void" digunakan untuk menunjukkan bahwa sebuah fungsi tidak mengembalikan nilai apa pun
        function printHello(name) {
            console.info(`Hello ${name}`);
        }
        printHello('');
    });
    it('should have default value', () => {
        function sayHello(name = 'Guest') {
            return `Hello ${name}`;
        }
        expect(sayHello()).toBe('Hello Guest');
    });
    it('should support rest parameter', () => {
        function sum(...values) {
            let total = 0;
            for (const value of values) {
                total += value;
            }
            return total;
        }
        expect(sum(5, 5, 5, 5)).toBe(20);
    });
    //Function Overloading adalah kemampuan untuk membuat Function dengan nama yang sama, namun dengan parameter input yang berbeda
    it('should support func overloading', () => {
        function transfer(from, to) {
            if (typeof from === 'string' && typeof to === 'string') {
                console.info(`success send to ${to}`);
                return to;
            }
            else {
                console.info(`success transfer to id${to}`);
                return to;
            }
        }
        expect(transfer('anna', 'jean')).toBe('jean');
        expect(transfer('anna', 8102)).toBe(8102);
    });

  
});
