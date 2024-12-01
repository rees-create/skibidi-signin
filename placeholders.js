let message = "Type something skibidi";
var acc = 0;
var wait_duration = 10;
var count = 0;
var wait = false;
setInterval(()=>{
    if(acc == message.length) {
        acc = 0
        wait = true;
        
    }
    
    if(wait == false){
        console.log("hello")
        acc += 1
        document.getElementById("uname").placeholder = message.slice((message.length - acc) % message.length);
    }
    else {
        count +=1;
    }
    if(count == wait_duration) {
        wait = false;
        count = 0;
        acc = 0;
    }

}, 50);
    //console.log(message.slice(-(message.length - acc) % message.length))
