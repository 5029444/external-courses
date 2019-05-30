const Book = require("../models/book.js")
const User = require("../models/user.js");
module.exports = function (app) {

  app.get("/favicon.ico", function (req, res) {
    res.status(204).json({
      statusText: "No content"
    });
  });

  app.get("/check", function (req, res) {
    
            return res.status(200).json({
              status: true,
              statusText: "ok",
              name: req.session.name,
              email:req.session.email
            });
  })

}