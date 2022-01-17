let username = prompt("Who's there?")
let password

if (username == "Admin"){
    password = prompt("Password?")

    if (password == 'TheMaster'){
        alert("Welcome!")
    } else {
        alert("wrong password.")
    }
} else {
    alert("I don't know you.")    
}