const express = require("express");
const jsonServer = require("json-server");
const app = express();

// JSON Server middleware
const router = jsonServer.router("data/product.json");
const middlewares = jsonServer.defaults();

app.use(middlewares);
app.use("/api", router);

// Health Check Endpoint
app.get("/health", (req, res) => {
  res.status(200).send({ status: "OK" });
});

// Start Server
const port = 9000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
