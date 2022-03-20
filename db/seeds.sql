INSERT INTO department (department_id, name)
VALUES
  (1, 'Customer Success'),
  (2, 'Revenue'),
  (3, 'Product and Technology');

INSERT INTO role (role_id, title, salary, department_id)
VALUES
  (1, 'Customer Support Representative', 50,000, 1),
  (2, 'Customer Support Manager', 65,000, 1),
  (3, 'Sales Engineer', 60,000, 2),
  (4, 'Sales Engineer Manager', 75,000, 2),
  (5, 'Software Engineer', 80,000, 3),
  (6, 'Staff Software Engineer', 120,000, 3),
  (7, 'Engineering Manager', 120,000, 3),
  (8, 'Product Manager', 100,000, 3);

INSERT INTO candidates (employee_id, first_name, last_name, role_id, manager_id)
VALUES
  (1, 'Ronald', 'Firbank', 1, 1),
  (2, 'Virginia', 'Woolf', 2, 1),
  (3, 'Piers', 'Gaveston', 1, 0),
  (4, 'Charles', 'LeRoi', 3, 1),
  (5, 'Katherine', 'Mansfield', 4, 1),
  (6, 'Dora', 'Carrington', 5, 0),
  (7, 'Edward', 'Bellamy', 6, 0),
  (8, 'Montague', 'Summers', 7, 1),
  (9, 'Octavia', 'Butler', 8, 1),
  (10, 'Unica', 'Zurn', 1, 1);