import { sayHello } from "../src/say-hello";


describe('sayHello', function (): void {
    it('should return hello anna' , function (): void {
        expect(sayHello("anna")).toBe("Hello anna")
    })
})