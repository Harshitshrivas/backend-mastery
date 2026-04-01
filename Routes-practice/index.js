const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  console.log();
  res.status(200).send("I am Working....");
});

// import routes
const userRouter = require("./routes/user");
const productroutes = require("./routes/product");
const orderRouter = require("./routes/order");

// mount routes
app.use("/user", userRouter);
app.use("/product", productroutes);
app.use("/order", orderRouter);

app.listen(port, () => {
  console.log("Server Started...");
});
