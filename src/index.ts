import express from "express";
import { createEmployee } from "./controllers/employee";

const app = express();
app.use(express.json());

const port = 8080;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/employees", createEmployee);

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
