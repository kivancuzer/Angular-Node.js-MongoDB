const express = require('express');
const router = express.Router();

router.get("/signIn",(req,res)=>{
    res.send("singIn Sayfası");
});

router.post("/signIn",(req,res)=>{
    res.send("singIn Sayfası (Post method)");
});

module.exports = router;