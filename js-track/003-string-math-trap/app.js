document.getElementById("calc-btn").addEventListener("click", () => {
    const val1 = document.getElementById("num1").value;
    const val2 = document.getElementById("num2").value;
    
    const total = Number(val1) + Number(val2);
    
    document.getElementById("result").innerText = total;
});
