const box = document.getElementById("status-box");
const btn = document.getElementById("toggle-btn");

btn.addEventListener("click", () => {
    box.classList.toggle("active");
});
