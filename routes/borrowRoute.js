const Controller = require("../controllers/borrowController");

const borrowRoute = require("express").Router();

borrowRoute.get("/", Controller.getAllBorrows);

module.exports = borrowRoute;
