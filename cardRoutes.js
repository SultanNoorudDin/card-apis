const express =require('express');
const router = express.Router();
const cardController = require('../controllers/cardController');

// post card

router.post("/cards",cardController.createCard);
router.get("/getCard",cardController.getAllCards);

module.exports = router;
