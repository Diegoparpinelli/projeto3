const { Router } = require("express");
const { listEvents }= require("../controllers/listEventsController")

const router = Router();

router.get("/", (req, res)=>{
     listEvents().then(data=> res.send(data).status(200)).catch(erro=> res.send(erro).status(500));
    //lsita de eventos
})

module.exports = router;