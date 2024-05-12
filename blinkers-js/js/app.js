// blinker js function 
function blinker_js(){

// we select center div
let center = document.querySelector(".center");
// list of colors code 
let colors_list = ['#cc2020' ,'#e96209' ,'#e2f207','#07f207','#11ae9c','#4a90ec','#904aec','#d94150'];

// list of square element
let square_list = [];


// To create create square and append to center
(function create_square(){


    // iterator for 549 sqaure 
    for(let i=0 ; i< 550 ;i++){
        
        // create div element
        let square = document.createElement("div");

        // added sqaure to div
        square.classList.add('square');

        // push  each div into array 
        square_list.push(square);

        // then append  div into center 
        center.appendChild(square);
    }

    // Call to set the colors animation effect to sqaure 
    set_colors();
})()


// To set the colors animation effect
function set_colors(){

    // set the interval to farward colors
    let x= setInterval(fardward_colors, 100);

    // initial i to zero
    let i=0;

    // initial y 
    let y;
    
    // To set the colors to all sqaure with moving farward effect
    function fardward_colors(){
        
        // to stop the x interval and to set the y interval
        if(i > square_list.length-1){
            
            clearInterval(x);
            
            y=setInterval(backward_colors,100);
        }

        else{
            
            // add colors to all sqaures from farward with random colors
            square_list[i].style.background = colors_list[Math.floor(Math.random()*colors_list.length)];
            // set the each sqaure to radius with circle 
            square_list[i].style.borderRadius="50%";

            // then increment the i value
            i= i+1;
        }
    }
    
    
    // To  set the background_color animation effect
    function backward_colors(){
        
        // to stop the y interval and re-initial i with zero and set the x interval
        if(i<=0){
            
            i=0;
            clearInterval(y);
            
            x= setInterval(fardward_colors,100)
        }
        else if( i>=0){
            
            // decrement the i value
            i=i-1

            // add colors to all sqaures from backward 
            square_list[i].style.background = '#363636';
            // set the each sqaure to radius with sqaure 
            square_list[i].style.borderRadius="0%"
            
        }
    }
}

}


// call blinkers-js
blinker_js()