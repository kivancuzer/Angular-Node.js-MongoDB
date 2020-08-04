
const asenkronFonksiyon = (sayi) => {
    return new Promise((resolve, reject) => {
        if (sayi === 4) {
            resolve("her şey yoluda");
        } else {
            reject("bir sorun var!");
        }

    });
};

asenkronFonksiyon(4)
    .then((data) => {
        console.log(data);
        return 1;
    })
    .then((data) => {
        console.log(data);
        return 2;
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    });










/*const asenkronFonksiyon = function(sayi,callback){
const sonuc = sayi+2 ;
callback(sonuc);
};

asenkronFonksiyon(2,function(sonuc){
console.log(sonuc);
asenkronFonksiyon(4,function(sonuc){
    console.log(sonuc);
    asenkronFonksiyon(6,function(sonuc){
        console.log(sonuc);
    });
});
});*/