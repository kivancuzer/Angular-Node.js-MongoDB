const express = require('express');
const router = express.Router();

router.get("/signUp",(req,res)=>{
    res.send("singUp Sayfası");
});

router.post("/singUp",(req,res)=>{
    res.send("singUp Sayfası (Post method)");
});

module.exports = router;