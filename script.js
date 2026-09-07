const messageButton = document.getElementById("messageButton");
const message = document.getElementById("message");

let isMessageVisible = false;

messageButton.addEventListener("click", function () {

    if (!isMessageVisible) {

        message.textContent =
            "Hello! Thank you for taking the time to visit my introduction webpage.";

        messageButton.textContent = "Hide Message";

        isMessageVisible = true;

    } else {

        message.textContent = "";

        messageButton.textContent = "Say Hello";

        isMessageVisible = false;
    }

});