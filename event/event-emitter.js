
const events = require('events');
const eventEmitter = new events.EventEmitter();

eventEmitter.on("selamla",(object)=>{
    console.log(`merhaba ${object.name} ${object.surname}`);
});

eventEmitter.once("merhabaDe", () => {
    console.log("merhaba");
});

eventEmitter.emit("selamla",{name: "kivanc", surname:"uzer"});
eventEmitter.emit("selamla",{name: "kivanc", surname:"uzer"});


eventEmitter.emit("merhabaDe");
eventEmitter.emit("merhabaDe");
