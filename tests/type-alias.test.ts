import { Category, Product } from "../src/type-alias"

describe('Type Alias', () => {
  it('Should support in typescript', () => {
    const category: Category = {
        id: 10,
        name: 'Snack'
    }
    const product: Product = {
        id: '10',
        name: 'Milk Biscuit',
        price: 12000,
        category: category
    }
    // product.description = 'coba' kalo mau coba tambah properti ngga bisaa

    console.info(category)
    console.info(product)
  })
})
