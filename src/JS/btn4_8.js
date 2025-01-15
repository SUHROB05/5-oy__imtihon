
const carOchish = document.getElementById("btn__cat-ochish");
const cartContayner = document.getElementById("contenir__cart");
let yigish = 0;

carOchish.addEventListener("click", () => {
    
    if (yigish % 2 === 0) {
        cartContayner.classList.remove("max-h-[525px]");
        cartContayner.classList.add("max-h-[1050px]");
        yigish++;
    } else {
        cartContayner.classList.remove("max-h-[1050px]");
        cartContayner.classList.add("max-h-[525px]");
        yigish++;
    }
});
