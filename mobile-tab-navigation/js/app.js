// mobile_navigation_tab() function
 function mobile_navigation_tab(){

// we selected list of elements , title like home, work, blog, about and also their icons
let title=document.querySelectorAll(".nav-link  h3");
let icon_list=document.querySelectorAll(".nav-link  i");

// we selected the img 
let img=document.querySelector(".img-container img");


// console.log(icon_list);
// console.log(title);
// console.log(img);

//remove_active_class function to remove the active class of their  parent element
function remove_active_class(){

    // each item to remove the active class of their  parent element 
   title.forEach(item => {

        item.parentElement.classList.remove("active");

    }) 

    
}

// to add eventlistener to each  element with forEach array method 

// this is for title like home, work, blog, about
title.forEach(item => {

    item.addEventListener("click", show_img);

});

 // this is for titles icons 
icon_list.forEach(item => {

item.addEventListener("click", show_img);

});


// to show display img  show_img function
function show_img(e){

    // to check if event.target.id is equall  for icons and title
    if(e.target.id == "home" || e.target.id == "home-title"){

        // we call the function to remove active class to parentElement
        remove_active_class();

        // added particular to img-container img 
        img.src= "./assets/home.jpg";

        // added active  class to click element only
        e.target.parentElement.classList.add("active");
    }

    // to check if event.target.id is equall  for icons and title
    else if(e.target.id == "work" || e.target.id == "work-title"){

    // we call the function to remove active class to parentElement
    remove_active_class();

    // added particular to img-container img 
    img.src= "./assets/work.jpg";

    // added active  class to click element only
    e.target.parentElement.classList.add("active");
    }

    // to check if event.target.id is equall  for icons and title
    else if(e.target.id == "blog" || e.target.id == "blog-title"){

    // we call the function to remove active class to parentElement
    remove_active_class();

    // added particular to img-container img 
    img.src= "./assets/blog.jpg";

    // added active  class to click element only
    e.target.parentElement.classList.add("active");
    }

    // to check if event.target.id is equall  for icons and title
    else if(e.target.id == "about" || e.target.id == "about-title"){

    // we call the function to remove active class to parentElement
    remove_active_class();

    // added particular to img-container img 
    img.src= "./assets/about.jpg";


    // added active  class to click element only
    e.target.parentElement.classList.add("active");
    }
}

}

// we call the  mobile_navigation_tab() function
mobile_navigation_tab();