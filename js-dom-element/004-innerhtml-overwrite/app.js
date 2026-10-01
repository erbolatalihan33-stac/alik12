document.getElementById("add-text").addEventListener("click", () => {
    const container = document.getElementById("container");
    
    const paragraph = document.createElement("p");
    paragraph.innerText = "Newly added text!";
    container.appendChild(paragraph);
});
