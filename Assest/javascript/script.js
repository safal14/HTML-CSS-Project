//  alert("Hello from JavaScript!");
const buttons = document.getElementsByClassName("menu-card__button");

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        alert("Order placed");
    });
}
