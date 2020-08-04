var data = "javascript öğreniyorum";
var userDataCount = 2;
var db ="mongoDb";

var a = 2,
    b = "kivanc",
    c = 2.3;


console.log(data);
console.log(ad("ayşe"));
ikiEkle(5);
//Function

function ikiEkle(sayi){
    console.log(sayi + 2);
}

function ad(name="kivanc"){
    return name;
}

/////

function soyle(text,callBack){
    console.log(text);
    callBack();
}

function cayDemle(){
    console.log("çay demleniyor ..");
}

soyle("merhaba", cayDemle);
