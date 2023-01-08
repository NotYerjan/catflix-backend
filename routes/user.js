const express = require("express");

const router = express.Router();

router.get("/", () => console.log("user"));

module.exports = router;
