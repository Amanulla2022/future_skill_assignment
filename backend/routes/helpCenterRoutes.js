const express = require("express");
const router = express.Router();
const helpCenterControllers = require("../controllers/helpCenterControllers");

// POST /api/help/cards
router.post("/cards", helpCenterControllers.postHelpCard);

// GET /api/help/cards
router.get("/cards", helpCenterControllers.getAllCards);

// GET /api/help/cards/:cardID
router.get("/cards/:cardID", helpCenterControllers.getCardById);

module.exports = router;
