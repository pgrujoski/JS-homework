
//register function
function register() {
    const firstName = document.getElementById("firstName").value
    const lastName = document.getElementById("lastName").value
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    const confirmPassword = document.getElementById("confirmPassword").value

    if (firstName && lastName && email && password && confirmPassword) {
        if (password === confirmPassword) {
            alert("Registration successfull! \n Full name: " + firstName + " " + lastName + "\n Email: " + email)
        } else {
            alert("Passwords do not match. Please try again.")
        }
    } else {
        alert("Please fill all the fields")
    }
}

//add event listener
const registerButton = document.getElementById("registerButton")
registerButton.addEventListener("click", register)

