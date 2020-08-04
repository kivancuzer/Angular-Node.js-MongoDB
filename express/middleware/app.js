const express = require('express');
const app = express();

const user= require('./routes/user');
const profile = require('./routes/profile');

//helpers
const isLogin = require('./helper/isLogin');

app.use(isLogin);

app.use("/user", user);
app.use("/profile", profile);

app.use((err,req,res,next)=>{
    res.status();
    res.render("error",{
        message: err.message,
        status: err,status
    })
});

app.listen(3000, ()=>{
    console.log("express server çalıştı");
});