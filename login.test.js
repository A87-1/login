const login = require("./login");

//Skapa ett testgrupp
describe("Testing login function", () => {
    
    it("When username is null and password is correct it should be invalid.", () => {
        const loginResult = login(null,'password123');
        expect(loginResult).not.toBe(null);
        expect(typeof(loginResult)).toBe('object');
        expect(loginResult.success).toBe(false);
        expect(loginResult.message).toBe('Felaktig input');
    });

    it("When username is correct and password is null it should be invalid.", () => {
        const loginResult = login('admin', null);
        expect(loginResult).not.toBe(null);
        expect(typeof(loginResult)).toBe('object');
        expect(loginResult.success).toBe(false);
        expect(loginResult.message).toBe('Felaktig input');
    });

    it("When username is null and password is null it should be invalid.", () => {
        const loginResult = login(null, null);
        expect(loginResult).not.toBe(null);
        expect(typeof(loginResult)).toBe('object');
        expect(loginResult.success).toBe(false);
        expect(loginResult.message).toBe('Felaktig input');
    });

    it("When username is '' and password is correct it should be invalid.", () => {
        const loginResult = login('', 'password123');
        expect(loginResult).not.toBe(null);
        expect(typeof(loginResult)).toBe('object');
        expect(loginResult.success).toBe(false);
        expect(loginResult.message).toBe('Felaktig input');
    });

    it("When username is correct and password is '' it should be invalid.", () => {
        const loginResult = login('admin', '');
        expect(loginResult).not.toBe(null);
        expect(typeof(loginResult)).toBe('object');
        expect(loginResult.success).toBe(false);
        expect(loginResult.message).toBe('Felaktig input');
    });

    it("When username is '' and password is '' it should be invalid.", () => {
        const loginResult = login('', '');
        expect(loginResult).not.toBe(null);
        expect(typeof(loginResult)).toBe('object');
        expect(loginResult.success).toBe(false);
        expect(loginResult.message).toBe('Felaktig input');
    });

    it("When username is not correct and password is correct it should be invalid.", () => {
        const loginResult = login('test', 'password123');
        expect(loginResult).not.toBe(null);
        expect(typeof(loginResult)).toBe('object');
        expect(loginResult.success).toBe(false);
        expect(loginResult.message).toBe('Felaktig användarnamn eller lösenord');
    });

    it("When username is correct and password is not correct it should be invalid.", () => {
        const loginResult = login('admin', 'test');
        expect(loginResult).not.toBe(null);
        expect(typeof(loginResult)).toBe('object');
        expect(loginResult.success).toBe(false);
        expect(loginResult.message).toBe('Felaktig användarnamn eller lösenord');
    });

    it("When username is not correct and password is not correct it should be invalid.", () => {
        const loginResult = login('test', 'test');
        expect(loginResult).not.toBe(null);
        expect(typeof(loginResult)).toBe('object');
        expect(loginResult.success).toBe(false);
        expect(loginResult.message).toBe('Felaktig användarnamn eller lösenord');
    });

    it("When username is correct and password is correct it should be invalid.", () => {
        const loginResult = login('admin', 'password123');
        expect(loginResult).not.toBe(null);
        expect(typeof(loginResult)).toBe('object');
        expect(loginResult.success).toBe(true);
        expect(loginResult.message).toBe('Success');
    });
});