const contEl = document.getElementById('content');
const careers = ["web designer", "tutor", "tutor2"];

let careerIndex = 0;
let characterIndex = 0;

type();
function type() {
    characterIndex++;
    contEl.innerHTML = `<h1>hello, I'm a ${careers[careerIndex].slice(0,characterIndex)}.</h1>`;
    if(characterIndex===careers[careerIndex].length){
        careerIndex++;
        characterIndex = 0;
    };
    if(careerIndex===careers.length){
        careerIndex = 0;
    };
    setTimeout(type, 200);
}