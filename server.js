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
        initial: 1,
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
                    `;
  db.query(dept, (err, result) => {
    if (err) {
      console.log(err);
    }
    console.table(result);
    questions();
  });
};

const viewRoles = () => {
    const roleView = `SELECT roles.id, roles.title, department.name AS department, roles.salary FROM roles JOIN department ON roles.department_id = department.id`;
    db.query(roleView, (err, result) => {
        if (err) {
            console.log(err);
        }
        console.table(result);
        questions();
    });
};

const viewEmployees = () => {
  const employees = `SELECT
                    employee.id,
                    employee.first_name,
                    employee.last_name,
                    roles.title AS "Title",
                    department.name AS "Department",
                    roles.salary,
                    CONCAT(manager.first_name, " ", manager.last_name) AS "Manager"
                    FROM employee
                    JOIN roles on employee.roles_id = roles.id
                    JOIN department ON roles.department_id = department.id
                    LEFT JOIN employee manager ON employee.manager_id = manager.id;
                    `;
  db.query(employees, (err, result) => {
    if (err) {
      console.log(err);
    }
    console.table(result);
    questions();
  });
};

const addDepartment = () => {
  const addDept = `SELECT DISTINCT 
                    department.id,
                    department.name AS department
                    FROM department
                    `;
  db.query(addDept, (err, result) => {
    if (err) {
      console.log(err);
    }
    console.table(result);
    questions();
  });
};

const addRole = () => {
  const addRole = `SELECT DISTINCT 
                    department.id,
                    department.name AS department
                    FROM department
                    `;
  db.query(addRole, (err, result) => {
    if (err) {
      console.log(err);
    }
    console.table(result);
    questions();
  });
};

const addEmployee = () => {
  const addEmp = `SELECT DISTINCT 
                    department.id,
                    department.name AS department
                    FROM department
                    `;
  db.query(addEmp, (err, result) => {
    if (err) {
      console.log(err);
    }
    console.table(result);
    questions();
  });
};

const updateEmployee = () => {
  const updateEmp = `SELECT DISTINCT 
                    department.id,
                    department.name AS department
                    FROM department
                    `;
  db.query(updateEmp, (err, result) => {
    if (err) {
      console.log(err);
    }
    console.table(result);
    questions();
  });
};

questions();
