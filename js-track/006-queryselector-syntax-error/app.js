const btn = document.getElementById("update-btn");

btn.addEventListener("click", () => {
    const box = document.querySelector(".status-box");
    
    if (box) {
        box.innerText = "Status: Online ✅";
    }
});
