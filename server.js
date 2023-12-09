const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const path = require("path");
const bcrypt = require("bcrypt");
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use(express.static(__dirname));

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "e_learn",
});

db.connect((err) => {
  if (err) {
    console.error("Database connection failed: " + err.stack);
    return;
  }
  console.log("Connected to database");
});




app.post("/register", (req, res) => {
  const { username, email, password } = req.body;

  

  const query =
    "INSERT INTO users (username, email, password) VALUES (?, ?, ?)";
  db.query(query, [username, email, password], (err, results) => {
    if (err) {
      console.error("Registration failed: " + err.stack);
      res.status(500).send("Registration failed");
      return;
    }
    
    res.redirect("login.html");
  });
});


app.post("/login", (req, res) => {
  const { username, password } = req.body;



  const query = "SELECT * FROM users WHERE username = ? AND password = ?";
  db.query(query, [username, password], (err, results) => {
    if (err) {
      console.error("Login failed: " + err.stack);
      res.status(500).send("Login failed");
      return;
    }

    if (results.length > 0) {
      
      res.redirect("./course.html");
    } else {
      res.status(401).send("Invalid credentials");
    }
  });
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "index.html");
});

app.get("/login", (req, res) => {
  res.sendFile(__dirname + "login.html");
});

app.get("/register", (req, res) => {
  res.sendFile(__dirname + "registerr.html");
});

app.get("/course", (req, res) => {
  res.sendFile(__dirname + "course.html");
});

app.get("/dashboard", (req, res) => {
  res.sendFile(__dirname + "dashboard.html");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
