for (var i = 0; i < 10; i++) {
    console.log(i);
}
var i = 0;
while (i < 5) {
    console.log(i);
    i++;
}

var insan = {};
insan.yas = 12;
insan.isim = "kivanc";
insan.yuru = function () {
    console.log(insan.isim + "yürüyor..");
}


console.log(insan.yas);

var kivanc = {
    yas: 22,
    isim:"kivanc",
    yuru: function(){
        console.log(kivanc.isim + "yürüyor...");
    }
};
kivanc.kilo = 70;

console.log(insan);
console.log(kivanc);