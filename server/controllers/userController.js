const User = require("../models/userModel");
const { showUser } = require("../views/userView");

function getUserInfo(req, res) {
  // Simulating fetching user data from a database
  const user = new User("John Doe", "john@example.com");

  // Render the user info
  const userInfo = showUser(user);
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end(userInfo);
}

module.exports = { getUserInfo };
