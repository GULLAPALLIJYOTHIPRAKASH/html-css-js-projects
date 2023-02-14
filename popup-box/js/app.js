         
         
 //popup message scritp
         function pop_up(){

         
            //  popup_btn 
            let popup_btn=document.getElementById("popup-btn");
            // console.log(popup_btn);
    
            // close_btn
            let close_btn=document.getElementById("close-btn");
            // console.log(close_btn);
    
            // message_container
            let message_container=document.querySelector(".popup-message");
            // console.log(message_container)
    
            // popup_container
            let popup_container=document.querySelector(".popup-container")
            // console.log(popup_container)
    
            // popup_btn event
    
            popup_btn.addEventListener("click",show_message);
    
            function show_message(){
    
                popup_container.classList.add("no-show");
                message_container.classList.remove("no-show");
                document.body.style.backgroundColor="#49A6E980"
            }
    
            // close_btn event
    
            close_btn.addEventListener("click",close_message);
    
            function close_message(){
    
                message_container.classList.add("no-show");
                popup_container.classList.remove("no-show");
                document.body.style.backgroundColor="#C5E5FC"
                
                
            }
    
        }
    
        pop_up();
    