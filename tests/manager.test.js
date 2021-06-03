const Manager = require('../lib/manager');

describe("Manager", () => {
    it("Should return an office number between 1-100", () => {
        const cb = () => new Manager(0)
        const err = new Error("expected office number to be between 1-100") 
   
        expect(cb).toThrowError(err);
    });
    
})