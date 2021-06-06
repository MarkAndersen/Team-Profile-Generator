const Manager = require('../lib/manager');

describe("Manager", () => {
    it("return an office number string", () => {
        const office = new Manager("Mark", "42", "blah@fake.com", "306");

        expect(office.officeNumber).toEqual("306");
    });
    
})