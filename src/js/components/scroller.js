import 'swiped-events';



let pages = document.querySelectorAll(".content-list__page");
let navbar = document.querySelectorAll(".side-nav__list li");
let scrollAllowing = true;
let currentPage = 0;



// function sleep(ms) {
//   return new Promise(resolve => setTimeout(resolve, ms));
// }
function setNav(cp,cpNext){
  navbar[cp].classList.remove("active");
  setTimeout(()=>{navbar[cpNext].classList.add("active");},500);
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
// sleep(2000).then(() => { console.log("мир"); });

function scrollDown(){
  scrollAllowing =false;
    let cp = currentPage;
    hidePage(pages[cp]);
    setTimeout(()=>{showPage(pages[cp+1]);},501);
    setNav(cp,cp+1);
    setTimeout(()=>{scrollAllowing =true;},750);
    currentPage++;
}
function scrollUp(){
    scrollAllowing =false;
    let cp = currentPage;
    hidePage(pages[cp]);
    setTimeout(()=>{showPage(pages[cp-1]);},501);
    setNav(cp,cp-1);
    setTimeout(()=>{scrollAllowing =true;},750);
    currentPage--;
}
document.addEventListener("wheel", (e) => {
 e.preventDefault();
  if(e.deltaY < 0 && scrollAllowing && (currentPage!=0) && scrollAllowing){
    scrollUp();
}
 if(e.deltaY > 0 && scrollAllowing && (currentPage!=1)&& scrollAllowing){
    scrollDown();
}
});
document.addEventListener('swiped', function(e) {
  if(e.detail.dir =="down" && scrollAllowing && (currentPage!=0) && scrollAllowing){
    scrollUp();
}
 if(e.detail.dir =="up" && scrollAllowing && (currentPage!=1)&& scrollAllowing){
    scrollDown();
}
});


