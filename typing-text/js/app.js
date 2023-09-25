       //  typing_text
        function typing_text() {
            
        
            //  we seleted  text_element and all buttons
            const text_element =document.querySelector(".text");
            let all_btns=document.querySelectorAll("button");

            // count
           let count=1;


    
            //  text with content
            const text=`i'am gullapalli jyothi prakash,i pursued my bachelor degree in computer science with cognitive system 2023,i'am  skilled in front web developement  like HTML5, CSS3, Javascript...               `;


             // speed
            let speed =350 ;


            // to remove active class to buttons 
            function active_btn_remove(){

                all_btns.forEach((item) => {

                    item.classList.remove("active");   


                })
            }

            all_btns.forEach((item) =>{
                
                // added event to all buttons
                item.addEventListener("click", function(e){
                    
                    // remove active class to buttons
                    active_btn_remove();
                
                    // adde to one element on click
                    e.target.classList.add("active");

                    // speed value 
                    speed=350/e.target.innerText;

                })


            })

            typing_speed();

            // function
            function typing_speed(){

                // slice the text and added to text_element innerText.
                text_element.innerText=text.slice(0,count);
                
                // increment count value;
                count++;
                
                // interval to call the function every time.
                setTimeout(typing_speed, speed);
                
                
                
                // count value is greater than text lenght make count=1
                if(count > text.length){
                
                count=1;
                
                }


            }

            
            
            
            

            
    
    
        }
    
        // called 
        typing_text();