const express = require("express");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("How are you?");
});

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}...`);
});
