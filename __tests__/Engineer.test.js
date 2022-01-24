const Engineer = require ('../lib/Engineer')


describe('creates a new engineer', () => {
    describe("pass parameteres to a new engineer", () => {
        it ('all of the parameters should match', () => {
            const engineer = new Engineer ('woffordlm', 'engineer', 'luke', '1', 'lukewofford@gmail.com')
            expect(engineer.github).toBe('woffordlm')
            expect(engineer.name).toBe('luke')
            expect(engineer.id).toBe('1')
            expect(engineer.email).toBe('lukewofford@gmail.com')
        })
})
})