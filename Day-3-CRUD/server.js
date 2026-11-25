const express = require("express");
const app = express();
const port = 3000;

let users = [];

app.use(express.json());

app.post("/create", (req, res) => {
  let body = req.body;
  users.push(body);
  res.send("User Created", users);
});

app.get("/", (req, res) => {
  res.send(users);
});

app.put("/update/:id", (req, res) => {
  let { id } = req.params;
  let { name, age } = req.body;

  let updatedUser = users.map((val) =>
    val.id === id ? { ...val, name, age } : val,
  );
  res.send(updatedUser);
});

app.delete("/delete/:id", (req, res) => {
  let { id } = req.params;

  let userData = users.filter((val) => val.id != id);
  users = userData;
  res.send(users);
});

app.listen(port, () => {
  console.log(`Server running on port : ${port}`);
});
