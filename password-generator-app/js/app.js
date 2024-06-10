
// password_generator function
function password_generator(){

    // selected all  required elements
    let text_input = document.getElementById("passcode");
    let generate_btn = document.getElementById("generate-btn");
    let copy_btn = document.querySelector('.copy-icon');
    let drop_down = document.getElementById("drop_down_length");

    // password_pattern
    let password_pattern = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~!@#$%^&*()_-+=[]{}}.<>?`;

    // check the localstorage then get lenght
    let len = JSON.parse(localStorage.getItem("password-info")) ? JSON.parse(localStorage.getItem("password-info")).length : drop_down.value ;

    // added event to drop_down 
    drop_down.addEventListener("change" , () => {

        // get obj from localstorage
        let obj  = JSON.parse(localStorage.getItem("password-info"));

        // modify obj property
        obj.length = drop_down.value;

        // call to update the localstorage
        update_storage(obj);

    })

    // added event to btn
    generate_btn.addEventListener("click" , generator);

    // To generate password_patterns
    function generator(){
        
        // initial pwd
        let password= ''
        
        // get length of pwd from localstorage
        len = JSON.parse(localStorage.getItem('password-info')).length;

        // iterate loop until len
        for(let i = 0 ; i< len ; i++){

            // added every password_pattern from string
            password += password_pattern[Math.floor(Math.random() * password_pattern.length)]

        }

        // get obj from localstorage
        let obj = JSON.parse(localStorage.getItem("password-info"));

        // modify obj property
        obj.password = `${password}`;
        
        // call to update the localstorage
        update_storage(obj)

    }

    // added event to copy_btn with asynchronizes
    copy_btn.addEventListener("click" , async (e) => {

        // error checnking
        try{

            // input value is not value
            if(text_input.value != ""){

            // get value  from input value
            let code = text_input.value

            // get the result copy pwd to clipboard
            await  navigator.clipboard.writeText(`${code}`)

            // get alert
            alert("Password Copied Successfully ....!")

         
            }

        else{

            // get alert  if pwd is not generated
            alert("Click On Generate Button....!")

            }

        }

        catch(err){


            // get alert if copied is not allowed
            alert("Copied Failed ...!")
        }

    })


    // set localstorage
    set_storage();

    // set localstorage
    function set_storage(){


        // get obj from localstorage
        let obj = JSON.parse(localStorage.getItem("password-info"));

        // check 1st time obj available
        if(!obj){

            // create obj with properties
            obj = {

                password:"",
                length: `${len}`,

            }

            // set localstorage  with stringify obj
            localStorage.setItem('password-info' , JSON.stringify(obj));

        }




        // call to update localstorage.
        update_storage(obj);

    }


    // update localstorage
    function update_storage(obj){

        // update the localstorage for every new updates
        localStorage.setItem('password-info' , JSON.stringify(obj));

        // then added value in input value from localstorage
        drop_down.value = JSON.parse(localStorage.getItem("password-info")).length;
        text_input.value = JSON.parse(localStorage.getItem("password-info")).password;
    }

    


    }
// called
password_generator()