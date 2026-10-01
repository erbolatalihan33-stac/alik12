function showAlert() {
    alert("Button works!");
}

document.querySelector(".click-me").addEventListener("click", showAlert);

document.getElementById("clone-btn").addEventListener("click", () => {
    const original = document.getElementById("original");
    const copy = original.cloneNode(true);
    copy.querySelector(".click-me").addEventListener("click", showAlert);
    document.body.appendChild(copy);
});
