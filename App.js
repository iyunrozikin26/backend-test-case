if (process.env) require("dotenv").config();

const express = require("express");
const cors = require("cors");
const app = express();
const router = require("./routes");
const PORT = process.env.PORT || 5000;

app.use(
    cors({
        origin: `${process.env.CORS_ORIGIN}`,
        methods: ["GET", "POST"],
    })
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
    res.send("Hello there, you're connect to mini library");
});

app.use(router);

app.listen(PORT, () => {
    console.log(`running on port ${PORT}`);
});
