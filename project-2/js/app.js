// sidebar

function siderbar(){

let sidebar_container=document.querySelector(".sidebar-container")

let hamburger=document.querySelector(".hamburger");
// console.log(hamburger);

// home
let sidebar_home=document.querySelector(".close-home");

//about
let sidebar_about=document.querySelector(".close-about");

// packages
let sidebar_packages=document.querySelector(".close-packages");

//booking
let sidebar_booking=document.querySelector(".close-booking");


let close_bar=document.querySelector(".close-bar");

hamburger.addEventListener("click",show_sidebar);
close_bar.addEventListener("click",no_show);

// sidebar
sidebar_home.addEventListener("click",no_show);
sidebar_about.addEventListener("click",no_show);
sidebar_packages.addEventListener("click",no_show);
sidebar_booking.addEventListener("click",no_show);




function show_sidebar(){

    sidebar_container.classList.add("show-sidebar");
}

function no_show(){

    sidebar_container.classList.remove("show-sidebar");
    
    
    

}



}

siderbar();


// navbar sticky

function sticky_nav(){

let navbar_container=document.querySelector(".navbar-container");
// console.log(navbar_container)

window.addEventListener("scroll",sticky_navbar);

function sticky_navbar(){

    let scroll_Y=window.scrollY;
    // console.log(scroll_Y)

    let total_screen_num=window.innerWidth >= 992 ? 70 : 50  ;
    

    if(scroll_Y>=total_screen_num){
        navbar_container.classList.add("navbar-sticky")
    }

    else{

        navbar_container.classList.remove("navbar-sticky")
    }


}}

sticky_nav();

// copyright date

( function (){
    let copyright_date=document.querySelector(".copyright-date");
    
    let date =new Date();

    copyright_date.innerHTML=date.getFullYear();

    
    
})();



// active navbar

function nav_links_activer(){

const nav_links=document.querySelectorAll(".nav-link,.sidebar-link,.footer-link");
// console.log(nav_links);

// navbar,sidebar,footer event for home
nav_links[0].addEventListener("click",active_home);
nav_links[4].addEventListener("click",active_home);
nav_links[8].addEventListener("click",active_home);

// navbar,sidebar,footer event for about
nav_links[1].addEventListener("click",active_about);
nav_links[5].addEventListener("click",active_about);
nav_links[9].addEventListener("click",active_about);

// navbar,sidebar,footer event for  packages
nav_links[2].addEventListener("click",active_packages);
nav_links[6].addEventListener("click",active_packages);
nav_links[10].addEventListener("click",active_packages);

// navbar,sidebar,footer event for booking
nav_links[3].addEventListener("click",active_booking);
nav_links[7].addEventListener("click",active_booking);
nav_links[11].addEventListener("click",active_booking);



//  loop iteration 
function nav_array(){

    for(let i=0; i<nav_links.length;i++){

        nav_links[i].classList.remove("active");

    }


}

function active_home(){

 

    nav_array();

    nav_links[0].classList.add("active");
    nav_links[4].classList.add("active");
    nav_links[8].classList.add("active");


   

}


function active_about(){

    nav_array();
    
        nav_links[1].classList.add("active");
        nav_links[5].classList.add("active");
        nav_links[9].classList.add("active");
    
       
    
}

    function active_packages(){



        nav_array();
        
        nav_links[2].classList.add("active");
        nav_links[6].classList.add("active");
        nav_links[10].classList.add("active");
    
        
        }

        function active_booking(){

            nav_array();
               nav_links[3].classList.add("active");
               nav_links[7].classList.add("active");
               nav_links[11].classList.add("active");
            
               
            }
            
            
        }
        
        nav_links_activer();

    

// scroll up activer

function scroll_up_activer(){

const nav_links=document.querySelectorAll(".nav-link,.sidebar-link,.footer-link");
// console.log(nav_links);

window.addEventListener("scroll",show_active_scroll_up);

function show_active_scroll_up(){

    let scrolly=window.scrollY;

    // console.log(scrolly)

    let total_screen_num=window.innerWidth


    //  loop iteration 
function nav_array(){

    for(let i=0; i<nav_links.length;i++){

        nav_links[i].classList.remove("active");

    }


}

//  only for  desktop above

    if( total_screen_num >=992){

        
        // active home in navbar, sidebar ,footer 
    
    if( scrolly>=0){

        //  loop iteration 


          nav_array();

          nav_links[0].classList.add("active");
          nav_links[4].classList.add("active");
          nav_links[8].classList.add("active");

          
      

    }


    // active about in navbar, sidebar ,footer 
    
    if( scrolly>=388.18182373046875){

        //  loop iteration 


          nav_array();
          nav_links[1].classList.add("active");
          nav_links[5].classList.add("active");
          nav_links[9].classList.add("active");


          
      

    }


        // active packages in navbar, sidebar ,footer 
    
        if( scrolly>=989.0908813476562){

            //  loop iteration 
    
    
              nav_array();
              nav_links[2].classList.add("active");
              nav_links[6].classList.add("active");
              nav_links[10].classList.add("active");
    
    
              
          
    
        }


        // active booking in navbar, sidebar ,footer 

        if( scrolly>=2070){

            //  loop iteration 
    
    
                nav_array();
                nav_links[3].classList.add("active");
                nav_links[7].classList.add("active");
                nav_links[11].classList.add("active");

    
    
                
            
    
        }


}

}
}

scroll_up_activer();


// booking form 

// adding js ,not to go back date

function no_back_date_booking(){


let date_input=document.getElementById("date");

// console.log(date_input)

date_input.addEventListener("click",no_back_date);


let date=new Date();

let full_year=date.getFullYear();

let date_=date.getDate();

let month_=date.getMonth()+1;






function no_back_date(){


    if(date_ < 10){

        date_="0"+date_.toString();
    
        
    }

    if(month_< 10){
        
        month_="0"+month_.toString();
    }


    let full_date=full_year+"-"+month_+"-"+date_

    // console.log(full_date)


    date_input.setAttribute("min",full_date)


    




}




}


no_back_date_booking()






