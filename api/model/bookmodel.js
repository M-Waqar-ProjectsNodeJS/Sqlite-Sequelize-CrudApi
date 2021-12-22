const { Model, DataTypes } = require("sequelize");
const sequelize = require("../data/sqlitedbconfig");

class Book extends Model {}

Book.init(
  {
    title: {
      type: DataTypes.STRING,
    },
    content: {
      type: DataTypes.STRING,
    },
    author: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.NUMBER,
    },
  },
  {
    sequelize,
    modelName: "books",
    timestamps: false,
  }
);

module.exports = Book;
