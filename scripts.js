function message(text) {
    const area = document.getElementById('prompt-area');
    const grid = document.getElementById('text-area');
    const output = document.createElement("p");
    const command = text.toLowerCase();

    grid.appendChild(document.createElement("span")).textContent = text;


    if (command === 'help') {
        output.textContent = "Available commands: help, about, contact";
    } else if (command === 'about') {
        output.textContent = "This is a simple command-line interface.";
    } else {
        output.textContent = "Unknown command. Type 'help' for a list of commands.";
    }

    grid.appendChild(output);
    event.target.value = "";
}


window.addEventListener('load', () => {     
    const url = new URLSearchParams(window.location.search);      
    
    if (url.has('q')) {
        const queryValue = url.get('q');
        message(queryValue);
    }

});
