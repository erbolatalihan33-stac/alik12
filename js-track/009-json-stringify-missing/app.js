const user = { name: "Alice", level: 5 };

document.getElementById("save-btn").addEventListener("click", () => {
    localStorage.setItem("user_profile", JSON.stringify(user));
});

document.getElementById("load-btn").addEventListener("click", () => {
    const data = localStorage.getItem("user_profile");
    if (data) {
        const profile = JSON.parse(data);
        document.getElementById("display").innerText = "Loaded: " + profile.name;
    }
});
