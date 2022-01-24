const Employee = require ('../lib/Employee')


describe('creates an employee', () => {
    describe("pass parameteres to a new employee", () => {
        it('names should match up', () => {
            const employee = new Employee ('luke', '1', 'lukewofford@gmail.com')
            expect(employee.name).toBe('luke')
            expect(employee.id).toBe('1')
            expect(employee.email).toBe('lukewofford@gmail.com')
        })
})
})