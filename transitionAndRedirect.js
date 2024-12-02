async function boxes(event) {
       
    const form = document.getElementById('signinForm'); // Replace 'myForm' with the actual ID of your form
    const formData = new FormData(form);
    event.preventDefault
    
    var username = formData.get("uname");
    var password = formData.get("pwd");
    localStorage.setItem("username", username);
    console.log(`Username: ${username}, Password: ${password}`);

    //now do the transition
    nBoxes = 10;
    

    box = document.createElement("div")
    document.createTextNode("from the power of centered divs")
    box.appendChild
    box.id = "box_0";
    box.className = "subframe";
    document.getElementById("main-subframe").appendChild(box);
    form.remove();

    await addBoxes(box);
    
    //removeBoxes(nBoxes);
    
    window.location.href = "don pollo.html"
    
}

async function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

let i = 0;
async function addBoxes(startBox) {
    if(i < nBoxes - 1) {
        i++;
        let box = document.createElement("div");
        startBox.appendChild(box);
        box.id = `box_${i}`;
        box.className = "subframe";
        await sleep(100);
        return addBoxes(box)
    }
    else {
        return null;
    }
}
//not gonna use this anyway
async function removeBoxes(nBoxes) {
    if(i >= 0) {
        let box = document.getElementById(`box_${i}`);
        box.style.display = "none";
        i--;
        await sleep(200);
        return removeBoxes(box);
    }
    else {
        return null;
    }
    
}



// let transitionUpdate = setInterval(()=>{}, 50)

// form.addEventListener('submit', (event) => {
//     event.preventDefault(); // Stop the browser from submitting the form normally
//     username = document.getElementById("uname");
//     password = document.getElementById("pwd");
    
    
//     // Your JavaScript code to handle the form data goes here
// });