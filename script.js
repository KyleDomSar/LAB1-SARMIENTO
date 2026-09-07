const messageButton = document.getElementById("messageButton");
const message = document.getElementById("message");

messageButton.addEventListener("click", function () {
    message.textContent = "Thank you for visiting my introduction webpage!";
});