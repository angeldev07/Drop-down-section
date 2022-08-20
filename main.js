// nav 
const navMenu = document.querySelector(".container")
// Item list
const itemsDrop = [...document.querySelectorAll(".drop")]
// Drop list
const dropDowmMenu = [...document.querySelectorAll(".inside-list")]
// Close icon
const closeI = document.querySelector(".close")
// Menu icon
const menu = document.querySelector(".hamburguer")
//arrows
const arrows = [...document.querySelectorAll(".arrow")]

menu.addEventListener("click", ()=>{
    navMenu.classList.add("show")
    menu.style.display = "none";
    closeI.classList.add("showCancel")
})

closeI.addEventListener("click", ()=>{
    navMenu.classList.remove("show")
    menu.style.display = "block";
    closeI.classList.remove("showCancel")
} )

itemsDrop.forEach((item,i) => {
    itemsDrop[i].addEventListener("click", ()=>{
        dropDowmMenu[i].classList.toggle("showDrop")
        arrows[i].classList.toggle("rotate")
    })
})

window.addEventListener("click", (e)=>{
    console.log(e.target);
})