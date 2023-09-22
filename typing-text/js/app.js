       //  typing_text
        function typing_text() {
            
        
            //  we seleted  text h1 tag, input
            const text_element =document.querySelector(".text");
            const input=document.querySelector("#speed-counter");
    
            //  text with content
            const text=`i'am gullapalli jyothi prakash,i pursued my bachelor degree in computer science with cognitive system 2023,i'am  skilled in front web developement  like HTML5, CSS3, Javascript...               `;
    
            // speed ,initial speed is 350
            let speed =350/input.value;
    
            // initial count is one
            let count=1;
    
            // added to event when dom laod to call typing_speed function
            document.addEventListener("DOMContentLoaded", typing_speed);
    
            // added to input when value is change
            input.addEventListener("input", (e) => { speed =350/ e. target.value} );
    
            // function
            function typing_speed(e){
    
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
    
    
    
                //  if input.value is increased to more than 10 then make input.value to 10
                if(input.value > 10){
                    
                    input.value=10;
                }
                //  if input.value is increased to less than 1 then make input.value to 1
                else if(input.value <1){
    
                    input.value=1;
                }
                // if  input.value is empty then make input.value to 1;
                else if(input.value == ""){
                    
                    input.value=1;
                }
    
            }
    
        }
    
        // called 
        typing_text();