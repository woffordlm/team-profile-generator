const Engineer = require ('../lib/Engineer')


describe('creates a new engineer', () => {
    describe("pass parameteres to a new engineer", () => {
        it ('all of the parameters should match', () => {
            const engineer = new Engineer ('luke', '1', 'lukewofford@gmail.com', 'woffordlm')
            expect(engineer.github).toBe('woffordlm')
            expect(engineer.name).toBe('luke')
            expect(engineer.id).toBe('1')
            expect(engineer.email).toBe('lukewofford@gmail.com')
        })
        describe("getName test", () => {
            it('names should match up', () => {
                const engineer = new Engineer ('luke', '1', 'lukewofford@gmail.com', 'woffordlm').getName()
                expect(engineer).toBe('luke')
            })
        })
        describe("getId test", () => {
            it('id should match up', () => {
                const engineer = new Engineer ('luke', '1', 'lukewofford@gmail.com', 'woffordlm').getId()
                expect(engineer).toBe('1')
            })
        })
        describe("getEmail test", () => {
            it('email should match up', () => {
                const engineer = new Engineer ('luke', '1', 'lukewofford@gmail.com', 'woffordlm').getEmail()
                expect(engineer).toBe('lukewofford@gmail.com')
            })
        })
        describe("getRole test", () => {
            it('roles should match', () => {
                const engineer = new Engineer ('luke', '1', 'lukewofford@gmail.com', 'woffordlm').getRole()
                expect(engineer).toBe('Engineer')
            })
        })
        describe("github test", () => {
            it('usernames should match', () => {
                const engineer = new Engineer ('luke', '1', 'lukewofford@gmail.com', 'woffordlm').getGithub()
                expect(engineer).toBe('woffordlm')
            })
        })
})
})