const express = require("express");
const router = express.Router();

const controller = require("../controllers/product-controller");

router.get("/", controller.get);
router.get("/search", controller.getByName);
router.get("/:id", controller.getById);
router.post("/", controller.post);
router.put("/:id", controller.put);
router.delete("/:id", controller.delete);
router.get("*", function (req, res) {
  res.send("error", 404);
});

module.exports = router;
