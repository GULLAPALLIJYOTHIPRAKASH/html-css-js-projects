        // function filterable_app
        function filterable_app(){

            // we selected all articles and button menu
            const all_cards=document.querySelectorAll(".single-article");
            const all_btns=document.querySelectorAll(".buttons-container button");

            // called initial
            localstorage_set();

            // set localstorage initial
            function localstorage_set(){

                // get value status from storage
                let status=localStorage.getItem("status");
                
                //  execute the status to set first  storage value.  
                if(!status){

                    status ="show-all";
                    localStorage.setItem("status",status);



                }

                // update the localstorage status with show-all and apply it styles defualt first 
                update_storage(status);








            }

            // localstorage update
            function update_storage(status){

                 // called the function  to remove active class to all button;
                 remove_active_btn();

                //  set storage value status from  show_active_btn function
               localStorage.setItem("status",status);

                // get store value from localstorage into button button variable;
               let button=localStorage.getItem("status");

                //    get element button from button variable
               let element=document.querySelector("#"+button);

               // then added active class to button from localstorage
               element.classList.add("active");

                //    iterate each article 
                   all_cards.forEach((item) =>{

                        // with localstorage
                        // show only particular items when user click on particular button if match found
                        if(element.id == item.dataset.item || element.id == "show-all"){
    
                             
                            // if  match found with button id and article dataset 
                            // then remove hide class to that item 
                            item.classList.remove("hide");
    
                           
    
                        }
    
                        else{
    
                            // hide item else not match with button id and article dataset
                            item.classList.add("hide");
    
                          
                        }
                    })


            }

      
    
            //this function to remove active  class all button menu
            function remove_active_btn(){
    
                all_btns.forEach((button) =>{
    
                button.classList.remove("active")
            })
        }
    
    
            all_btns.forEach((button) =>{
    
                // add event to all button menu
                button.addEventListener("click", function show_active_btn(){
                    
                    // update storage with button id like clothes,watches;
                    update_storage(button.id);
    
                } );
            });



    
        }
    
        // called
        filterable_app();