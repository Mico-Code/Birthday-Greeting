const cakebtn = document.getElementById("cake")
if (cakebtn) {
    cakebtn.addEventListener("click", () => {
        window.location.href = "Birthdayletter.html"
    });
}

const letterbtn = document.getElementById("letter1")
if (letterbtn) {
    letterbtn.addEventListener("click", () => {
        const link = document.createElement("a")
        link.href = "Birthday%20Letter/Letter.docx"
        link.download = "Letter.docx"
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    });
}