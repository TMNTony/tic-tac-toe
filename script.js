function changeText(){
    document.querySelector("button").innerHTML = "X"
}



document.addEventListener('DOMContentLoaded', ()=>{
    document.querySelector("button").addEventListener('click', function(e){
        changeText()
    });
});