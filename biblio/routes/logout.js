
const session = require("express-session");

module.exports = function (app) {
app.post("/logout", function(req, res) {
    req.session.destroy(function(err) {
      if (err) {
        console.log("Error destroying session: " + err)
        return res.status(500).send({
          status: false,
          msg: "Error logging out, error: " + err
        });
      } else {
        console.log("Session destroyed!")
        return res.clearCookie('connect.sid', {path: '/'}).status(200).redirect("/");
      };
    });
  });
};