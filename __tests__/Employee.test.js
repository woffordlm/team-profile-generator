const Employee = require ('../lib/Employee')

// this test checks to make sure that all of the employee
// parameters pass through correctly
describe('creates an employee', () => {
    describe("pass parameteres to a new employee", () => {
        it('names should match up', () => {
            const employee = new Employee ('luke', '1', 'lukewofford@gmail.com')
            expect(employee.name).toBe('luke')
            expect(employee.id).toBe('1')
            expect(employee.email).toBe('lukewofford@gmail.com')
        })

    describe("getName test", () => {
        it('names should match up', () => {
            const employee = new Employee ('luke', '1', 'lukewofford@gmail.com').getName()
            expect(employee).toBe('luke')
        })
    })
    describe("getId test", () => {
        it('id should match up', () => {
            const employee = new Employee ('luke', '1', 'lukewofford@gmail.com').getId()
            expect(employee).toBe('1')
        })
    })
    describe("getEmail test", () => {
        it('email should match up', () => {
            const employee = new Employee ('luke', '1', 'lukewofford@gmail.com').getEmail()
            expect(employee).toBe('lukewofford@gmail.com')
        })
    })
    describe("getRole test", () => {
        it('roles should match', () => {
            const employee = new Employee ('luke', '1', 'lukewofford@gmail.com').getRole()
            expect(employee).toBe('Employee')
        })
    })
})
})
