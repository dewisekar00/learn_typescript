"use strict";
describe('Array', () => {
    it('Should same with javascript', () => {
        const name = ['anna'];
        const value = [1, 2, 3];
        console.log(name);
        console.log(value);
    });
    it('Should  Read only Array', () => {
        const hobbies = ['read book', 'draw anime'];
        console.log(hobbies[0]);
        // kalo dibaca boleh tapi kalo diubah ngga boleh
        // contoh: hobbies[0] ="sleep" ini ngga bisa, kalo ada proses memanipulasi data didalam array maka akan error
    });
    it('should support tupple', () => {
        const person = ['name', 'address', 20];
        console.log(person);
    });
});
// Tipe data array:
/*
-ada Array
-ReadOnlyArray
-Tupple( panjang/lenght sudah ditentukan juga isi/ tipe tiap index nya sudah ditentukan)
*/
