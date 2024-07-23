const ImgContainerEl = document.querySelector(".container");
const btnEL = document.querySelector(".btn");

btnEL.addEventListener("click", () => {
    const randomNum = Math.floor(Math.random() * 110);
    ImgContainerEl.innerHTML = `<img src="https://picsum.photos/200/300?random=${randomNum}" alt="random image" class="img">`;
});