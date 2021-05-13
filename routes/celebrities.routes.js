const express = require("express");
const router = express.Router();
const MovieModel = require("./../models/MovieModel");
const CelebrityModel = require("./../models/CelebrityModel");

router.get("/", (req, res, next) => {
  CelebrityModel.find().then((dbResult) => {
    res.render("celebrities/celebrities.hbs", {
      celebrities: dbResult,
    });
  });
});

router.get("/new", (req, res, next) => {
  res.render("celebrities/celebrity-new.hbs");
});

router.post("/new", (req, res, next) => {
  CelebrityModel.create(req.body)
    .then(() => res.redirect("/celebrities"))
    .catch(() => res.redirect("/new"));
});

router.get("/:id/delete", (req, res, next) => {
    CelebrityModel.findByIdAndDelete(req.params.id)
     
     .then(() => res.redirect("/celebrities"))     
     .catch((dbErr) => next(dbErr));
})

router.get("/:id", (req, res, next) => {
    CelebrityModel.findById(req.params.id)
     
     .then((dbResult) => res.render("celebrities/celebrity-detail.hbs", {
         celebrity : dbResult,
     }))     
     .catch((dbErr) => next(dbErr));
})

module.exports = router;
