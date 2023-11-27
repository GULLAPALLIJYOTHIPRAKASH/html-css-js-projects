
function recipe_making_app(){
// we selected the input and search-icon
let search_input=document.getElementById("recipe-input");
let search_btn=document.getElementById("search-btn");

// we selected the  section ,heading
let food_section=document.querySelector(".recipe-making-section");
let no_result=document.querySelector(".no-result");
let heading_section=document.querySelector(".heading-section");

// we selected the container , section ,youtube_btn
let recipe_container=document.querySelector(".recipe-making-container");
let recipe_instruction_section=document.querySelector(".recipe-instruction-section");
let youtube_btn=document.querySelector(".youtube-btn");

// api URL ---> www.themealdb.com 
let api_url=`https://www.themealdb.com/api/json/v1/1/search.php?s=`;

// empty list to store article of 1st section  child elements
let article_ele_list=[];

// called the api when page load.
food_api()

//  input validation function 
function search_input_validation(){

    // store input value
    let value=search_input.value;

    // not start with empty 
    if(!value || value.startsWith(" ")){

        // give alert
        window.alert("Please Enter Valid Food Item");

        // then make input value to empty
        // or with localstorage value display in text input a value
        search_input.value=localStorage.getItem("search-value")? localStorage.getItem("search-value") : '';


    }


    else{

        // input value is true then call api function
        localStorage.setItem("search-value",value.trim());
       food_api(value.trim());


    }
}


// added event to search_btn when click 
search_btn.addEventListener("click", () => {

    // then validate the input value then call api function
     search_input_validation();
})

// added event  when  user click on enter key 
search_input.addEventListener("keydown" ,(e) =>{

    // match with code
    if(e.code === "Enter"){
          
        // then validate the input value then call api function
        search_input_validation();
    }
})


/*food api function with default value is chicken ,
to show the value related recipe item when page load*/
async function food_api(value=localStorage.getItem('search-value') ? localStorage.getItem("search-value"):"chicken"){

    search_input.value=value
    // request the api
    let req= await fetch(api_url+value);

    // get the respone  obj with json format 
    let resp=await req.json();

    // store the result object in array
    let result_list=resp.meals;


    //  check if resquest is status is success
    if(req.status === 200){

        // if result object is having some values (true)
        if(result_list){

        // then make empty the  1st section for every result.
        food_section.innerHTML="";

        // remove hide class to 1st section 
        food_section.classList.remove("hide");
        // added hide class to 2nd section when result found
        no_result.classList.add("hide");

        // call function to make each article to be display in 1st section
        show_food_items(result_list);


        }

        else{
            // else result obj is empty
            
            // then make empty the  1st section for every result.
            food_section.innerHTML="";

            // hide the 1st section when result obj is empty value
            food_section.classList.add("hide");

            // visible the 2nd section
            no_result.classList.remove("hide");
        }

    }

    else{


        // else request is not working then display error 
        console.error("server is not working properly")


    }

}


// to make 1st section with result obj value(append aritlce)
function  show_food_items(result_list){

    // get the stored value 
    let obj=JSON.parse(localStorage.getItem("obj"));

    // hide  food_section,  if obj is found in localstorage
    if(obj){

        food_section.classList.add("hide");
    }
    // iterate the result array 
    result_list.forEach( (item) => {

        // create an artilce element 
        let article =document.createElement("article");

        // push to element into article_ele_list=[];
        article_ele_list.push(article);

        // added the class to article
        article.classList.add("single-recipe");

        // added dataset to each article name(recipe name)
        article.dataset.foodId=`${item.idMeal}`;

        /* then added content to element ,and 
        to make display name and img of reicpe with css style */
        article.innerHTML=`
            <div class="img-container" id="${item.strMeal}">
                <img src="${item.strMealThumb}" alt="${item.strMeal}">
                <div class="recipe-navigation">
                    <i class="fa-solid fa-magnifying-glass search-icon"></i>
                </div>
            </div>
            <div class="recipe-info">
            <h3 class="recipe-name">${item.strMeal}</h3>
            </div>`

        // then append each article to 1st section 
        food_section.append(article);
    });

    // this function  helps to get  single element article only 
    show_target_food(result_list);
}


// this function  helps to get  single element article only 
function show_target_food(result_list){

    // iterate the article elements array 
    article_ele_list.forEach((item) =>{

        // then added event to  each article element  when user click
        item.addEventListener("click" , (e) =>{ 

            // get the dataset value
            foodid=`${e.currentTarget.dataset.foodId}`;

            // scroll to top when item selected
            window.scrollTo(0,0);

            // to return the  single obj by iterate the result obj array
            let single_food=result_list.find( (item)=>{

                /* return if match found with result obj array item meal ID
                 with food id (each article dataset value)*/
                return item.idMeal === foodid;
            });

            // this function helps to update localstorage with  food item obj
                update_storage(single_food);

                    
        });
    });
}

// set with localstorage for instrucntion page;
set_storage();

function set_storage(){

    let obj=localStorage.getItem("obj");

    if(!obj){

        obj=null;
        localStorage.setItem('obj',obj);
    }
    update_storage(JSON.parse(obj));
}

// update the storage and display recipe instrunction page
function update_storage(obj){

    if(obj){

        localStorage.setItem("obj",JSON.stringify(obj));

        let recipe_obj=JSON.parse(localStorage.getItem("obj"));

        show_food_instruction(recipe_obj);
    }
}

// this function helps to show food recipe instruction of single item
function show_food_instruction(single_food){

    // 1st section not have hide class
    if(!food_section.classList.contains("hide")){
        
        // hide the respected 1st,2nd section to show instruction of recipe
        food_section.classList.add("hide");
        heading_section.classList.add("hide");

        // added th bg color to main container
        recipe_container.classList.add("bg-clr");

        // visible 3rd section to display the result
        recipe_instruction_section.classList.remove("hide");

        // 1st make empty before added the output
        recipe_instruction_section.innerHTML="";

        // createed  single article
        let single_article = document.createElement("article");

        // added  css class
        single_article.classList.add("single-recipe-instruction");

        // then added the content with css style
        single_article.innerHTML=`<div class="recipe-heading">
            <h3 class="title">${single_food.strMeal}</h3>
            <p class="recipe-area">${single_food.strArea}</p>
            <div class="close-container">
               <a href='#${single_food.strMeal}'> <i class="fa-solid fa-arrow-left  back-btn" title="Go Back"></i></a>
            </div>
        </div>
        <div class="two-template-column ">
            <div class="column-one">
                <div class="img-container">
                    <img src="${single_food.strMealThumb}" alt="${single_food.strMealThumb}">
                </div>
                <div class="button-container text-center">
                    <a href="${single_food.strYoutube}" class="youtube-btn" target="_blank">watch on youtube</a>
                </div>
            </div>
            <div class="column-two">
                <div class="recipe-instruction-info">
                    <h4 class="title">instruction :</h4>
                    <p class="recipe-instruction">${single_food.strInstructions}</p>
                </div>
            </div>
        </div>`

        // then append to 3rd section
        recipe_instruction_section.appendChild(single_article);

        // this function helps to get back .
        going_back();
    }
}

// this function helps to get back .
function going_back(){

    // we selected the back-btn when it is visible
        let back_btns=document.querySelectorAll(".close-container .back-btn");

        // iterate back_btns
        back_btns.forEach( (button) => {

            // added event to back_btn
            button.addEventListener("click", (e) =>{

                /* to visible the heading,1st section and ,
                remove the main container bg color style */
                heading_section.classList.remove("hide");
                food_section.classList.remove("hide");
                recipe_container.classList.remove("bg-clr");

                // hide the instruction page
                recipe_instruction_section.classList.add("hide");

                // clear localStorage will null
                localStorage.setItem("obj",null);

            })

        })

}

}

// called the function
recipe_making_app();