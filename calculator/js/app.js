

// calculator  function 
function calculator(){
//  bring all buttons
    let all_buttons=document.getElementsByTagName("button");

    // console.log(all_buttons);

    // original value in the html
    let calculated_result=document.getElementById("calculator-result");

    // console.log(calculated_result);


    //  adding events to all button   with loop
    for(let i=0;i<all_buttons.length;i++){


        // event adding
        all_buttons[i].onclick= function (){

            // here take the button innerText example button 1 is 1
            let input=this.innerText;

            // console.log(input)

            // call the function with parameter as button innerText
          update_display(input);
        }
    }


    // all operation related to calculator

    function update_display(input){


        //  storing the current result in the innerText in the html #calculator-result
       let current_result=calculated_result.innerText;


    //    before the 1st digit, current  result =0
       if(current_result=="0"){

    //   before the 1st digit ,if it is not C ,Del ,=
        if(input!="C"&&input!="Del"&&input!="="){

            // add to original result
            calculated_result.innerText="";
            calculated_result.innerText=input;
        }
       }


        // from the 2nd digit onwards ,this goes inside
       else{


        // if it is del then remove the digit from last digit onward

        if(input=="Del"){
            calculated_result.innerText=current_result.substring(0,current_result.length-1);

            // console.log(calculated_result)

            // if we press the del continuously then remove the digits and make  it zero
            if(calculated_result.innerText==""){
                calculated_result.innerText="0"
            }
        }


        // if  it is C then clear and make it as zero in the original result
        if(input=="C"){
            calculated_result.innerText="0"
        }

        // if it is not C ,Del ,=  and then add the 2nd digit onwards
        if(input!="C"&&input!="Del"&&input!="="){

            calculated_result.innerText+=input
        }

        // to get the result ,after whole operation 
        if(input=="="){

            let output=calculated_result.innerText;

            // eval() method will calculate the result and the original result
            calculated_result.innerText=eval(output)
        }
       }
    }

}


calculator()