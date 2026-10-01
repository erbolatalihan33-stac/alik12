const btn = document.getElementById("magic-btn");
const msg = document.getElementById("message");

btn.addEventListener("click", () => {
    msg.innerText = "You found the surprise! 🎉";
});