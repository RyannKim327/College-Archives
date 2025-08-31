const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  const query = req.query;
  res.send("This GET request");
});

app.post("/", (req, res) => {
  const body = req.body;
  res.send("This is POST request");
});

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
