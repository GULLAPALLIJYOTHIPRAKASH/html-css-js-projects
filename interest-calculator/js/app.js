
// interest calculator()
function interest_calculator(){

        // we selected input,select,btns,containers
        let input_amount=document.querySelector("#amount");
        let input_rate=document.querySelector("#rate");
        let select_options=document.getElementById("tenure");
        let calculate_btn=document.getElementById("calculator");
        let result_container=document.querySelector(".result");
        let result_heading=document.querySelector(".small-head");
        let principal_element=document.querySelector(".principal");
        let interest_element=document.querySelector(".interest");
        let total_element=document.querySelector(".total");
        let close_btn=document.getElementById("close-btn");

        
        // added event to calculate-btn
        calculate_btn.addEventListener("click",()=>{

            // call the input_validation() function for validate the inputs
            input_validation();
        });


        function input_validation(){

            // two (number)input assigned to  variables
            let value_1=Number(input_amount.value);
            let value_2=Number(input_rate.value);


            // if no two variable are number
            if(!value_1 || !value_2){

                // give alert
                alert("Please Enter numbers");
            }

            else{

                // call the calculate() function by passing argument like inputs and dropdown option values
                calculate(value_1,value_2,select_options.value);
            }
        }


        // to check input error
        function check_input(event){

            // if user type other than numbers it will give  error (e,E, - , + ,0)
            if(event.data == 'e' || event.data == 'E' || event.data == '+' || event.data== '-' || event.target.value.startsWith('0')){


                        alert("Please Enter numbers");

                        // make that target element value is empty
                        event.target.value="";
            }

        }
    
        // added event to  1st input
        input_amount.addEventListener("input", (e)=>{


            // called to check input error
            check_input(e);

            
        })


        // added event to 2nd input
        input_rate.addEventListener("input", (e)=>{

            // called to check input error
            check_input(e)
        });


        // it will calculator user input with right data
        function calculate(p=1000,r=1,t='days'){

            // take variable with number datatype only
            let principal=Number(p);
            let rate=Number(r/100);

            // default t=days by dropdown
            let time=t;
            let interest=0;
            let total_amount=0;

            // choose formulae accordinly to dropdown selected by user
            switch(time){

                // if weeks  selected by user
                case "Weeks" :
                    
                    //  variable for one week
                    let weeks= Number(1/52);

                    // calculated total_amount with weeks formulae
                    total_amount= principal * (1 + Number(rate * weeks) );

                    // interest value in float point with 2 decimal;
                    interest= parseFloat(total_amount-principal).toFixed(2);

                    // passed value to this function to display
                    display_result(parseFloat(principal).toFixed(2), interest, parseFloat(total_amount).toFixed(2), "Week");

                break;
                
                // if months  selected by user 
                case  "Months" :
                    
                    //  variable for one month
                    let months = Number (1/12);
                    
                    //  calculated total_amount with month formulae
                    total_amount= principal * (1 + Number(rate * months) );

                    // interest value in float point with 2 decimal;
                    interest= parseFloat(total_amount-principal).toFixed(2);

                    // passed value to this function to display
                    display_result(parseFloat(principal).toFixed(2), interest, parseFloat(total_amount).toFixed(2), "Month");
                    
                break;

                // if years selected by user
                case "Years" :

                    //  variable for year 
                    let years = Number(1);

                    //  calculated total_amount with year formulae
                    total_amount= principal * (1 + Number(rate * years) );

                    // interest value in float point with 2 decimal;
                    interest= parseFloat(total_amount-principal).toFixed(2);

                    // passed value to this function to display
                    display_result(parseFloat(principal).toFixed(2), interest, parseFloat(total_amount).toFixed(2), "Year");
                    
                break;

                // default days
                default:

                    //  variable for days 
                    let days = Number (1/365);

                    //  calculated total_amount with day formulae
                    total_amount= principal * (1 + Number(rate * days) );

                    // interest value in float point with 2 decimal;
                    interest= parseFloat(total_amount-principal).toFixed(2);


                    // passed value to this function to display
                    display_result(parseFloat(principal).toFixed(2), interest, parseFloat(total_amount).toFixed(2), "Day");
            

            }


        }



        // to display result in result container
        function display_result(result_principle,result_interest,result_total,tenure){

            // if result container is not have visible class then go inside
            if(!result_container.classList.contains('visible')){

                // added the visible class to container
                result_container.classList.add('visible');

                // added the content in element;
                result_heading.textContent=`----- Per ${tenure} ------`;
                principal_element.textContent=`principal amount(💰):   ${result_principle}`;
                interest_element.textContent=`interest amount(💹):      ${result_interest} `;
                total_element.textContent=`total  amount(🤑):          ${result_total} `;

            }

        }




        // added event to close btn when result container is visble
        close_btn.addEventListener('click', ()=>{

            //  it  will go back to inputs 
            if(result_container.classList.contains('visible')){

                // remove the class visible
                result_container.classList.remove('visible');

            }
        })

}


// call the function 
interest_calculator();
