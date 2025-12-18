//  alert("Hello from JavaScript!");

// setTimeout(function(){
// alert("a set timeout")
// },2000)
// setInterval(function(){
//     alert("interval timeout")
// },10000)
// example of Asynchronous js
// console.log("one");
// console.log("two");
// setTimeout(function(){
// console.log("three")
// },2000)
console.log("four");
const buttons = document.getElementsByClassName("menu-card__button");

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        alert("Order placed");
    });
}
// images hover effects
const img = document.getElementsByTagName("img");
for(let i = 0; i < img.length; i++){
    img[i].addEventListener("mouseover",function(){
         img[i].style.transform = "scale(1.1)";
    img[i].style.transition = "0.3s";
    });
img[i].addEventListener("mouseout", function () {
        img[i].style.transform = "scale(1)";
});
}
const heroHighlight = document.querySelector(".hero__title-highlight");

heroHighlight.addEventListener("mouseover", function () {
    this.style.color = "#FF6347"; // Tomato color
});
heroHighlight.addEventListener("mouseout", function () {
    this.style.color = "#0f0f0fff"; // Original color
});

// const dishImages = document.querySelectorAll(".dish-card__image, .menu-card__image");

// dishImages.forEach(img => {
//     img.addEventListener("mouseover", () => {
//         img.style.boxShadow = "0 0 20px rgba(255, 99, 71, 0.8)";
//         img.style.transition = "0.3s";
//     });
//     img.addEventListener("mouseout", () => {
//         img.style.boxShadow = "none";
//     });
// });

const heroSection = document.querySelector('.hero'); // or #hero

function randomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgba(${r}, ${g}, ${b}, 0.1)`;
}

setInterval(() => {
    heroSection.style.backgroundColor = randomColor();
}, 3000);

