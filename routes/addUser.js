const { Router } = require("express");
const { addUsers }= require("../controllers/addUsersController")

const router = Router();

router.post("/", (req, res)=>{
    addUsers(req.body).then(data=> res.send(data).status(201)).catch(data=> res.send(data).status(500));
})

module.exports = router;