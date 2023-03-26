// random_user function
function random_user(){
        // all users elements like image,title,info,buttons
        let user_img=document.querySelector("#user-img")
        // console.log(user_img);

        let user_title=document.querySelector(".user-title");
        // console.log(user_title);

        let user_info=document.querySelector(".user-info")
        // console.log(user_info);

        let user_name_btn=document.querySelector(".user-name");
        // console.log(user_name_btn);


        let user_email_btn=document.querySelector(".user-email");
        // console.log(user_email_btn);

        let user_age_btn=document.querySelector(".user-age");
        // console.log(user_age_btn);

        let user_location_btn=document.querySelector(".user-location");
        // console.log(user_location_btn);

        let user_phone_btn=document.querySelector(".user-phone");
        // console.log(user_phone_btn);
        
        let user_password_btn=document.querySelector(".user-password");
        // console.log(user_password_btn);


        let random_user_btn=document.querySelector(".random-user-btn");
        // console.log(random_user_btn);


        // all span  users_icons
        let all_user_icons=document.querySelectorAll(".user-icons");
        // console.log(all_user_icons);

        // defualt to remove the active class to user_icons
        function remove_active(){

            // through loop to remove the active class to user_icons
            for(let i=0;i<all_user_icons.length;i++){
            
                all_user_icons[i].classList.remove("active");
            }
        }
        

        // eventlistener to whole body by onload
        document.body.onload=show_user_info();

        // eventlistener to random btn  by user click on random btn
        random_user_btn.addEventListener("click",show_user_info);


        // show_user_information

        function show_user_info(){


            // object created with XMLHttpRequest
            let xhr=new XMLHttpRequest();

            // request created
            xhr.open("GET","https://randomuser.me/api/?location=india",true);
            
            // request send
            xhr.send()

            // response back
            xhr.onload=function (){

                // calling function to remove the active class by defualt to user_icons span
                remove_active()
                
                // eventlistener to all user_icons span
                user_name_btn.addEventListener("click",show_user_name);
                user_email_btn.addEventListener("click",show_user_email);
                user_age_btn.addEventListener("click",show_user_age);
                user_location_btn.addEventListener("click",show_user_location);
                user_phone_btn.addEventListener("click",show_user_phone);
                user_password_btn.addEventListener("click",show_user_password);

                // store the response
                let result=xhr.responseText;

                // convert string to object then access  user infromation  at zero index
                result=JSON.parse(result).results[0];
                // console.log(result)

                // access the name in object
                let names=result.name;
                // console.log(names.first);

                // random user photo
                let photo=result.picture.large;

                // set src to image by random user photo
                user_img.src=`${photo}`;

                // show name and its title by defualt
                user_title.innerText=`my name is`;
                user_info.innerText=`${names.first}  ${names.last}`;

                // added active class to user_icons at zero index by defualt
                all_user_icons[0].classList.add("active");


                // *****common process*****

                //created  each user_icon function like name,email,age,location,phone,password
                // calling function to remove the active class by defualt to user_icons span
                // added active class to user_icons at  index 
                // changed user title,info to accordingly to the function

                function show_user_name(){

                    remove_active()
                    all_user_icons[0].classList.add("active")
                    user_title.innerText=`my name is`
                    user_info.innerText=`${names.first}  ${names.last}`
                }

                function show_user_email(){

                    remove_active()
                    all_user_icons[1].classList.add("active")
                    user_title.innerText=`my email is`
                    user_info.innerText=`${result.email}`
                }

                function show_user_age(){
                    
                    remove_active() 
                    all_user_icons[2].classList.add("active")
                    user_title.innerText=`my age is`
                    user_info.innerText=`${result.dob.age}years`
                }

                function show_user_location(){

                    remove_active()
                    all_user_icons[3].classList.add("active")
                    user_title.innerText=`my country is`
                    user_info.innerText=`${result.location.country}`
                }

                function show_user_phone(){

                    remove_active()   
                    all_user_icons[4].classList.add("active")
                    user_title.innerText=`my phone is`
                    user_info.innerText=`${result.cell}`
                }

                function show_user_password(){

                    remove_active() 
                    all_user_icons[5].classList.add("active")
                    user_title.innerText=`my password is`
                    user_info.innerText=`${result.login.password}`
                }


            }
        }

    }

    // calling random_user()
    random_user()