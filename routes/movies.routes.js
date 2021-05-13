const express = require("express");
const router = express.Router();
const MovieModel = require("./../models/MovieModel");
const CelebrityModel = require("./../models/CelebrityModel");

router.get("/", (req, res, next) => {
    MovieModel.find().then((dbResult) => {
      res.render("movies/movies.hbs", {
        movies: dbResult,
      });
    });
  });
  
  router.get("/new", (req, res, next) => {
    res.render("movies/movies-new.hbs");
  });
  
  router.post("/new", (req, res, next) => {
    MovieModel.create(req.body)
      .then(() => res.redirect("/movies"))
      .catch(() => res.redirect("/new"));
  });
  
  router.get("/:id/delete", (req, res, next) => {
      MovieModel.findByIdAndDelete(req.params.id)
       
       .then(() => res.redirect("/movies"))     
       .catch((dbErr) => next(dbErr));
  })
  
  router.get("/:id", (req, res, next) => {
      MovieModel.findById(req.params.id)
       
       .then((dbResult) => res.render("movies/movies-detail.hbs", {
           movie : dbResult,
       }))     
       .catch((dbErr) => next(dbErr));
  })







module.exports = router;