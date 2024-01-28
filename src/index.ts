import express from "express";

import benefitRouter from "./routes/benefit";
import companyRouter from "./routes/company";
import departmentRouter from "./routes/department";
import employeeRouter from "./routes/employee";
import projectRouter from "./routes/project";
import roleRouter from "./routes/role";
import salaryRouter from "./routes/salary";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = 8080;

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});

app.use(
  employeeRouter,
  roleRouter,
  departmentRouter,
  companyRouter,
  projectRouter,
  salaryRouter,
  benefitRouter,
);
