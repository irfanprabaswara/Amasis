const { spreadsheetController } = require("../controllers");

const router = require("express").Router();

router.get("/", (req, res) => {
  res.json({ message: "Hello Express!" });
});

router.get("/spreadsheet", spreadsheetController);

module.exports = router;
