
        // scroll animation
        function scroll_animation(){
            // we selected all boxs
            let all_box_list=document.querySelectorAll(".box");
    
            // console.log(all_box_list);
    
            // added event to window when scroll
            window.addEventListener("scroll" , show_boxs);
    
            // show_boxs
            function show_boxs(){
    
                // window.innerHeight with 5*4 operation
                let screen_innerheight=window.innerHeight / 5 * 4;
    
                // console.log(screen_innerheight);
    
                // selected each box with foreach array method
                all_box_list.forEach((box) =>{
    
                    // get the current box top value
                    let box_top=box.getBoundingClientRect().top;
    
                    // if box_top value is less than screen height
                    if(box_top < screen_innerheight){
    
                        // added visible class to box
                        box.classList.add("visible");
                    }
                    else{
    
                        // remove visible class to box
                        box.classList.remove("visible");
                    }
                })
            }
    
        }
    
        // called the function
        scroll_animation();