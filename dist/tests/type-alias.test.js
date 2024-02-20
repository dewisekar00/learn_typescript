describe('Type Alias', () => {
    it('Should support in typescript', () => {
        const category = {
            id: 10,
            name: 'Snack'
        };
        const product = {
            id: '10',
            name: 'Milk Biscuit',
            price: 12000,
            category: category
        };
        // product.description = 'coba' kalo mau coba tambah properti ngga bisaa
        console.info(category);
        console.info(product);
    });
});
export {};
