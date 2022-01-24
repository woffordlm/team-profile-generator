const Intern = require ('../lib/Intern')


describe('creates a new intern', () => {
    describe("pass parameteres to a new intern", () => {
        it ('all of the parameters should match', () => {
            const intern = new Intern ('WSSU', 'luke', '3', 'lukewofford@gmail.com')
            expect(intern.school).toBe('WSSU')
            expect(intern.name).toBe('luke')
            expect(intern.id).toBe('3')
            expect(intern.email).toBe('lukewofford@gmail.com')
        })
})
})