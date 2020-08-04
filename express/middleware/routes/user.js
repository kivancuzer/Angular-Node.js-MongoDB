const express = require('express');
const router = express.Router();

app.set("view engine", "pug");

router.get("/", (req,res) => {
    const user = false;
    if(user)
    res.send("user sayfası");
    else
        return next({status:404, message: "Bu kullanıcı bulunamadı."});
});

module.exports = router;