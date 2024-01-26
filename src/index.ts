import express from "express";
import employeeRouter from "./routes/employee";
import roleRouter from "./routes/role";
import departmentRouter from "./routes/department";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = 8080;

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});

app.use(employeeRouter, roleRouter, departmentRouter);
