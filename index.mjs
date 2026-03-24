import express from "express";
const server = express();
server.post("/", (req, res) => {
  res.json({ name: "apple" });
});
server.post("hello", (req, res) => {
  res.json({ name: "banana" });
});
server.post("hey", (req, res) => {
  res.send("hello");
});
server.use(express.json());
server.post("/login", (req, res) => {
  console.log(req.body);
  res.json({ name: "banana" });
});
server.listen(5000, () => {
  console.log(`server started on ${5000}`);
});
