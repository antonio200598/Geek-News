const express = require("express");
const app = express();
const port = 3000;
const product = require("./routes/product-route.js");
const user = require("./routes/user-route.js");
const cors = require("cors");

//Config
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/products", product);
app.use("/users", user);
app.use((req, res) => {
  res.status(404).send({
    error: "Not found",
  });
});

// Server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
