// cocktails_app() function
function cocktails_app(){
    // we selected the heading_section ,input,search_btn
    let heading_section=document.querySelector(".cocktails-heading");
    let search_input=document.getElementById("search-box");
    let search_btn=document.getElementById("search-btn");

    // we selected each respected sections 
    let cocktail_section=document.querySelector(".cocktails-section");
    let not_found_section=document.querySelector(".not-found-section");
    let instruction_section=document.querySelector(".cocktails-instruction");

    // empty array to store each article element
    let cocktails_list=[];

    // api_url ---> www.thecocktaildb.com
    const cocktail_url='https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

    // added event to search_btn
    search_btn.addEventListener("click",() =>{

        // validate the input value then fetch result.
        search_input_validation();
    });

    // added event to input when keydown
    search_input.addEventListener("keydown" ,(e) =>{
        
        // key is enter
        if(e.code === "Enter"){

            // validate the input value then fetch result. 
            search_input_validation();
        }
    })

    // function for validate the input value then fetch result.
    function search_input_validation(){

        // store input value in value;
        let value=search_input.value;

        // if value is empty or start with empty spaces
        if(!value ||  value.startsWith(" ")){

            // give alert window
            alert("Please Enter Valid Drink Name");
            // get the value from storage ,if not found then input is empty.
            search_input.value=localStorage.getItem("search-value")? localStorage.getItem("search-value"):"";
        }
        else{

            // set the storage with value
            localStorage.setItem("search-value",value.trim());
            // call the api function with perfect value.
            cocktail_api(value.trim());
            

        }
    }
    // initiall call to fecth with deafuat value
    cocktail_api();

    // localStorage value not found ,then take defualt value;
    async function cocktail_api(value =localStorage.getItem("search-value")? localStorage.getItem("search-value"):"orange"){

        // show value in input text
        search_input.value=value;

        // request the api
        let req=await fetch(`${cocktail_url}${value}`);       

        //  check if resquest is status is success
        if(req.status === 200){

                // get the respone  obj with json format 
                let resp= await req.json();

                // store the result object in array
                let result_array= resp.drinks;    

            // if result object is having some values (true)
            if(result_array){
            
                    // make empyt 
                    cocktail_section.innerHTML='';

                    // remove hide class if it contains
                    cocktail_section.classList.remove("hide");

                    // then hide this section
                    not_found_section.classList.add("hide");

                    // call function to make each article to be display in cocktail_section
                    show_cocktails(result_array);
            }
            else{

                    // else result obj is empty
                    // then make empty the  section for every result.
                    cocktail_section.innerHTML='';

                    // hide this section
                    cocktail_section.classList.add("hide");

                    // remove the hide class
                    not_found_section.classList.remove("hide");
                    // no value in input 
                    search_input.value='';

                    // set storage with empty value;
                    localStorage.setItem("search-value",'');

                }


        }
        else{

            // else request is not working then display error 
            console.error("Server is not working properly");
        }

    }


        // to display the each cocktail
        function show_cocktails(result_array){

            // get the obj from storage
            let obj=JSON.parse(localStorage.getItem("obj"))

            // if obj is true
            if(obj){

                // then hide this section
                cocktail_section.classList.add('hide');

            }

            // iterate result obj then append to cocktail section
            result_array.forEach((item) => {
                    
                // create artilce element
                let article=document.createElement("article");
                
                // push each create artilce element to  empty array list
                cocktails_list.push(article);

                // class it class and dataset drinkid
                article.classList.add("single-cocktail");
                article.dataset.drinkid=item.idDrink;
                
                // added the content to created artilce element
                article.innerHTML=`
                            <div class="img-container" id="${item.strDrink}">
                            <img src="${item.strDrinkThumb}" alt="${item.strDrink}">
                            <div class="button-icon">
                                <i class="fa-solid fa-magnifying-glass search-icon"></i>
                            </div>
                        </div>
                        <div class="cocktail-info">
                            <h3 class="title">${item.strDrink}</h3>
                        </div> 
                        `

                        // then append to cocktail section
                    cocktail_section.append(article);
            
        }); 

        // added scroll_animation to each created artilce element
        scroll_animation();
        // to get target cocktail 
        show_target_drink(result_array);
    
    }
    
    // added event to window when user scroll 
    window.addEventListener("scroll",() =>{ scroll_animation()});

    // scroll animation effect 
    function scroll_animation(){

        // take screen height and divided it and multiple it.
        let screen_height=window.innerHeight / 5*4;

        // iterate each created artilce element to its height
        cocktails_list.forEach( (card)=>{

        //to known its height 
        let card_height= card.getBoundingClientRect().top ;

        // artilce element height is less than screen height
        if(card_height < screen_height){

            // show the  artilce element
            card.classList.add("show")
        }
        else{

            // hide the artilce element
            card.classList.remove("show");
            
            
        }
    })

    }

    // function helps to find the obj from user click on each article
    function show_target_drink(result_array){

        // iterate the array list with each created article element
        cocktails_list.forEach( (item) => {

        // added event to  each created article element
        item.addEventListener("click" ,(e)=>{ 

        // get the cocktail id 
        let drink_id= `${e.currentTarget.dataset.drinkid}`;

        //scroll to top    
        window.scrollTo(0,0);

        // find it's  drink_obj
        let single_drink= result_array.find((obj) =>{

            return obj.idDrink === drink_id;
     });
     
    //update the obj to localStorage;
     update_storage(single_drink)

    });
});

    }

    //function to display the instrunction 
    function show_cocktails_instruction(single_drink){

        // true every time
        if(!instruction_section.classList.contains('show-side')){


            // hide these section
            cocktail_section.classList.add("hide");
            heading_section.classList.add("hide");
            not_found_section.classList.add("hide");

            // empty the section every time 
            instruction_section.innerHTML='';
            // then added show-side class to show
            instruction_section.classList.add("show-side");

            // created artilce element
            let article=document.createElement("article");
            // added classes and dataset drinkid
            article.classList.add("single-instruction" , "two-template-column");
            article.dataset.drinkid=single_drink.idDrink;

            // string content
            let content=`<div class="column-one">
            <div class="img-container">
            <img src="${single_drink.strDrinkThumb}" alt="${single_drink.strDrinkThumb}">
            </div>
            </div>
            <div class="column-two">
            <div class="cocktail-instruction-info">
            <h3 class="title">${single_drink.strDrink}</h3>
            <p class="cocktail-desc">${single_drink.strInstructions}</p>
            <ul class="main-cocktail-ingredients">`  

            // iterate the obj  for Ingredient
            for(let i=1; i<16; i++){

            //  only true string values
            if(single_drink["strIngredient"+i]){

            // added content
            content= content +  `<li><i class="fa-regular fa-square-check"></i>${single_drink["strIngredient"+i]}</li>`                
            }
            }

            // added content with data
            content =content + `</ul>
            <div class="button-container">
            <a href="#${single_drink.strDrink}" class="back-btn">all cocktails</a>
            </div>
            </div>
            </div>
            </article>`

            // insert the content in  created article element
            article.innerHTML=`${content}`;

            // then append to section
            instruction_section.append(article);
        }

            // function to go back to all drinks
            get_back();

    }

        // initial the localstorage with this  function
        set_storage();
        function set_storage(){

            let obj=localStorage.getItem("obj");

            if(!obj){

                obj=null;
                localStorage.setItem("obj",obj);
            }

            // call the function
            update_storage(JSON.parse(obj));
            
        }


        // update the storage  and pass obj from localstorage to instrunction function
        function update_storage(obj){

            // if obj is true 
            if(obj){

                // set the obj  in string
                localStorage.setItem('obj',JSON.stringify(obj));

                // store in variable with obj
                let drink_obj=JSON.parse(localStorage.getItem('obj'));

                // pass argument to this function
                show_cocktails_instruction(drink_obj)
            }
        }

        // functions helps to go back  to view all cocktails
        function get_back(){

            // selcted element when instrucntion is created
            let back_btn=document.querySelector(".back-btn");

            // added  event to it.
            back_btn.addEventListener("click", () =>{

                    // remove hide class 
                    cocktail_section.classList.remove("hide");
                    heading_section.classList.remove("hide");

                    // added hide class
                    not_found_section.classList.add("hide");

                    // remove show-side class
                    instruction_section.classList.remove("show-side");

                    // then localstorage  obj to null 
                    localStorage.setItem('obj',null);
                    
            } );

        }
    }

// called cocktails_app()  function
cocktails_app();