const router = require("express").Router();

router.get("/",(req,res)=>{
    res.send("welcome to user route");
});

module.exports = router;