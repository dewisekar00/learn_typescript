import { sayHello } from "../src/say-hello";
describe('sayHello', function () {
    it('should return hello anna', function () {
        expect(sayHello("anna")).toBe("Hello anna");
    });
});
