import express from "express";

const app = express();
const port = process?.env?.SERVER_PORT ?? 3000;

app.get("/", (req, res) => {
  res.send("Hello Worlds!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

