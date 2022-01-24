const Manager = require ('../lib/Manager')


describe('creates a new manager', () => {
    describe("pass parameteres to a new manager", () => {
        it ('all of the parameters should match', () => {
            const manager = new Manager ( 'luke', '3', 'lukewofford@gmail.com', '3364072276')
            expect(manager.officeNumber).toBe('3364072276')
            expect(manager.name).toBe('luke')
            expect(manager.id).toBe('3')
            expect(manager.email).toBe('lukewofford@gmail.com')
        })
})
})