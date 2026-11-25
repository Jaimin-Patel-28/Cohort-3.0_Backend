// Using Node.JS

// const http = require("http");

// const server = http.createServer((req, res) => {
//   if (req.url === "/user") {
//     res.end("I'm in user");
//   }
//   if (req.url === "/home") {
//     res.end("I'm in home");
//   }
//   if (req.url === "/cart") {
//     res.end("I'm in cart");
//   }
// });

// server.listen(3000, () => {
//   console.log("Server run on port 3000");
// });

// Using Express.JS

// const express = require("express");

// const app = express();

// app.get("/", (req, res) => {
//   res.send("This is landing page");
// });

// app.get("/user", (req, res) => {
//   res.send("This is user page");
// });
// app.get("/home", (req, res) => {
//   res.send("This is home page");
// });
// app.get("/cart", (req, res) => {
//   res.send("This is cart page");
// });

// app.listen(3000, () => {
//   console.log("server is running on port 3000");
// });

// Methods -> GET, POST, PUT/PATCH, DELETE

const express = require("express");

const app = express();

const port = 3000;

app.get("/", (req, res) => {
  res.send("this is landing page 2");
});

app.use(express.json())

app.post("/", (req, res) => {
  console.log(req.body);

  res.send("POST method successfully run");
});

app.listen(port, () => {
  console.log(`Server running on port : ${port}`);
});
