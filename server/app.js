const express = require("express");
const cors = require("cors");
const { getUserInfo } = require("./controllers/userController");
const mongoose = require("mongoose");
const app = express();
const path = require("path");
const axios = require("axios");
const fs = require("fs");
const bcrypt = require('bcrypt');
const { json } = require("express");

app.use(express.json());
app.use(cors());

// mongoose.connect(
//   "mongodb+srv://Ishkhan:ephVpAGFEWEYK0FK@cluster0.m4fstld.mongodb.net/Lib?retryWrites=true&w=majority",
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   }
// );


const relativePath = "ALMS/books.json";
const absolute = path.resolve(relativePath);
console.log(absolute);

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

app.get("/user/math", (req, res) => {
	fs.readFile(absolute, "utf8", (err, data) => {
	  if (err) {
		res.status(500).send("Error reading file");
		return;
	  }
	  try {
		const mathBooks = JSON.parse(data).filter(book => book.category.includes('Math'));
		res.send(mathBooks);
	  } catch (error) {
		res.status(500).send("Error parsing file data");
	  }
	});
  });
  

app.get("/user/Java", (req, res) => {
	fs.readFile(absolute, "utf8", (err, data) => {
	  if (err) {
		res.status(500).send("Error reading file");
		return;
	  }
	  try {
		const mathBooks = JSON.parse(data).filter(book => book.category.includes('Java'));
		res.send(mathBooks);
	  } catch (error) {
		res.status(500).send("Error parsing file data");
	  }
	});
  });
  
app.get("/user/ComputerScience", (req, res) => {
	fs.readFile(absolute, "utf8", (err, data) => {
	  if (err) {
		res.status(500).send("Error reading file");
		return;
	  }
	  try {
		const mathBooks = JSON.parse(data).filter(book => book.category.includes('ComputerScience'));
		res.send(mathBooks);
	  } catch (error) {
		res.status(500).send("Error parsing file data");
	  }
	});
  });

app.get("/user/Science", (req, res) => {
	fs.readFile(absolute, "utf8", (err, data) => {
	  if (err) {
		res.status(500).send("Error reading file");
		return;
	  }
	  try {
		const mathBooks = JSON.parse(data).filter(book => book.category.includes('Science'));
		res.send(mathBooks);
	  } catch (error) {
		res.status(500).send("Error parsing file data");
	  }
	});
  });
  

// app.get("/use1", getUserInfo); // Using the getUserInfo function for the '/user' route

const port = 9000;

app.listen(port, (error) => {
  error
    ? console.log(error)
    : console.log(`Server running at http://localhost:${port}/`);
});
