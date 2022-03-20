INSERT INTO department (name)
VALUES
  ('Customer Success'),
  ('Revenue'),
  ('Product and Technology');

INSERT INTO roles (title, salary, department_id)
VALUES
  ('Customer Support Representative', 50000, 1),
  ('Customer Support Manager', 65000, 1),
  ('Sales Engineer', 60000, 2),
  ('Sales Engineer Manager', 75000, 2),
  ('Software Engineer', 80000, 3),
  ('Staff Software Engineer', 120000, 3),
  ('Engineering Manager', 120000, 3),
  ('Product Manager', 100000, 3);

INSERT INTO employee (first_name, last_name, roles_id, manager_id)
VALUES
  ('Ronald', 'Firbank', 1, 1),
  ('Virginia', 'Woolf', 2, 1),
  ('Piers', 'Gaveston', 1, 0),
  ('Charles', 'LeRoi', 3, 1),
  ('Katherine', 'Mansfield', 4, 1),
  ('Dora', 'Carrington', 5, 0),
  ('Edward', 'Bellamy', 6, 0),
  ('Montague', 'Summers', 7, 1),
  ('Octavia', 'Butler', 8, 1),
  ('Unica', 'Zurn', 1, 1);