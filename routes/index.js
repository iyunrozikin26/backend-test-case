const bookRoute = require("./bookRoute");
const borrowRoute = require("./borrowRoute");
const memberRoute = require("./memberRoute");

const router = require("express").Router();

router.use("/books", bookRoute);
router.use("/members", memberRoute);
router.use("/borrows", borrowRoute);

module.exports = router;
