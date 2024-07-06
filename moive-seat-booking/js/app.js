  // movie_seat_booking 
  function moive_seat_booking(){
            
    //  selected required element
    let movie_dropdown = document.getElementById('moives-list');
    let movie_screen = document.querySelector(".movie-screen");
    let all_seats = document.querySelectorAll('.row-seats .seat:not(.occupied)');
    let price_info = document.querySelector(".price-info");


    // movie screen img's list
    let img_list = [
            "./assets/spider-man-4.jpg",
            "./assets/hitman-agent-47.jpg",
            "./assets/fast-furious-11.jpg",
            "./assets/rrr-movie.jpg",
            "./assets/money-heist.jpg",
            "./assets/joker-moive.jpeg" ,
            "./assets/avengers-endgame.jpg" ,
            "./assets/toy-story-4.jpeg", 
            "./assets/the-lion-king.png",
        ];
    
    // call to set storage
    set_localstorage();

    //  check  from storage return obj or Set()
    let lists = JSON.parse(localStorage.getItem("cart")).seat_lists  ? new Set(JSON.parse(localStorage.getItem("cart")).seat_lists) : new Set();

    // iterate all seats and add event to seats
    [...all_seats].forEach( (seat) => {

        // add event to each seats when click
        seat.addEventListener("click" , (e) => {

            // check with each seat classlist
            if(!e.target.classList.contains("selected")){

                // add class to seat
                e.target.classList.add('selected');

                // add  seat id to set 
                lists.add(e.target.id);
            }
            else{

                // remove class to seat 
                e.target.classList.remove('selected');

                // delete seat id from set
                lists.delete(e.target.id);

            }

            // get obj from storage
            let  storage_cart = JSON.parse(localStorage.getItem("cart"));

            // modify obj property with new seat id's
            storage_cart.seat_lists = [...lists];

            // update to storage with obj
            update_storage(storage_cart);
            
            
        })
    })


    // added event to dropdown
    movie_dropdown.addEventListener("change" , (e) =>{

         // get obj from storage
        let storage_cart  = JSON.parse(localStorage.getItem("cart"));

        // modify obj property with ticket price
        storage_cart.price = movie_dropdown.value;
        // modify obj property with img for movie screen ,when dropdown change
        storage_cart.img = movie_dropdown.selectedIndex;

         // update to storage with obj
        update_storage(storage_cart); 
        
    
        
    });

  

    // set storage obj
    function set_localstorage(){

        // get obj from storage , if availalbe
        let cart_obj =  JSON.parse(localStorage.getItem("cart"));

        // initial check only
        if(!cart_obj){

            // create obj 
            cart_obj = {

                seat_lists: [],
                price: `${movie_dropdown.value}`, 
                img: movie_dropdown.selectedIndex, 

                
            }

            // set to storage initial only
            localStorage.setItem("cart" , JSON.stringify(cart_obj));

        }

        // then update obj
        update_storage(cart_obj);
    }
    

    // update storage 
   function  update_storage( cart_obj){


    // update the storage, when modify
    localStorage.setItem('cart' , JSON.stringify(cart_obj));

    // get obj from storage
    let storage_cart = JSON.parse(localStorage.getItem("cart")) ; 

    // initial variable
    let seat ;
    
    // update dropdown value from storage
    movie_dropdown.value = storage_cart.price;

    // iterate seats from storage
    storage_cart.seat_lists.forEach( (seat_id) => {

        // get id from storage
        seat = document.getElementById(`${seat_id}`);

        // add class to seat
        seat.classList.add('selected');
    });

    // update movie screen img
    movie_screen.style.backgroundImage = `url(${img_list[storage_cart.img]})`


    // update price info with values
    price_info.innerHTML = ` You selected <span class="text-orange">${JSON.parse(localStorage.getItem("cart")).seat_lists.length }</span> seats are booked for a price of
        $<span class="text-orange">${ Number(JSON.parse(localStorage.getItem("cart")).seat_lists.length * JSON.parse(localStorage.getItem("cart")).price)}</span>`


   }

}


// calling
moive_seat_booking();