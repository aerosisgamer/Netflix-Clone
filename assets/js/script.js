let userEmail = document.getElementById("user-email")
let inputEmail = document.getElementById("input-email")

userEmail.addEventListener("click", () => {
    inputEmail.focus()
    document.getElementById("email-label").classList.add("label-up")
})