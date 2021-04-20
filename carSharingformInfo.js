let back = () =>{
    location.href = "index.html";
}
let backBtn = document.getElementById("backBtn");
backBtn.addEventListener("click",back);
let users = JSON.parse(localStorage.getItem("users"));
console.log(users);
let usersBlock = $("#users");
for(let i = 0; i < users.length; i++){
    usersBlock.append(`
        <div class = "user_card">
            <p class = "name"><b>Name:</b>  ${users[i]['name']}</p>
            <p class = "email"><b>Email:</b>  ${users[i]['email']}</p>
            <p class = "password"> <b>Password:</b> ${users[i]['password']}</p>
        </div>
    `);
}