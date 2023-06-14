
// sidebar  functionality
function sidebar(){


let hamburger=document.querySelector(".hamburger");
// console.log(hamburger);

let sidebar_container=document.querySelector(".sidebar-container")
// console.log(sidebar_container);

// event to hamburger
hamburger.addEventListener("click",show_sidebar);

function show_sidebar(){

    sidebar_container.classList.add("show-sidebar");
}



let close_bar=document.querySelector(".close-section");
// console.log(close_bar);

// event to close section
close_bar.addEventListener("click", close_sidebar);

function close_sidebar(){

    sidebar_container.classList.remove("show-sidebar")
}

}

sidebar();

// navbar jump functionality
function navbar_animation(){


let navbar_container=document.querySelector(".navbar-container");
// console.log(navbar_container);

// added event to window for user scrollBehavior

window.addEventListener("scroll",sticky_nav);

function sticky_nav(){

    let user_scrolling=window.scrollY;
    // console.log(user_scrolling);

    let traget_screen_value=window.innerWidth >=992 ? 70 : 50;

    if(user_scrolling>=traget_screen_value){

        navbar_container.classList.add("navbar-sticky");
    }
    else{
        navbar_container.classList.remove("navbar-sticky");
    }

}

}
navbar_animation();


// footer date

function copyright_date_year(){

let date=new Date();
// console.log(date);

// console.log(date.getFullYear());

let copyright_date=document.querySelector(".copyright-date");

// console.log(copyright_date);

copyright_date.innerText=`${date.getFullYear()+1}`

}

copyright_date_year();

