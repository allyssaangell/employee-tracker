const inquirer = require("inquirer");
const consoleTable = require("console.table");

// view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee

const questions = [{
    type: 'list',
    name: 'questions',
    message: 'Please choose an option.',
    choices: [
        'View All Departments', // Get
        'View All Roles', // Get
        'View All Employees', // GET
        'Add a Department', // Post
        'Add a Role', // Post
        'Add an Employee', // Post
        'Update an Employee', // Put
        'Exit'
    ]
}];