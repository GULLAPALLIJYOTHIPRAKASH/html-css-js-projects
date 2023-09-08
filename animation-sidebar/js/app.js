function animation_sidebar(){

    // we selecte hamburger, close_btn ,boxs (black,red ,white) elements
        let hamburger=document.querySelector(".hamburger");

        let close_btn=document.querySelector(".close-icon");

        let boxs=document.querySelectorAll(".box");

        // added event to hamburger
        hamburger.addEventListener("click", show_sidebar);

        
        function show_sidebar(){

            // add class to all boxboxs (black,red ,white) elements

            boxs.forEach((item) => {

                item.classList.add("visible");
                
            });
        }

        // added event to close_btn
        close_btn.addEventListener("click", close_sidebar);

        function close_sidebar(){

            // remove the class to boxs (black,red ,white) elements
            boxs.forEach((item) =>{

                item.classList.remove("visible");
            })
        }

    }

    animation_sidebar();