const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  const query = req.query;
  res.send({
    ...query,
    developer: "Ryann Kim Sesgundo",
    course: "BSIT",
    year: 4,
    section: "B",
  });
});

app.post("/", (req, res) => {
  const body = req.body;
  res.send({
    ...body,
    developer: "Ryann Kim Sesgundo",
    course: "BSIT",
    year: 4,
    section: "B",
  });
});

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
