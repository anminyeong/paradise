const UserInfo = require("../models/userInfo.model.js");
const MyPoint = require("../models/myPoint.model.js");

// Create and Save a new Customer
exports.login = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  if(!req.body.email) {
    res.status(400).send({
      message: "'email' undefined."
    });
  }

  if(!req.body.password) {
    res.status(400).send({
      message: "'password' undefined"
    });
  }

  const email = req.body.email
  UserInfo.findById(email, (err, userInfoData) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          status : {
            code : 0,
            message: `Not found users with email ${req.params.email}.`
          }
        });
      } else {
        res.status(500).send({
          status : {
            code : 0,
            message: "Error retrieving users with email " + req.params.email
          }
        });
      }
    } else {
      MyPoint.findByEmail( email, (err, users) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              status : {
                code : 0,
                message: `Not found users with email ${req.params.email}.`
              }
            });
          } else {
            res.status(500).send({
              status : {
                code : 0,
                message: "Error retrieving users with email " + req.params.email
              }
            });
          }
        } else{
          
            // console.log(user)
            var save_point = 0;
            var buy_point = 0;

            users.forEach(user => {
              if(user.point_type == 'SAVE') {
                save_point += user.point
              }else if(user.point_type == 'BUY'){
                buy_point += user.point
              }
            });

            const user = {
              seq : userInfoData.seq,
              username : userInfoData.username,
              save_point : save_point,
              buy_point : buy_point
            }
          
              // console.log(user.length)
              res.send({
                status : {
                  code : 0,
                  message: `Not found Customer with email ${req.params.email}.`
                },
                user 
              });
        } 
      })
    }
  })

  // Create a Customer
  // const userInfo = new UserInfo({
  //   email: req.body.email,
  //   username: req.body.username,
  //   password: req.body.password,
  //   create_time: new Date()
  // });

  // // Save Customer in the database
  // UserInfo.create(userInfo, (err, data) => {
  //   if (err)
  //     res.status(500).send({
  //       message:
  //         err.message || "Some error occurred while creating the Customer."
  //     });
  //   else res.send(data);
  // });
};

// Create and Save a new Customer
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  if(!req.body.email) {
    res.status(400).send({
      message: "'email' undefined."
    });
  }

  if(!req.body.username) {
    res.status(400).send({
      message: "'username' undefined"
    });
  }

  if(!req.body.password) {
    res.status(400).send({
      message: "'password' undefined"
    });
  }

  // Create a Customer
  const userInfo = new UserInfo({
    email: req.body.email,
    username: req.body.username,
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