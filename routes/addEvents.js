const { Router } = require("express");
const { addEvents }= require("../controllers/addEventsController")

const router = Router();

router.post("/", (req, res)=>{
    addEvents(req.body).then(data=> res.send(data).status(201)).catch(data=> res.send(data).status(500));
})

module.exports = router;