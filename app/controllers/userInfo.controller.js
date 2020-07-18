const UserInfo = require("../models/userInfo.model.js");

// Create and Save a new Customer
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a Customer
  const userInfo = new UserInfo({
    email: req.body.email,
    name: req.body.username,
    password: req.body.password,
    create_time: new Date()
  });

  // Save Customer in the database
  UserInfo.create(userInfo, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Customer."
      });
    else res.send(data);
  });
};