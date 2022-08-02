import express from "express";

const app = express();
const port = 5555;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("", () => {});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
