document.addEventListener('DOMContentLoaded', ()=>{

const btn = document.querySelectorAll("button");

 btn.forEach(button => {
    button.addEventListener('click', () => {
    button.innerHTML = "X"
    })})
})