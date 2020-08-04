const fs = require('fs');

/*fs.readFile("demo.txt", (error, data) => {
    console.log(data.toString());
    console.log("dosya okuma işlemi bitti");
});
*/

const demoDosyasi = fs.readFileSync("demo.txt");
console.log(demoDosyasi.toString());
console.log("dosya okuma bitti");



