const express = require("express");
const router = express.Router();
const {
  getUsers,
  Register,
  Login,
  Logout,
} = require("../controllers/UserController");
const verifyToken = require("../middlewares/VerifyToken");
const { refreshToken } = require("../controllers/RefreshToken");

router.get("/users", verifyToken, getUsers);
router.post("/users/register", Register);
router.post("/users/login", Login);
router.get("/token", refreshToken);
router.delete("/logout", Logout);

module.exports = router;
