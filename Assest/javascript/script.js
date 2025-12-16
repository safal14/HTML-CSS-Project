//  alert("Hello from JavaScript!");
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
