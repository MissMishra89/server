import express from "express";
const server = express();
server.get("/", (req, res) => {
  res.json({ name: "apple" });
});
server.get("hello", (req, res) => {
  res.json({ name: "banana" });
});
server.listen(3000, () => {
  console.log(`server started on ${port}`);
});
