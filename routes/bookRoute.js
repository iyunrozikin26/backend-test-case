const Controller = require("../controllers/bookController");
const bookRoute = require("express").Router();

bookRoute.get('/', Controller.getAllBooks)

module.exports = bookRoute;
