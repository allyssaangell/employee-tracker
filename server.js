const mysql = require("mysql2");
const inquirer = require("inquirer");
const table = require("console.table");

const db = mysql.createConnection(
  {
    host: "localhost",
    // YOUR MySQL username,
    user: "root",
    password: "",
    database: "employee_db",
  },
  console.log("Connected to the employee database.")
);

// view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee
const questions = () => {
  return inquirer
    .prompt([
      {
        type: "list",
        name: "questions",
        message: "Please choose an option.",
        choices: [
          "View All Departments",
          "View All Roles",
          "View All Employees",
          "Add a Department",
          "Add a Role",
          "Add an Employee",
          "Update an Employee",
          "Exit",
        ],
         initial: 1
      },
    ])
    .then((answer) => {
      if (answer.questions == "View All Departments") {
        viewDepartments();
      } else if (answer.questions == "View All Roles") {
        viewRoles();
      } else if (answer.questions == "View All Employees") {
        viewEmployees();
      } else if (answer.questions == "Add a Department") {
        addDepartment();
      } else if (answer.questions == "Add a Role") {
        addRole();
      } else if (answer.questions == "Add an Employee") {
        addEmployee();
      } else if (answer.questions == "Update an Employee") {
        updateEmployee();
      } else {
        return console.log("Goodbye!");
      }
    });
};

const viewDepartments = () => {
    const dept = `SELECT DISTINCT 
                    department.id,
                    department.name AS department
                    FROM department
                    `
    db.query(dept, (err, result) => {
        if (err) {
            console.log(err);
        }
        console.table(result);
        questions();
    })
};

questions();