

    //     display all the items 

        function all_items(){
            //    let  all_menu=document.getElementById("all");
             let all_item_1=document.querySelectorAll(".breakfast_item,.dinner_item,.lunch_item,.juice_item");

            for( let i=0 ;i<all_item_1.length;i++){

               all_item_1[i].classList.remove("noshow")

            }
        }


        // display all breakfast items 
        function breakfast_items(){

            // let b_menu=document.getElementById("breakfast");

            //  used the above function to 1st remove onshow class the all class  
            all_items();

            // 2nd add noshow  class to all expect breakfast_items  
            const all_item=document.querySelectorAll(".dinner_item,.lunch_item,.juice_item");
         

            for( let i=0;i < all_item.length;i++){

               all_item[i].classList.add("noshow");
            }
        }

        
        // display all lunch items 
        function lunch_items(){

             //  used the above function to 1st remove onshow class the all class

            all_items();
            
            // let l_menu=document.getElementById("lunch");

            // 2nd add noshow  class to all expect lunch_items 
            const all_item=document.querySelectorAll(".breakfast_item,.dinner_item,.juice_item");

            for( let i=0;i<all_item.length;i++){

                      all_item[i].classList.add("noshow");

            }

        }


        // display all dinner items 
        function dinner_items(){

            //  used the above function to 1st remove onshow class the all class
           all_items();

            // let d_menu=document.getElementById("dinner");
            
            // 2nd add noshow  class to all expect dinner_items 
             const all_item=document.querySelectorAll(".breakfast_item,.lunch_item,.juice_item");
            for( let i=0;i<all_item.length;i++){

                    all_item[i].classList.add("noshow");
            }
        }


        // display all drinks items 
        function drink_items(){
            
            //  //  used the above function to 1st remove onshow class the all class
            all_items();

            // let dr_menu=document.getElementById("drink");

            // 2nd add noshow  class to all expect drink_items 
            const all_item=document.querySelectorAll(".breakfast_item,.lunch_item,.dinner_item");
            for( let i=0;i<all_item.length;i++){
                
                all_item[i].classList.add("noshow");
            }
        }



        // active class

        function acitve_class(){
        let menu_option=document.getElementsByClassName("menu-link");

        let menu_all=document.getElementById("all");
        let menu_breakfast=document.getElementById("breakfast");
        let menu_lunch=document.getElementById("lunch");
        let menu_dinner=document.getElementById("dinner");
        let menu_drinks=document.getElementById("drink");

        // console.log(menu_all)
        // console.log(menu_breakfast);
        // console.log(menu_lunch);
        // console.log(menu_dinner);
        // console.log(menu_drinks);

        menu_all.addEventListener("click",active_all_menu);
        menu_breakfast.addEventListener("click",active_breakfast_menu);
        menu_lunch.addEventListener("click",active_lunch_menu);
        menu_dinner.addEventListener("click",active_dinner_menu);
        menu_drinks.addEventListener("click",active_drinks_menu);


        function hotel_menu_nav(){
            for(let i=0;i<menu_option.length;i++){
                
                menu_option[i].classList.remove("active");
        }

    }


        function active_all_menu(){


            hotel_menu_nav();
            
            // active  the menu_all
            menu_option[0].classList.add("active")
                


            }


function active_breakfast_menu(){


hotel_menu_nav();

// active  the menu_all
menu_option[1].classList.add("active")
    


}


function active_lunch_menu(){


hotel_menu_nav();

// active  the menu_all
menu_option[2].classList.add("active")
    


}

function active_dinner_menu(){


hotel_menu_nav();

// active  the menu_all
menu_option[3].classList.add("active")
    


}


function active_drinks_menu(){


hotel_menu_nav();

// active  the menu_all
menu_option[4].classList.add("active")
    


}
        
}
        

// call the active_class function
    

acitve_class();



        



       





        





















          


      


      







  