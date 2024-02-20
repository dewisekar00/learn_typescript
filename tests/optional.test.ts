describe('Optional', () => {
  it('should support null and undefind', function () {
    function sayHello(name?: string | null) {
      if (name) {
        console.info(`Hello ${name}`);
      }else {
        console.info('Hello')
      }
    }
    sayHello('Anna')
    const name: string | undefined = undefined
    sayHello(name) 
    sayHello(null)
  });
});
