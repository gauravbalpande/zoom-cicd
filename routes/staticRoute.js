const express = require("express");
const { v4: uuidv4 } = require("uuid");

const router = express.Router();

router.get("/signup", (req, res) => {
  res.render("signup");
});

router.get("/login", (req, res) => {
  res.render("login");
});

router.get("/home", (req, res) => {
  res.render("home", {
    user: req.user,
  });
});

router.get("/logout", (req, res) => {
  res.clearCookie("token").redirect("/login");
});

router.get("/", (req, res) => {
  res.redirect(`/${uuidv4()}`);
});

router.get("/:room", (req, res) => {
  res.render("room", {
    roomId: req.params.room,
    user: req.user,
  });
});

module.exports = router;
