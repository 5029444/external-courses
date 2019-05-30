const Book = require("../models/book.js")
const mongoose = require("mongoose");

module.exports = function (app) {
  // Adding new books to db
  app.post("/addbook", function (req, res) {
    console.log(req.body)
    if (req.body.title !== null) {
      let newBook = new Book({
        authorFirstName: req.body.authorFirstName,
        authorLastName: req.body.authorLastName,
        title: req.body.title,
        imageurl: req.body.imageurl,
        cost: req.body.cost,
        must_read: req.body.must_read,
        best: req.body.best,
        classic: req.body.classic,
        non_fiction: req.body.non_fiction,
        createdAt: req.body.createdAt,
        updatedAt: req.body.updatedAt
      });

      newBook.ownedby.push(req.body.ownedby)

      newBook.save(function (err, result) {
        console.log(result);
        if (err) {
          console.log(err);
          res.status(500).send({
            status: false,
            msg: "Book not saved, error: " + err
          });
        } else {
          res.status(200).send({
            status: true,
            msg: "Book sucessfully saved"
          });
        }
      })
    }
  });

};