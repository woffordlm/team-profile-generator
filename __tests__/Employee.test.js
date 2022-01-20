const Employee = require ('../lib/Employee')

test('creates an employee', () => {
    const employee = new Employee ('luke', '1', 'lukewofford@gmail.com')
    expect(employee.name).toBe('luke')
})