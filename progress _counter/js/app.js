function progress_counter(){

    // we selected the circles,btn,progress_bar elements 
    let cirlce=document.querySelectorAll(".circle");
    let prev_btn=document.querySelector("#prev");
    let nxt_btn=document.querySelector("#next");
    let progress_bar=document.querySelector(".progress-bar");

    // initiall value of width,count is zero
    let width=0;
    let count=0;

    // added event to nxt_btn 
    nxt_btn.addEventListener("click",move_farward);

    // move_farward function
    function move_farward(){

        // until width is 99.99 accept
        if(width < 99.99){

            // increment the width with 33.33
            width=width+33.33;

            // increment count value with one
            count=count+1;

            // added  width value to progress_bar
            progress_bar.style.width=`${width}%`;

            // added active class to each circle with count value
            cirlce[count].classList.add("active");

           
        }
    }

    // added event to prev_btn 
    prev_btn.addEventListener("click",move_backward);

    // move_backward function
    function move_backward(){

        // until width is greater than 0 not negivate value
        if(width > 0){

            // decrement the value of width
            width=width-33.33;

            // remove the active class to cirlce
            cirlce[count].classList.remove("active");

            // then   decrement the value of count 
            count=count-1;

            // added  width value to progress_bar
            progress_bar.style.width=`${width}%`;






        }
    }
}

//   progress_counter() function called
progress_counter();