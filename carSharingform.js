localStorage.setItem("users", JSON.stringify([]));
let loginBtn = document.getElementById("loginBtn");
loginBtn.addEventListener("click",function(){
    let nameInput = document.getElementById("nameInput");
    let emailInput = document.getElementById("emailInput");
    let passwordInput = document.getElementById("passwordInput");
   // console.log(nameInput.value);
    loginBtn.style.backgroundColor = "black";
    let userInfo = {
        name: nameInput.value,
        email: emailInput.value,
        password: passwordInput.value
    }
    let users = JSON.parse(localStorage.getItem("users"));
    users.push(userInfo);
    localStorage.setItem("users", JSON.stringify(users));
     location.href = "carSharingformInfo.html";
});