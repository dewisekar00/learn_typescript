describe('Interface', () => {
    it('Should support in typescript', () => {
        const seller = {
            id: 1,
            name: 'anna',
            nib: '1222',
            npwp: '123112',
        };
        seller.name = 'toko cacil';
        // seller.nib = "123123" ngga bisa diubah lagi karena readonly(ini digunakan untuk melindungi properti)
    });
    it('Should support func interface ', () => {
        const add = (value1, value2) => {
            return value1 + value2;
        };
        expect(add(2, 2)).toBe(4);
    });
    //Indexable Interface ARRAY
    it('should support indexable interface for Array', () => {
        const names = ['anna', 'jean'];
        console.info(names);
    });
    //Indexable Interface OBJECT
    it('should support indexable interface for Object ', () => {
        const dictionary = {
            name: 'Anna',
            address: 'konoha',
        };
        // console.info(dictionary['name'])
        // console.info(dictionary['address'])
        expect(dictionary['name']).toBe('Anna');
    });
    it('should support extend iterface', () => {
        const employee = {
            id: '1',
            name: 'Anna',
            division: 'IT',
        };
        console.info(employee);
        const manager = {
            id: '2',
            name: 'jean',
            numberOfEmployees: 5,
            division: 'IT',
        };
        console.info(manager);
    });
    //Implementasi dari Interface di JavaScript sebenarnya adalah sebuah object
    // Func Interface
    it('should support func in interface', () => {
        const person = {
            name: 'jean',
            sayHello: function (name) {
                return `Hello ${name}, my name is ${this.name}`;
            },
        };
        console.info(person.sayHello('anna'));
    });
    // cara membuat tipe data baru dengan cara menggabungkan dua tipe data lain
    it('should support intersection type', () => {
        const domain = {
            id: '1',
            name: 'jean'
        };
    });
    // mengubah tipe data (type assertions)
    it('should support type assertions', () => {
        const person = {
            name: 'Anna',
            age: 10
        };
        // hati hati ketika lakukan konversi(mengubah tipe data dari satu jenis ke jenis lain yang kita inginkan) krn bisa jadi tidak aman karena kalo sampe salah lakukan konversi maka bisa error dan ngga ketauan errornya sampe saat dijalankan aplikasinya
        const person2 = person;
        console.log(person2);
    });
});
export {};
// interface bawaan ts jadi kalo dicompile ke js akan kosong, banyak yang menggunakan interface dari pada type alias
