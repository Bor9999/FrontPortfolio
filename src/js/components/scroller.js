import 'swiped-events';

const pages = document.querySelectorAll(".content-list__page");
const navbarSide = document.querySelectorAll(".side-nav__list li");
const burgerBtn = document.querySelector('[data-burger]');
const container= document.querySelector(".container");
const navbarBurgerMenu = document.querySelector(".nav-bar");
const navbarList = document.querySelector(".nav__list");
const navbarItems = document.querySelectorAll(".nav__item");

let scrollAllowing = true;
let currentPage = 0;

function setSideNav(cp,cpNext){
  navbarSide[cp].classList.remove("active");
  setTimeout(()=>{navbarSide[cpNext].classList.add("active");},500);
}
function setNav(cp,cpNext){
  navbarItems[cp].classList.remove("nav__item_active");
  navbarItems[cpNext].classList.add("nav__item_active");
}

function hidePage(page){
  page.classList.remove("content-list__page_shown");
  setTimeout(() => {
    page.classList.remove("content-list__page_active");}, 500);
}

function showPage(page){
  page.classList.add("content-list__page_active");
  setTimeout(() => {page.classList.add("content-list__page_shown");}, 10);
}

function scrollDown(){
    scrollAllowing =false;
    let cp = currentPage;
    hidePage(pages[cp]);
    setTimeout(()=>{showPage(pages[cp+1]);},501);
    setSideNav(cp,cp+1);
    setNav(cp,cp+1);
    setTimeout(()=>{scrollAllowing =true;},750);
    currentPage++;
}
function scrollUp(){
    scrollAllowing =false;
    let cp = currentPage;
    hidePage(pages[cp]);
    setTimeout(()=>{showPage(pages[cp-1]);},501);
    setSideNav(cp,cp-1);
    setNav(cp,cp-1);
    setTimeout(()=>{scrollAllowing =true;},750);
    currentPage--;
}

function scrollTo(num){
    scrollAllowing =false;
    let cp = currentPage;
    hidePage(pages[cp]);
    setTimeout(()=>{showPage(pages[num]);},501);
    setTimeout(()=>{scrollAllowing =true;},750);
    currentPage = num;
}

document.addEventListener("wheel", (e) => {
  if(e.deltaY < 0 && (scrollAllowing == true) && (currentPage!=0) && scrollAllowing){
    scrollUp();
}
 if(e.deltaY > 0 && (scrollAllowing == true) && (currentPage!=2)&& scrollAllowing){
    scrollDown();
}
});
document.addEventListener('swiped', function(e) {
  if(e.detail.dir =="down" && (scrollAllowing == true) && (currentPage!=0) && scrollAllowing){
    scrollUp();
}
 if(e.detail.dir =="up" && (scrollAllowing == true) && (currentPage!=2)&& scrollAllowing){
    scrollDown();
}
});

//  Menu


function openMenu(){
  container.classList.add("container_burger-active");
  navbarBurgerMenu.classList.add("nav-bar_active");
  scrollAllowing = false;

}
function closeMenu(){
  navbarBurgerMenu.classList.remove("nav-bar_active");
  container.classList.remove("container_burger-active");
  scrollAllowing = true;
}

function initNavBar(){
  navbarList.addEventListener("click", (e)=>{
    let item = chooseItem(e);
    setNav(currentPage,item);
    setSideNav(currentPage,item);
    scrollTo(item);
    closeMenu();
  },{once: true});
}

function chooseItem(e){
  let number;
  for (let i = 0; i < navbarItems.length; i++) {
    if(e.target == navbarItems[i]){ number = i; break;}
  }
  return number;
}

burgerBtn.addEventListener("click", (e) =>{
  openMenu();
  setTimeout( ()=>
  {
   container.addEventListener("click",(e)=>
    {
          closeMenu();
    }, {once: true});
    initNavBar();

  },400);
});

