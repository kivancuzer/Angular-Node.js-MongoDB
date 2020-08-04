///ES6dan önce

const degerler = {
    deger1: "deger1",
    deger2: "deger2",
    deger3: "deger3"
};

const deger1 = degerler.deger1;
const deger2 = degerler.deger2;

console.log(deger1,deger2);


///ES6dan sonra


const yeniDegerler = {
    yeniDeger1: "deger1",
    yeniDeger2: "deger2",
    yeniDeger3: "deger3"
}

const{yeniDeger1, yeniDeger2, yeniDeger4 = 5} = yeniDegerler;


console.log(yeniDeger1);
console.log(yeniDeger2);
console.log(yeniDeger4);