const express = require("express");

const router = express.Router();

router.get("/", () => console.log("reviews"));

module.exports = router;
