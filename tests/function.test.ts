describe('function', () => {
  it('should be func in ts', () => {
    function sayHello(name: string): string {
      return `Hello ${name}`;
    }
    expect(sayHello('Anna')).toBe('Hello Anna');
    // "void" digunakan untuk menunjukkan bahwa sebuah fungsi tidak mengembalikan nilai apa pun
    function printHello(name: string): void {
      console.info(`Hello ${name}`);
    }
    printHello('');
  });

  it('should have default value', () => {
    function sayHello(name: string = 'Guest'): string {
      return `Hello ${name}`;
    }
    expect(sayHello()).toBe('Hello Guest');
  });

  it('should support rest parameter', () => {
    function sum(...values: number[]): number {
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
    function transfer(from: string, to: string): string;
    function transfer(from: string, to: number): number;

    function transfer(from: string, to: any): any {
      if (typeof from === 'string' && typeof to === 'string') {
        console.info(`success send to ${to}`);
        return to;
      } else {
        console.info(`success transfer to id${to}`);
        return to;
      }
    }
    expect(transfer('anna', 'jean')).toBe('jean');
    expect(transfer('anna', 8102)).toBe(8102);
  });

  it('should have func as parameter/ callback func', () => {
    function sayHello(name: string, filter: (name: string) => string){
        return `Hello ${filter(name)}`
    }

     function toUpper(name: string): string {
        return name.toUpperCase();
     }
    //  expect(sayHello('anna', toUpper)).toBe('Hello ANNA')
     expect(sayHello('anna', (name: string): string => {
      return name.toUpperCase();
     } )).toBe('Hello ANNA')
     
})

});
