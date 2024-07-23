const btnEL = document.querySelector('.btn');

btnEL.addEventListener("mouseover",(e)=>{
    const x = e.pageX - e.target.offsetLeft;
    const y = e.pageY - e.target.offsetTop;

    btnEL.style.setProperty('--x',`${x}px`);
    btnEL.style.setProperty('--y',`${y}px`);
});