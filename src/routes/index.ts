import addressRouter from "./address";
import attendanceRouter from "./attendance";
import benefitRouter from "./benefit";
import companyRouter from "./company";
import departmentRouter from "./department";
import employeeRouter from "./employee";
import leaveRequestRouter from "./leaveRequest";
import projectRouter from "./project";
import roleRouter from "./role";
import salaryRouter from "./salary";
import todoRouter from "./todo";

const routers = [
  benefitRouter,
  companyRouter,
  departmentRouter,
  employeeRouter,
  projectRouter,
  roleRouter,
  salaryRouter,
  todoRouter,
  addressRouter,
  attendanceRouter,
  leaveRequestRouter,
];

export default routers;
