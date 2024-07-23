const bodyel = document.querySelector('body');

bodyel.addEventListener("mousemove", (event)=> {
  const xpos = event.offsetX;
  const ypos = event.offsetY;
  const size = Math.random() * 100;  

  const spanEl = document.createElement('span');
  
  spanEl.style.left = xpos + 'px';
  spanEl.style.top = ypos + 'px';
  spanEl.style.width = size + 'px';
  spanEl.style.height = size + 'px';
  bodyel.appendChild(spanEl);
  
  setTimeout(() => {
    spanEl.remove();
  }, 2000);
});