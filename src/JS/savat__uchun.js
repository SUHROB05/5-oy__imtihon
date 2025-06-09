const btnList = document.querySelectorAll(".btn__son");
const sonHisoblash = document.getElementById("son__yigish");
const savatId = document.getElementById("savat__id");
const minus = document.getElementById("minus");
const clear = document.getElementById("clears");

let Son = 0;

// Har bir "+" tugmasi bosilganda sonni oshirish
btnList.forEach((btn) => {
    btn.addEventListener("click", () => {
        Son++;
        sonHisoblash.innerText = Son;
    });
});

// "Savat" tugmasi holatini almashtirish
let savatOpen = false;

savatId.addEventListener("click", () => {
    savatOpen = !savatOpen;
    if (savatOpen) {
        console.log("Savat tugmasi bosildi!");
        minus.style.display = "block";
        clear.style.display = "block";
    } else {
        console.log("Savat tugmasi yopildi!");
        minus.style.display = "none";
        clear.style.display = "none";
    }
});

// "-" tugmasi bosilganda sonni kamaytirish
minus.addEventListener("click", () => {
    if (Son > 0) {
        Son--;
        sonHisoblash.innerText = Son;
    }
});

// "Clear" tugmasi bosilganda sonni 0 qilish
clear.addEventListener("click", () => {
    Son = 0;
    sonHisoblash.innerText = Son;
});
