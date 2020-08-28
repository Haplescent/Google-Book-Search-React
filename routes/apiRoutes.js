const express = require("express");
const router = express.Router();
const path = require("path");
const db = require(path.resolve(__dirname, "../models"));

// get all Books
// adding more code
// changing config settings
router.get("/all", (req, res) => {
  db.Book.findAll().then((Books) => res.send(Books));
});

// get single Book by id
router.get("/find/:id", (req, res) => {
  db.Book.findAll({
    where: {
      id: req.params.id,
    },
  }).then((Book) => res.send(Book));
});

// post new Book
router.post("/new", (req, res) => {
  db.Book.create({
    title: req.body.title,
    author: req.body.author,
    description: req.body.description,
    image: req.body.image,
    link: req.body.link,
  }).then((submittedBook) => res.send(submittedBook));
});

// delete Book
router.delete("/delete/:id", (req, res) => {
  db.Book.destroy({
    where: {
      id: req.params.id,
    },
  }).then(() => res.send("success"));
});

// edit a Book
router.put("/edit", (req, res) => {
  db.Book.update(
    {
      title: req.body.title,
      authors: req.body.authors,
      description: req.body.description,
      image: req.body.image,
      link: req.body.link,
    },
    {
      where: { id: req.body.id },
    }
  ).then(() => res.send("success"));
});

module.exports = router;
