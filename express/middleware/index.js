const express = require('express');
const app = express();

/*
    get, post, put, delete, all

     ? (zorunlu olmayan) -me(hm)?et  /iletis(im)? http://localhost:3000/iletis

     *(yerine herhangi ifade gelebilir)  iletisim*   http://localhost:3000/iletisimrandom
     
     +(soldaki ifadenin aynısı olmalı) http://localhost:3000/xyyyyyyyz


*/

app.get("/users/:id/:postId?",(req,res)=>{
    res.send(req.params);
    res.end();
})

app.get("/contact", (req,res)=>{
    res.send("contact page");
});

app.post("/contact", (req,res)=>{
    res.send("contact page post method");
});

app.all("/",(req,res)=>{
    res.send("selam burasi app.all()");
})

app.listen(3000, ()=>{
    console.log("express server çalıştı");
});