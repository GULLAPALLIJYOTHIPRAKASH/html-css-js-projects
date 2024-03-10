function form_validation_js(){

    // selected all form elements
    let signup_form =document.getElementById('signup-form');
    let input_name = document.getElementById("user-name")
    let input_email = document.getElementById("email")
    let input_password = document.getElementById("password")
    let input_cpassword = document.getElementById("cpassword")
    let input_checkbox = document.getElementById("terms")
    let submit_btn = document.getElementById("submit-btn")


    // all form elements value variable
    let input_name_value  ;
    let input_email_value ;
    let input_password_value ;
    let input_cpassword_value ; 
    let input_checkbox_value  ;

    // checking vaild form input
    let is_valid_name = false;
    let is_valid_email = false;
    let is_valid_password = false;
    let is_valid_cpassword = false;
    let is_valid_checkbox = false;



    // added event to input_name to check the validation  while typing
    input_name.addEventListener('input' , (e) =>{

        user_name_validate(e.target.value.trim());

    })

    
    // added event to input_email to check the validation while typing
    input_email.addEventListener('input' , (e) =>{

        user_email_validate(e.target.value.trim());
    
    });

    // added event to input_password to check the validation  while typing
    input_password.addEventListener('input' , (e) =>{

        user_password_validate(e.target.value.trim());

       
    });

    // added event to input_cpassword to check the validation while typing
    input_cpassword.addEventListener('input' , (e) =>{

        user_cpassword_validate(e.target.value.trim(),e.target.parentElement.previousElementSibling.children[1].value);

    });


    // added event to input_cpassword to check the validation  when checked
    input_checkbox.addEventListener('input' , (e) =>{

        user_checkbox_validate(e.target.checked);
        
    });


    // added event to form element to check the validation 
    signup_form.addEventListener("submit" , (e) =>{

        // it prevent from submit ,until it validate the form each input element
        e.preventDefault();

        // call function to validate each input
        form_validation();
    })


    // validate form inputs 
    function form_validation(){


    // store each input values in their variables 
    input_name_value = input_name.value.trim();
    input_email_value = input_email.value.trim();
    input_password_value = input_password.value.trim();
    input_cpassword_value = input_cpassword.value.trim();
    input_checkbox_value =input_checkbox.checked;

    // call each input element function to validate
    user_name_validate(input_name_value);
    user_email_validate(input_email_value);

    user_password_validate(input_password_value);
    user_cpassword_validate(input_password_value,input_cpassword_value);

    user_checkbox_validate(input_checkbox_value);
        

    // if all input element is true with values
    if(is_valid_name === true && is_valid_email === true && is_valid_password === true && is_valid_cpassword === true && is_valid_checkbox === true ){

        // give the alert 
        alert('The form was submitted successfully.');

        // then empty the input
        input_name.value='';            
        input_email.value='';
        input_password.value='';
        input_cpassword.value='';
        input_checkbox.checked =false;

        // also to remove the class added before it submit.
        input_name.parentElement.classList.remove('success');
        input_email.parentElement.classList.remove('success');
        input_password.parentElement.classList.remove('success');
        input_cpassword.parentElement.classList.remove('success');
        input_checkbox.parentElement.classList.remove('success');   
        
    }
      
    }


    // it will show error 
    function setError(input , info){

        // selected the input parent element
        let parent_field = input.parentElement;

        // using parent element field ,selected the small to show error message
        let small =parent_field.querySelector('small');

        // added error message 
        small.textContent = `${info}`;

        // added error border to parent element input
        parent_field.classList.add('error');
        // remove success border to parent element input
        parent_field.classList.remove('success');


    }


    // it will show success
    function setSuccess(input ){

        // selected the input parent element
        let parent_field = input.parentElement;

        // added success border to parent element input
        parent_field.classList.add('success');

        // remove error border to parent element input
        parent_field.classList.remove('error');


    }


    // to validate user_name input
    function user_name_validate(input_name_value){
    
        // check input will not empty
        if(input_name_value === ""){

            // call the setError function with element and message
            setError(input_name , `Name can't be empty`);

            // set valid name is false
            is_valid_name = false;
        }

        // check if name should be 3 or more letter
        else if(input_name_value.length <= 3){

            // call the setError function with element and message
            setError(input_name , `Name sholud be more than 3 characters  `);

            // set valid name is false
            is_valid_name = false;
        }

        else{

            // call the setSuccess function with element 
            setSuccess(input_name);

            // set valid name is true
            is_valid_name = true;
        }

    }

    // to validate email input
    function user_email_validate(input_email_value){

            // check input will not empty
            if(input_email_value === ""){

                // call the setError function with element and message
                setError(input_email , `Email can't be empty`);

                // set valid email is false
                is_valid_email = false;
            }

            // check email is valid
            else if(!email_check(input_email_value)){

                // call the setError function with element and message
                setError(input_email , `Invalid email id`);

                // set valid email is false
                is_valid_email = false;

            }

            else{


                // call the setSuccess function with element 
                setSuccess(input_email);

                // set valid email is true
                is_valid_email = true;
            }
    }
    

    // to check email with
    function email_check(email_value){

        // email regular expression
        let email_regex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;


        // test with email regex with email input
        let test = email_regex.test(email_value);

        return test;


    }
    
    //  it will validate password
    function user_password_validate(input_password_value){
    
           
        // check input will not empty
        if(input_password_value === ""){

            // call the setError function with element and message
            setError(input_password , `Password can't be empty`);

            // set valid password is  false
            is_valid_password = false;
    
        }

        // check input value will more than 8 letter
        else if(input_password_value.length <= 8){

            // call the setError function with element and message
            setError(input_password ,'Password should be more than 8 character');

            // set valid password is  false
            is_valid_password = false;
    
        }

        
        else{

            //  call the setSuccess function with element
            setSuccess(input_password);

            
            // set valid password is  true
            is_valid_password = true;
    
        }

    }

    //  it will validate confirm password
    function user_cpassword_validate(input_cpassword_value ,input_password_value){

        // confirm password
        if(input_cpassword_value === ""){


            setError(input_cpassword , `Confirm password can't be empty`);

           
             is_valid_cpassword = false;
        }

        else if(input_cpassword_value.length <= 8){

            setError(input_cpassword ,'Password should be more than 8 character');

  
            is_valid_cpassword = false;

        }

        // check  password and cpassword is same or not
        else if(input_cpassword_value !== input_password_value ){

            setError(input_cpassword ,'Confirm password not matched')

            is_valid_password = false;
            is_valid_cpassword = false;
        }
        else{

            setSuccess(input_cpassword);

            is_valid_cpassword = true;
        }
    }

    // to validate the checkbox
    function user_checkbox_validate(input_checkbox_value){

        // check  checkbox  value 
        if(input_checkbox_value === false){

            setError(input_checkbox , 'Accept the user polices');

            is_valid_checkbox = false;

            


        }
        else{

            setSuccess(input_checkbox);

            is_valid_checkbox = true;

            
        }

    }




    }


    // call form validate function
    form_validation_js();