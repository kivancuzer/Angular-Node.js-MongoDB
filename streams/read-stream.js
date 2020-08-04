const fs = require('fs');
const file = "video.mp4";

const readStream = fs.createReadStream(file);
const writeStream = fs.createWriteStream("new.mp4");
let progress = 0;

fs.stat(file,(err,data)=>{
    const total = data.size;
   // console.log(data);


readStream.on("data", (chunk) => {
   // console.log(chunk.length);
    progress += chunk.length;
    console.log(Math.round((100*progress)/total)+"%");
});

readStream.pipe(writeStream);
writeStream.on("finish",()=>{
    console.log("yeni dosya oluşturuldu");
})

/*readStream.on("end", () => {
    console.log("veri okunması bitti");
   // console.log(progress);
});*/

});


