const burger = document.querySelector('[data-burger]');
const cont = document.querySelector(".container");


console.log(cont);
console.log("111");

function openMenu(){
  cont.classList.add("container_burger-active");
}
function closeMenu(){
  cont.classList.remove("container_burger-active");
}

burger.addEventListener("click", (e) =>{
  openMenu();
});


