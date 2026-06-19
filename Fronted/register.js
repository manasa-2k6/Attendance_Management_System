const regButton = document.getElementById("reg-button");

regButton.addEventListener("click", function(event) {
    event.preventDefault()

    const name = document.getElementById("exampleFormControlInput4").value.trim()
    const email = document.getElementById("exampleFormControlInput1").value.trim()
    const password = document.getElementById("exampleFormControlInput2").value.trim()
    const rePassword = document.getElementById("exampleFormControlInput3").value.trim()

    if (name === "" || email === "" || password === "" || rePassword === "") {
        alert("Please fill in all fields")
        return
    } 

    if (password !== rePassword) {
        alert("Passwords do not match")
        return
    }  

    const users = JSON.parse(localStorage.getItem("users")) || []
    const existingUser = users.find(function(user) {
        return user.email === email
    })

    if (existingUser) {
        alert("This email is already registered")
        return
    }

    const user = {
        name: name,
        email: email,
        password: password
    }

    users.push(user)
    localStorage.setItem("users", JSON.stringify(users))
    alert("Registration successful")
    window.location.href = "login.html"
})
