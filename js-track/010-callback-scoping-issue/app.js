const names = ["Ada", "Grace", "Linus"];

document.getElementById("start-btn").addEventListener("click", function() {
    const message = document.getElementById("msg");
    message.innerText = "Waiting...";

    for (let index = 0; index < names.length; index++) {
        setTimeout(function() {
            message.innerText = "Hello, " + names[index] + "!";
        }, (index + 1) * 1000);
    }
});
