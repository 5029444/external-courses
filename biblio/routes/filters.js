const User = require("../models/user.js");
const Book = require("../models/book.js")
const session = require("express-session");
module.exports = function (app) {

    app.get("/getanonbooks", function (req, res) {
        Book.find({}).exec(function (err, books) {
            if (err) throw err;
            return res.status(200).json({
                books: books
            });
        });
    });

    app.post("/getuserbooks", function (req, res) {
        console.log(req.session.name)
        if (req.session.name != undefined) {
            Book.find({
                'ownedby': req.session.name
            }).exec(function (err, books) {
                if (err) throw err;
                return res.status(200).json({
                    books: books
                });
            });
        } else {
            Book.find({}).exec(function (err, books) {
                if (err) throw err;
                return res.status(200).json({
                    books: books
                });
            });
        }
    });

    app.post('/must', function (req, res) {
        if (req.session.name != undefined) {
            Book.find({
                    'ownedby': req.session.name,
                    must_read: true
                })
                .exec(function (err, books) {
                    if (err) throw err;
                    return res.status(200).json({
                        books: books
                    });
                });
        } else {
            Book.find({
                    must_read: true
                })
                .exec(function (err, books) {
                    if (err) throw err;
                    return res.status(200).json({
                        books: books
                    });
                });
        }
    });

    app.post('/best', function (req, res) {
        if (req.session.name != undefined) {
            Book.find({
                    "ownedby": req.session.name,
                    must_read: true
                })
                .exec(function (err, books) {
                    if (err) throw err;
                    return res.status(200).json({
                        books: books
                    });
                });
        } else {
            Book.find({
                    best: true
                })
                .exec(function (err, books) {
                    if (err) throw err;
                    return res.status(200).json({
                        books: books
                    });
                });
        }
    });

    app.post('/classic', function (req, res) {
        if (req.session.name != undefined) {
            Book.find({
                    'ownedby': req.session.name,
                    classic: true
                })
                .exec(function (err, books) {
                    if (err) throw err;
                    return res.status(200).json({
                        books: books
                    });
                });
        } else {
            Book.find({
                    classic: true
                })
                .exec(function (err, books) {
                    if (err) throw err;
                    return res.status(200).json({
                        books: books
                    });
                });
        }
    });

    app.post('/nonfiction', function (req, res) {
        if (req.session.name != undefined) {
            Book.find({
                    'ownedby': req.session.name,
                    non_fiction: true
                })
                .exec(function (err, books) {
                    if (err) throw err;
                    return res.status(200).json({
                        books: books
                    });
                });
        } else {
            Book.find({
                    non_fiction: true
                })
                .exec(function (err, books) {
                    if (err) throw err;
                    return res.status(200).json({
                        books: books
                    });
                });
        }
    });
    
    app.post("/browse", function (req, res) {
        console.log(req.session.name)
        if (req.session.name != undefined) {
            Book.find({
                'ownedby': req.session.name
            }).exec(function (err, books) {
                if (err) throw err;
                return res.status(200).json({
                    books: books
                });
            });
        } else {
            res.status(403).send({
                status: false,
                msg: "Forbidden: "
              });
        
        }
    });

    app.post("/readnow", function (req, res) {
        console.log(req.session.name)
        if (req.session.name != undefined) {
            Book.find({
                "ownedby": req.session.name,
                "nowreadingby": req.session.name
            }).exec(function (err, books) {
                if (err) throw err;
                return res.status(200).json({
                    books: books
                });
            });
        } else {
            Book.find({title:0}).exec(function (err, books) {
                if (err) throw err;
                return res.status(200).json({
                    books: books
                });
            });
        }
    });

    app.post("/shop", function (req, res) {
        console.log(req.session.name)
        if (req.session.name != undefined) {
            Book.find(
                {"ownedby": {$ne: req.session.name} })
                .exec(function (err, books) {
                if (err) throw err;
                return res.status(200).json({
                    books: books
                });
            });
        } else {
            Book.find({}).exec(function (err, books) {
                if (err) throw err;
                return res.status(200).json({
                    books: books
                });
            });
        }
    });

    app.post("/favs", function (req, res) {
        console.log(req.session.name)
        if (req.session.name != undefined) {
            Book.find({
                "ownedby": req.session.name,
                "markedFavby":req.session.name
            }).exec(function (err, books) {
                if (err) throw err;
                return res.status(200).json({
                    books: books
                });
            });
        } else {
            res.status(403).send({
                status: false,
                msg: "Forbidden: " 
              });
        
        }
    });


    app.post("/wishlist", function (req, res) {
        console.log(req.session.name)
        if (req.session.name != undefined) {
            Book.find({
                "ownedby": req.session.name,
                "wishlistedby": req.session.name
            }).exec(function (err, books) {
                if (err) throw err;
                return res.status(200).json({
                    books: books
                });
            });
        } else {
            res.status(403).send({
                status: false,
                msg: "Forbidden: " 
              });
        
        }
    });


    app.get("/history", function (req, res) {
    //custom user logs here
        if (req.session.name != undefined) {
            Book.find({
                "ownedby": req.session.name,

            }).exec(function (err, books) {
                if (err) throw err;
                return res.status(200).json({
                    books: books
                });
            });
        } else {
           res.status(403).send({
                status: false,
                msg: "Forbidden: " 
              });      
        }
    });

    app.post("/allbooks", function (req, res) {
        Book.find({}).exec(function (err, books) {
            if (err) throw err;
            return res.status(200).json({
                books: books
            });
        });
    });

    app.post("/recent", function (req, res) {
        Book.find({}).sort({createdAt: -1})
        .exec(function (err, books) {
            if (err) throw err;
            return res.status(200).json({
                books: books
            });
        });
    });

    app.post("/raiting", function (req, res) {
        Book.find({}).sort({raiting: -1})
        .exec(function (err, books) {
            if (err) throw err;
            return res.status(200).json({
                books: books
            });
        });
    });

    app.post("/free", function (req, res) {
        Book.find({cost: 0})
        .exec(function (err, books) {
            if (err) throw err;
            return res.status(200).json({
                books: books
            });
        });
    });



    app.post("/search", function (req, res) {
        Book.find({}).sort({createdAt: -1})
        .exec(function (err, books) {
            if (err) throw err;
            return res.status(200).json({
                books: books
            });
        });
    });

/*
app.post("/search", function (req, res) {
    console.log(req.session.name)
    if (req.session.name != undefined) {
        Book.find({
            'ownedby': req.session.name
        }).exec(function (err, books) {
            if (err) throw err;
            return res.status(200).json({
                books: books
            });
        });
    } else {
        Book.find({}).exec(function (err, books) {
            if (err) throw err;
            return res.status(200).json({
                books: books
            });
        });
    }
});
*/

};