document.addEventListener("DOMContentLoaded", function() {
    const cakebtn = document.getElementById("cake");
    if (cakebtn) {
        cakebtn.addEventListener("click", () => {
            window.location.href = "Birthdayletter.html";
        });
    }
