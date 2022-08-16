const Controller = require("../controllers/memberController");
const memberRoute = require("express").Router();

memberRoute.get("/", Controller.getAllBooks);

module.exports = memberRoute;
