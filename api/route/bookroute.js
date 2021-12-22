const express = require("express");
const sequelize = require("../data/sqlitedbconfig");
const Book = require("../model/bookmodel");

sequelize.sync().then(() => console.log("db is ready"));

const router = express.Router();

router.get("/api/books", async (req, res, next) => {
  try {
    const booklist = await Book.findAll();
    res.status(200).json(booklist);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.get("/api/books/:id", async (req, res, next) => {
  try {
    const book = await Book.findByPk(req.params.id);
    res.status(200).json(book);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.post("/api/books", async (req, res, next) => {
  try {
    const newbook = {
      title: req.body.title,
      content: req.body.content,
      author: req.body.author,
      price: req.body.price,
    };
    const book = await Book.create(newbook);
    res.status(201).json(book);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.put("/api/books", async (req, res, next) => {
  try {
    const result = await Book.update(
      {
        title: req.body.title,
        content: req.body.content,
      },
      {
        where: {
          id: req.body.id,
        },
      }
    );
    res.status(200).json({
      message: "updated successfully",
      data: result,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.delete("/api/books", async (req, res, next) => {
  try {
    const result = await Book.destroy({
      where: {
        id: req.body.id,
      },
    });
    res.status(200).json({
      message: "working",
      data: result,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
});

module.exports = router;
