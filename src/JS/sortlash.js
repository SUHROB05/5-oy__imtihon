
const filterButtons = document.querySelectorAll('.section__2-ul li');
const productContainer = document.getElementById('contenir__cart');
const products = Array.from(productContainer.children);

filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const category = button.dataset.filter;

        filterButtons.forEach((btn) => {
            btn.style.backgroundColor = '';
            btn.style.color = '';
        });

        button.style.backgroundColor = 'white';
        button.style.color = 'black';

        products.forEach((product) => {
            if (category === 'all' || product.dataset.category === category) {
                product.style.display = 'block';
            } else {
                product.style.display = 'none';
            }
        });
    });
});


















// const menuItems = document.querySelectorAll('.section__2-ul li');
// const carts = document.querySelectorAll('.cart');
// const cardContayner = document.getElementById("contenir__cart");
// let S =0;
// console.log("Sss");
// menuItems.forEach(item => {
//     item.addEventListener('click', () => {
//         const filterValue = item.getAttribute('data-filter');

//         console.log("sss");
//         menuItems.forEach(menu => menu.classList.remove('bg-white')); 
//         item.classList.add('bg-white');

//         carts.forEach(cart => {
//             const firstPText = cart.querySelector('p').textContent.toLowerCase();
//             console.log(S);

//             if (firstPText === filterValue.toLowerCase()) {
//                 console.log("bor");
//                 cart.style.display = 'block'; 
//             } else {
//                 console.log("yo'q")
//                 cart.style.display = 'none'; 
//             }
//         });
//     });
// });






