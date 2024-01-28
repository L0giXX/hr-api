import express from "express";

import routers from "./routes/index";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = 8080;

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});

app.use(routers);
