
// sidebar code

function sidebar(){
let hamburger=document.querySelector(".hamburger");
// console.log(hamburger);

let closebar=document.querySelector(".close-section");
// console.log(closebar);


let sidebar_container=document.querySelector(".sidebar-container");
// console.log(sidebar_container)

hamburger.addEventListener("click",show_sidebar);

function show_sidebar(){
    sidebar_container.classList.add("show-sidebar")
}

closebar.addEventListener("click",close_sidebar);

function close_sidebar(){
    sidebar_container.classList.remove("show-sidebar")
}


}

sidebar()
