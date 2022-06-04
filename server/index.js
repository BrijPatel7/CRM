const express = require("express");
const testRoutes = require("./routes/testRoutes");
const app = express();
const port = 5000;

app.use("/", testRoutes);

app.listen(port, () => {
  console.log("Server is running at port : ", port);
});
