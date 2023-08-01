const { spreadsheetController } = require("../controllers");
const botController = require("../controllers/bot.controller");

const router = require("express").Router();

router.get("/", (req, res) => {
  res.json({ message: "Hello Express!" });
});

router.get("/spreadsheet", spreadsheetController);
router.post("/webhook", botController);

module.exports = router;
