const paragrafos = document.querySelector('.container');
const ps = paragrafos.querySelectorAll('p');
const estiloBody = getComputedStyle(document.body);
const backgroundBody = estiloBody.backgroundColor;

for (p of ps){
    p.style.backgroundColor = backgroundBody
    p.style.padding = '30px';
    p.style.borderRadius = "90px";
    p.style.color = '#fff';
}


