var form = document.querySelector("#form-thinking");
var socket = io();

socket.on("thoughts:thought", data => {
    let thoughts = document.querySelector(".thoughts");
    let thought = document.createElement("div");
    let name = document.createElement("div");
    let body = document.createElement("div");
    thought.className = "thought mb-3";
    name.className = "name";
    body.className = "body";

    let title = document.createElement("h4");
    title.innerText = data.name;

    let content = document.createElement("p");
    content.innerText = data.thought;

    name.appendChild(title);
    body.appendChild(content);

    thought.appendChild(name);
    thought.appendChild(body);

    thoughts.insertBefore(thought, thoughts.firstChild);
    //console.log(thoughts);
});

addEventListener("submit", function(event){
    event.preventDefault()
    let name = document.querySelector("#name");
    let thought = document.querySelector("#thought");

    fetch('thoughts', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name.value,
            thought: thought.value
        })
    });

    socket.emit("thoughts:thought", {
        name: name.value,
        thought: thought.value
    });

    name.value = "";
    thought.value = "";
});

