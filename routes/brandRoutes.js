const express = require("express");
const router = express.Router();
const controller = require("../controllers/brandController");

router.post("/brands", controller.createBrand);
router.get("/brands", controller.getBrands);
router.get("/brands/summary", controller.getSummary);
router.get("/brands/:id", controller.getBrandById);
router.patch("/brands/:id/status", controller.updateStatus);
router.post("/brands/:id/notes", controller.addNote);

module.exports = router;