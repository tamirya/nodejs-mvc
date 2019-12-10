const express = require("express");
const router = express.Router();
const controller = require("../controllers/controller");
const auth = require("../middleware/auth");

router.get("/", auth, controller.index);
router.get("/fileReader", controller.fileReader);
module.exports = router;
