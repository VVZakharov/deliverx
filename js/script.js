var burger=document.getElementById("burger");

burger.addEventListener("click", addClass);

function addClass(){
    var menu=document.getElementById("menu");
    menu.classList.toggle("open");
    burger.classList.toggle("open");
}