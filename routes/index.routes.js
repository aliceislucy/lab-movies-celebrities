const express = require("express");
const router = express.Router();

/* GET home page */
router.get("/", (req, res, next) => res.render("index", {
    title : "Welcome to my awesome app y'all",
    description : "it took many hours to make but here it is"
}));

module.exports = router;
