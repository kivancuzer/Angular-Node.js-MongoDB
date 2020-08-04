var dizi = ["mehmet", 20, false, 0.3];

console.log(dizi[0]);


dizi.forEach(function (k) {
    console.log(k);
})

var isim = "mehmet";
if (isim !== "mehmet") {
    throw Error("beklenmeyen isim");
}

console.log(isim);


try {
    var sayi1 = 4;
    var sayi2 = 0;
    var sonuc = sayi1 / sayi2;

    if(sayi2 === 0){
        throw Error("sayi 2 sıfıra eşit olamaz");
    }
}catch (error){
    console.log(error);
}finally{
    console.log("burası finally bloğu...");
}