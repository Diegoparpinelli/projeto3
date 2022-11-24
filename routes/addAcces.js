const { Router } = require("express");
const { addAcces }= require("../controllers/addAccesController")

const router = Router();

router.post("/", (req, res)=>{
    addAcces(req.body).then(data=> res.send(data).status(201)).catch(data=> res.send(data).status(500));
})

module.exports = router;