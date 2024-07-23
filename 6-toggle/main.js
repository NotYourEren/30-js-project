const inputEl = document.querySelector(".input")
const bodyEl = document.querySelector("body")

inputEl.checked  = JSON.parse(localStorage.getItem("mode"));
updatebodybg()

function updatebodybg() {
    if (inputEl.checked) {
        bodyEl.style.backgroundColor = "black";
    } else {
        bodyEl.style.backgroundColor = "white"; 
    }
}

inputEl.addEventListener("input", ()=> {
    updatebodybg();
    updatetolocalstorage();
});

function updatetolocalstorage() {
    localStorage.setItem("mode", JSON.stringify(inputEl.checked));
}