const { Router } = require("express");
const { route } = require("./listEvent");

const router = Router();

router.use("/listEvents", require("./listEvent"));
router.use("/addEvent", require("./addEvents"));
router.use("/addUser", require("./addUser"));
router.use("/addAcces", require("./addAcces"));



module.exports = router;