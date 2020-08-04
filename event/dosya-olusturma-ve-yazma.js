/*
fs.appendFile();
fs.writeFile();
*/

const fs = require('fs');

/*fs.appendFile("demo.txt", "hello world\n", (err) => {
    if (err) {
        throw err;
    }
    console.log("dosyaya ekleme yapıldı.");
});*/


fs.writeFile("demo2.txt", "hello world\n", (err) => {
    if (err) {
        throw err;
    }
    console.log("dosyaya ekleme yapıldı.");
});