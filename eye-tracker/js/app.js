
// load the document and call it.
document.addEventListener("DOMContentLoaded" , eye_tracker);

// eye_tracker function
function eye_tracker(){

    // selected white circle 
    let move_cirlce = document.querySelector(".eye-circle-3");
    
    // added event to windows when mouse move
    window.addEventListener("mousemove" , (e) =>{

        // move the circle from top and left 
        // when the mouse moves inside the webpage x and y
        move_cirlce.style.top = `${Math.floor(e.clientX / 8)}px`
        move_cirlce.style.left = `${Math.floor(e.clientY / 8)}px`

    });


    // added event to windows when touch for mobile screen
    window.addEventListener("touchmove" , (e) =>{


        // move the circle from top and left 
        // when the mouse moves inside the webpage x and y
        move_cirlce.style.top = `${Math.floor(e.touches[0].clientX / 8)}px`
        move_cirlce.style.left = `${Math.floor(e.touches[0].clientY / 8)}px`

    });


}
