const express = require("express");
const User = require("../model/user");
const router = express.Router();

//handle User Signup
router.post("/", async (req, res) => {
  const { name, email, password } = req.body;
  await User.create({
    name,
    email,
    password,
  });

  return res.redirect("/login");
});

//handle User Login
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const token = await User.matchPasswordAndGenerateToken(email, password);

    return res.cookie("token", token).redirect("/home");
  } catch (error) {
    res.render("login", {
      error: "INCORRECT PASSWORD OR EMAIL",
    });
  }
});

module.exports = router;
