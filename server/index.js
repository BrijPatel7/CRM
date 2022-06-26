const express = require("express");
const mongoose = require("mongoose");

// Routes
const testRoutes = require("./routes/testRoutes");
const customerRoutes = require("./routes/customerRoutes");

const app = express();
const port = 5000;
app.use(express.json());

// Routes API
app.use("/api", testRoutes);
app.use("/api", customerRoutes);

// Connect to DB
mongoose
  .connect(
    "mongodb+srv://Infiway:Infiway123@cluster0.kuocj.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("Connected to database"));

app.listen(port, () => {
  console.log("Server is running at port : ", port);
});
