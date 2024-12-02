let message = "Hey skibidi mogger  ";
let message2 = "Type something sigma"
var acc = 0;
var acc2 = 0;
var wait_duration = 10;
var count = 0;
var wait = false;

setInterval(()=>{
    if(acc == message.length) {
        acc = 0
        acc2 = 0
        wait = true;
    }
    if(wait == false){
        acc += 1
        acc2 += 1
        if(document.getElementById("uname") != null && document.getElementById("pwd") != null) {
            document.getElementById("uname").placeholder = message.slice((message.length - acc) % message.length);
            document.getElementById("pwd").placeholder = message2.slice((message2.length - acc) % message2.length);
        }
    }
    else {
        count +=1;
    }
    if(count == wait_duration) {
        wait = false;
        count = 0;
        acc = 0;
        acc2 = 0;
    }

}, 50);
    //console.log(message.slice(-(message.length - acc) % message.length))
