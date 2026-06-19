const loginButton = document.getElementById("login-button")

loginButton.addEventListener("click", function(event) {
    event.preventDefault()

    const email = document.getElementById("exampleFormControlInput1").value.trim()
    const password = document.getElementById("exampleFormControlInput2").value.trim()

    if (email === "" || password === "") {
        alert("Please fill in all fields")
        return
    }

    const users = JSON.parse(localStorage.getItem("users")) || []
    const matchedUser = users.find(function(user) {
        return user.email === email && user.password === password
    })

    if (matchedUser) {
        localStorage.setItem("loggedInUser", JSON.stringify(matchedUser))
        alert("Login Successful")
        window.location.href = "dashboard.html"
    } else {
        alert("Invalid email or password")
    }
})
