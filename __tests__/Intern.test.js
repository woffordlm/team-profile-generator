const Intern = require ('../lib/Intern')


describe('creates a new intern and tests methods', () => {
    describe("pass parameteres to a new intern", () => {
        it ('all of the parameters should match', () => {
            const intern = new Intern ('luke', '3', 'lukewofford@gmail.com','WSSU')
            expect(intern.school).toBe('WSSU')
            expect(intern.name).toBe('luke')
            expect(intern.id).toBe('3')
            expect(intern.email).toBe('lukewofford@gmail.com')
        })
    })
    describe("getSchool test", () => {
        it ('schools should match up', () => {
            const intern = new Intern ( 'luke', '3', 'lukewofford@gmail.com','WSSU').getSchool()
            expect(intern).toBe('WSSU')
        })
    })
    describe("pass parameteres to a new intern", () => {
        it ('all of the parameters should match', () => {
            const intern = new Intern ('luke', '3', 'lukewofford@gmail.com','WSSU').getRole()
            expect(intern).toBe('intern')

        })
    })
})