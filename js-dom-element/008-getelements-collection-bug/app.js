document.getElementById("color-all").addEventListener("click", () => {
    const paras = document.getElementsByClassName("highlight");

    for (const paragraph of paras) {
        paragraph.style.backgroundColor = "yellow";
    }
});
