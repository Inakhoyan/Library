const express = require("express");
const cors = require("cors");
const { getUserInfo } = require("./controllers/userController");
const mongoose = require("mongoose");
const app = express();
const path = require("path");
const axios = require("axios");
const fs = require("fs");
const bcrypt = require('bcrypt');

app.use(express.json());
app.use(cors());

mongoose.connect(
  "mongodb+srv://Ishkhan:ephVpAGFEWEYK0FK@cluster0.m4fstld.mongodb.net/Lib?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const relativePath = "ALMS/books.json";
const absolute = path.resolve(relativePath);

app.get("/user", (req, res) => {
  fs.readFile(absolute, "utf8", (err, data) => {
    if (err) {
      res.status(500).send("Error reading file");
      return;
    }
    try {
      const books = JSON.parse(data); // Assuming the file content is JSON
      res.json(books);
    //   console.log(books);
    } catch (error) {
      res.status(500).send("Error parsing file data");
    }
  });
});

// const users = [];

// app.post('/Login/Register', async (req, res) => {
// 	try {
// 		const password = await bcrypt.hash(req.body.password, 10)
// 		users.push({
// 			id: Date.now().toString(),
// 			name: req.body.name,
// 			email: req.body.email,
// 			password: password
// 		});
// 		res.redirect('/Login');
// 	}
// 	catch {
// 		res.redirect('/Register');
// 	}
	
// 	console.log(users);
// })



// app.get("/use1", getUserInfo); // Using the getUserInfo function for the '/user' route

const port = 9000;

app.listen(port, (error) => {
  error
    ? console.log(error)
    : console.log(`Server running at http://localhost:${port}/`);
});
