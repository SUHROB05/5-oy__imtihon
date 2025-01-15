
const btnList = document.querySelectorAll(".btn__son");
const sonHisoblash = document.getElementById("son__yigish");
const savatId = document.getElementById("savat__id");
const minus = document.getElementById("minus");
const clear = document.getElementById("clears")

let Son = 0;


btnList.forEach((btn) => {
    btn.addEventListener("click", () => {
        Son++;
        // console.log(Son);
        sonHisoblash.innerText = Son;
    });
});

let Son1 = 0;

if (Son1 % 2 == 0) {
    savatId.addEventListener("click", () => {
        console.log("Savat tugmasi bosildi!");
        minus.style.display = "block";
        clear.style.display = "block";
    });
    Son1++;
} else {
    savatId.addEventListener("click", () => {
        console.log("Savat tugmasi yopildi!");
        minus.style.display = "none";
        clear.style.display = "none";
    });
    Son1++;
}

// minus.forEach((btn) => {
//     btn.addEventListener("click", () => {
//         Son--;
//         // console.log(Son);
//         sonHisoblash.innerText = Son;
//     });
// });

// btnList.forEach((btn) => {
//     btn.addEventListener("click", () => {
//         // console.log(Son);
//         sonHisoblash.innerText = 0;
//     });
// });