const Intern = require('../lib/intern');
describe("Intern", () => {
    it("Should take in a school", () => {
        const universtiy = new Intern("Mark", "24", "fake@gmail.com", "University of Connecticut");
   
        expect(universtiy.school).toEqual("University of Connecticut");
    });
    
});