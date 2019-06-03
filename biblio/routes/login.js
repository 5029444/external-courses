const User = require("../models/user.js");
const Book = require("../models/book.js")
const bcrypt = require("bcrypt");
const session = require("express-session");


module.exports = function (app) {

  app.post("/login", function (req, res) {
    User.findOne({
      email: req.body.email
    }, function (err, user) {
      if (user == null) {
        return res.status(401).json({
          status: false,
          statusText: "User doesn't exist"
        });
      };
      if (err) {
        console.error(err);
      } else {
       
        bcrypt.compare(req.body.password, user.password, function (err, result) {
          if (result === true) {

            req.session.name = user.name;
            req.session.email = user.email;
            return res.status(200).json({
              status: true,
              statusText: "sucsessful login",
              name: req.session.name,
              email: req.session.email,  
              
            });

          } else {
            console.log("Error during verification: " + err)
            return res.status(500).json({
              status: false,
              statusText: "User or password are invalid"
            });
          };
        });
      };
    });
  });
};