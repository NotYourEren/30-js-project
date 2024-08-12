const clock = document.getElementById("clock")

setInterval(() => {
    time = new Date().toLocaleTimeString()
    clock.innerHTML = time
}, 1000)