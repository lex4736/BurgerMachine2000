const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
res.render("index", {burger_data : ["burger", "more"]});

});


module.exports = router;