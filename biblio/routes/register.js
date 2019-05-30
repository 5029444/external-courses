const User = require("../models/user.js");

module.exports = function (app) {
    app.post("/register", function (req, res) {

        //console.log (req.body);
       
        let newUser = new User({
          name: req.body.name,
          email: req.body.email,
          password: req.body.password
        })
      
        newUser.save(function (err, result) {
          console.log(result);
          if (err) {
            console.log(err);
            res.status(500).send({
              status: false,
              msg: "Registration failed, error: " + err
            });
          } else {
            res.status(200).send({
              status: true,
              msg: "Registration sucessfull"
            });
          };
        });
        
      });
    };
    