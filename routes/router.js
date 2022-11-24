const { Router } = require("express");
const { route } = require("./listEvents");

const router = Router();

router.use("/listEvents", require("./listEvents"));
router.use("/addEvent", require("./addEvents"));



module.exports = router;