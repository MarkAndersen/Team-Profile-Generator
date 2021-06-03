const Intern = require('../lib/intern');
describe("Intern", () => {
    it("Should take in a school", () => {
        const universtiy = new Intern("University of Connecticut");
   
        expect(universtiy.school).toEqual("University of Connecticut");
    });
    
});