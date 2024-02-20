import { Customer, CustomerType } from "../src/enum"

describe('Enum', () => {
  it('shoul support in typescript', () => {
    const customer: Customer = {
        id: 1,
        name: 'anna',
        type: CustomerType.PLATINUM
    }
    console.info(customer)
  })
})
