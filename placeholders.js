let message = "Type something skibidi";
var acc = 0;
var interval = 50;
setInterval(()=> {
    if(acc % message.length == 0){
        acc = 0
        interval = 400;
        console.log("one done");
    }
    acc += 1
    document.getElementById("uname").placeholder = message.slice((message.length - acc) % message.length);
    if (interval != 50){
        interval = 50
    }
    //console.log(message.slice(-(message.length - acc) % message.length))
}, interval);