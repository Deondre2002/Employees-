import express from "express";
const app = express();

const employees = [
  { id: 1, name: "Goku", position: "Trainer" },
  { id: 2, name: "Vegeta", position: "Assistant Trainer" },
  { id: 3, name: "Bulma", position: "Technology CEO" },
  { id: 4, name: "Piccolo", position: "Meditation Coach" },
  { id: 5, name: "Krillin", position: "Police Officer" },
];

app.get("/", (req, res) => {
  res.send("👋 Hello universe 7!");
});

app.get("/employees", (req, res) => {
  res.json(employees);
});

app.get("/employees/random", (req, res) => {
  const randomEmployee =
    employees[Math.floor(Math.random() * employees.length)];
  res.json(randomEmployee);
});

app.get("/employees/:id", (req, res) => {
  const id = Number(req.params.id);
  const employee = employees.find((e) => e.id === id);

  if (!employee) {
    return res
      .status(404)
      .json({
        error: `Employee with id ${id} not found — probably training 😁`,
      });
  }

  res.json(employee);
});

export default app;
