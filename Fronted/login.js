const loginButton=document.getElementById("login-button")

loginButton.addEventListener("click", function(event) {
    event.preventDefault()
    const email=document.getElementById("email").value
    const password=document.getElementById("password").value
    if(email === "" || password === "") {
        alert("Please fill in all fields")
        return
    }
   const users = JSON.parse(localStorage.getItem("users")) || []
   const matchedUser=users.find(function(user){
    return user.email === email && user.password === password
   })
   if (matchedUser){
    alert("Login Successful")
    window.location.href="index.html"
   }
   else{
    alert("Invalid email or password")
   }
})