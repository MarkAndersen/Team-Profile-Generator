const Employee = require('../lib/employee');

describe("Initiliazation", () => {
    it("Should take in a string and console log it", () => {
        const employee = new Employee ("Mark");

        expect(employee.name).toEqual("Mark");
    });
});