let message = "Type something skibidi";
var acc = 0;
var wait_duration = 10;
var count = 0
    setInterval(()=>{
        if(acc % message.length == 0){
            
            acc = 0
        }
        if(count % message.length == 0) { 
            wait = true;
            count = 0
        }
        count += 1
        if(!wait){
            acc += 1
            document.getElementById("uname").placeholder = message.slice((message.length - acc) % message.length);
        }
        else if(count == wait_duration)
        {
            wait = false;
        }
        
    }, 50);
    //console.log(message.slice(-(message.length - acc) % message.length))
