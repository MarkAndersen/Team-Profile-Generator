const Engineer = require('../lib/engineer');

describe("Engineer", () => {
 it("Should take in a github account name", () => {
     const account = new Engineer("fullName", "id", "email", "MarkAndersen");

     expect(account.github).toEqual("MarkAndersen");
 });
    
});