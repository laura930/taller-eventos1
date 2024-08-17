document.addEventListener("DOMContentLoaded", function () {

let selectDiv= document.getElementById("div")

selectDiv.addEventListener("click", function(){
    alert('Hola, Soy el div');
})

let btn=document.getElementById("btn")
btn.addEventListener("click", function(e){
    e.stopPropagation();
})

});

/* function saludoDiv(){
alert('Hola, Soy el div')
} */
  


