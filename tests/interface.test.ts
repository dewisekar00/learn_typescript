import { seller } from '../src/seller';
import { Employee, Manager } from '../src/employee';
import { Person } from '../src/person';

describe('Interface', () => {
  it('Should support in typescript', () => {
    const seller: seller = {
      id: 1,
      name: 'anna',
      nib: '1222',
      npwp: '123112',
    };
    seller.name = 'toko cacil';
    // seller.nib = "123123" ngga bisa diubah lagi karena readonly(ini digunakan untuk melindungi properti)
  });
  it('Should support func interface ', () => {
    interface Addfunc {
      (value1: number, value2: number): number;
    }
    const add: Addfunc = (value1: number, value2: number): number => {
      return value1 + value2;
    };
    expect(add(2, 2)).toBe(4);
  });

  //Indexable Interface ARRAY

  it('should support indexable interface for Array', () => {
    interface StringArray {
      [index: number]: string;
    }
    const names: StringArray = ['anna', 'jean'];
    console.info(names);
  });

  //Indexable Interface OBJECT

  it('should support indexable interface for Object ', () => {
    interface StringDictionary {
      [key: string]: string;
    }

    const dictionary: StringDictionary = {
      name: 'Anna',
      address: 'konoha',
    };
    // console.info(dictionary['name'])
    // console.info(dictionary['address'])
    expect(dictionary['name']).toBe('Anna');
  });

  it('should support extend iterface', () => {
    const employee: Employee = {
      id: '1',
      name: 'Anna',
      division: 'IT',
    };
    console.info(employee);

    const manager: Manager = {
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
    interface Person {
      name: string;
      sayHello(name: string): string;
    }

    const person: Person = {
      name: 'jean',
      sayHello: function (name: string): string {
        return `Hello ${name}, my name is ${this.name}`;
      },
    };
    console.info(person.sayHello('anna'));
  });

// cara membuat tipe data baru dengan cara menggabungkan dua tipe data lain

  it('should support intersection type', () => {
    interface HasName {
      name: string;
    }
    interface HashId {
      id: string;
    }
  // interface Person extends HasName, HashId {
  //   // kita bisa pake extends cuma disini ngga ada tambahan sesuatu
  // }

  type Domain = HasName & HashId;
  const domain: Domain = {
    id: '1',
    name:'jean'
  }
  }
)

// mengubah tipe data (type assertions)
it('should support type assertions', () => {
  const person: any = {
    name: 'Anna',
    age: 10
  } 
// hati hati ketika lakukan konversi(mengubah tipe data dari satu jenis ke jenis lain yang kita inginkan) krn bisa jadi tidak aman karena kalo sampe salah lakukan konversi maka bisa error dan ngga ketauan errornya sampe saat dijalankan aplikasinya
  const person2: Person = person as Person
  console.log(person2)
})
});
// interface bawaan ts jadi kalo dicompile ke js akan kosong, banyak yang menggunakan interface dari pada type alias
