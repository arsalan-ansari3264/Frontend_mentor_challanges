
function subscribtion() {
    var button = document.getElementById("submit-btn");
    var toggle = document.getElementById("main")
    var sub = document.querySelector("#main-sub")
    
    button.addEventListener("click", function () {
        toggle.style.display = "none";
        sub.style.display = "grid";

    })
}

function dismiss(){
    var btn = document.querySelector(".btn")
    var normal = document.getElementById("main")
    var inputletter = document.getElementById("email").value

    var removal = document.querySelector("#main-sub")
    btn.addEventListener("click", function () {
        normal.style.display = "grid";
        removal.style.display = "none";
        inputletter.innerHTML = ""
    })
}
function validation() {

    var form = document.getElementById("form")
    var email = document.getElementById("email").value
    var text = document.getElementById("text")
    var username = document.getElementById("username")
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (email.match(pattern)) {
        form.classList.add("valid")
        form.classList.remove("invalid")
        text.innerHTML = ""
        username.innerHTML = email
        subscribtion()

    }
    else {
        form.classList.remove("valid")
        form.classList.add("invalid")
        text.innerHTML = "Valid email required"
        text.style.color = "hsl(4, 100%, 67%)"
    }

    if (email == "") {
        form.classList.remove("valid")
        form.classList.remove("invalid")
        text.innerHTML = ""
    }
}