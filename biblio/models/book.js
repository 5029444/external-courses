const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({

  authorFirstName: String,

  authorLastName: String,

  title: {
    type: String,
    required: true,
  },

  image_url: { 
    type: String,
    default: "assets/img/default.jpg",
  },

  raiting: { 
    type: Number,
    default: 1.5,
  },

  cost: { 
    type: Number,
    default: 200,
  },

  must_read: { 
    type: Boolean,
    default: false,
  },


  best: { 
    type: Boolean,
    default: false,
  },

  classic: { 
    type: Boolean,
    default: false,
  },

  non_fiction: { 
    type: Boolean,
    default: false,
  },

  createdAt: { 
    type: Number,
    default: 1553021109000,
  },

  updatedAt:{ 
    type: Number,
    default: 0,
  },

  ownedby: [{type:String}],

  markedFavby: [{ type:String}],

  nowreadingby: [{ type:String}],

  wishlistedby: [{ type:String}],

  language: { 
    type: String,
    default: "en",
  },

  publisher:{ 
    type: String,
    default: "O'RLY",
  },

  pages:{ 
    type: Number,
    default: 20,
  },

  year: { 
    type: Number,
    default: 1992,
  }
});

let Book = mongoose.model("Book" , BookSchema);

module.exports = Book;
