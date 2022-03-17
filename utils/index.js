const {viewDepartments} = require('./viewDepartments')
const {viewRoles} = require('./viewRoles')
const {viewEmployees} = require('./viewEmployees')
const {addDepartment} = require('./addDepartment')
const {addEmployee} = require('./addEmployee')
const {addRole} = require('./addRole')
const {updateEmployee} = require('./updateEmployee')
const {promptInit} = require('./prompt')

const init = async () => {
    let {request} = await promptInit();
    switch (request) {
        case 'View all departments':
            await viewDepartments();
            init();
            break;
        case 'view all roles':
            await viewRoles();
            init();
            break;
        case 'view all employees':
            await viewEmployees();
            init();
            break;
        case 'Add a department':
            await addDepartment();
            init();
            break;
        case 'Add a role':
            await addRole();
            init();
            break;
        case 'Add an employee':
            await addEmployee();
            init();
            break;
        case 'Update employee':
            await updateEmployee();
            init();
            break;
        case 'Exit':
            process.exit();
            break;
        default:
            process.exit();
            break;
    }
}

module.exports = {init}