// guessing number function


function guessing_number(){

    // input number box
    let input_number=document.getElementById("number-input");

    // console.log(input_number)

    // guess button
    let guess_btn=document.getElementById("guess-btn");

    // console.log(guess_btn);

    // guess button event
    guess_btn.addEventListener("click",show_result);

    // title for message display
    let title_message=document.querySelector(".title");

    // console.log(title_message)

    // generate a random  number
      var random_num=Math.floor(Math.random()*1001);
    // console.log(random_num)


    // result-container defualt display none
    let result_container=document.querySelector(".result-container");

    // console.log(result_container)

    // image element
    let result_img=document.getElementById("result-img");

    // console.log(result_img)


//     let range_select=document.getElementById("range");

//     console.log(range_select);
        
        


// to display the guess  result
    function show_result(){

        // if user input is empty
        if(input_number.value==""){

            // set the title  to display the text and color
            title_message.innerText="please enter number";
            title_message.classList.add("title-color");
            result_container.classList.remove("show");



            // after the 1000 msecond it will change to defualt text and color
            setTimeout(function(){

                title_message.innerText="guessing a number";
                title_message.classList.remove("title-color");

            },1000)

        }

        
        // if guess is true then

        else if(Math.abs(input_number.value)==random_num){

            // console.log(Math.abs(input_number.value))

            // to display the result-container
            result_container.classList.add("show");
            
            
            // set the src attribute to good-job.gif
            result_img.setAttribute("src","./assets/good-job.gif");

            


        }

        // if user entered value is flase then

        else{


            // to display the result-container
            result_container.classList.add("show");

               // set the src attribute to wrong.gif
            result_img.setAttribute("src","./assets/wrong.gif");



        }
    }

}


guessing_number()