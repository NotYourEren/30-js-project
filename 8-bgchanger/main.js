const body = document.querySelector("body");
const square = document.querySelectorAll(".square");

square.forEach(function(square){
    console.log(square);
    square.addEventListener("click", function(e){
        console.log(e)
        console.log(e.target)
        if(e.target.id === "red"){
            body.style.backgroundColor = "red";
        } else if(e.target.id === "blue"){
            body.style.backgroundColor = "blue";
        } else if(e.target.id === "green"){
            body.style.backgroundColor = "green";
        } else if(e.target.id === "yellow"){
            body.style.backgroundColor = "yellow";
        }
    })
})