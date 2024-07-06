
    // skeleton loading
    function skeleton_loading_api(){

        //  we selected all  reqiured element
        let all_skeleton_icons = document.querySelectorAll(".rounds .circle,.small-line");
        let  item_section_container= document.querySelector(".item-section-container");
        let title = document.querySelector(".heading");
        let copy_right = document.querySelector('.copy-right');
  
        // To get all recipe from api
        async function recipe_api(){
  
          //  api call
          let url  = await fetch('https://dummyjson.com/recipes');
  
          // get result 
          let res  = await url.json();
  
          // send obj to create a single recipe
          create_items(res.recipes)
        }
        
        // wait and call api 
       setTimeout(recipe_api ,3000);
  
  
      //  To create a item of recipe
       function create_items(lists){
  
        // remove skeleton loading cards
        item_section_container.innerHTML = " "
  
        // iterate to create article element
        lists.forEach( ele => {
  
          // article element
          let article = document.createElement("article");
  
          // added class
          article.classList.add(".single-card");
  
          // style to article
          article.style.backgroundColor = "#ebf4eb"
          article.style.borderRadius = "10px"
          
          // display information from api obj
          article.innerHTML = `<div class="img-container" style="background-image: url(${ele.image})">
                      </div>
                      <div class="card-info">
                          <div class="logo " style="background-image: url(${ele.image})"></div>
                      <div class="horizon-lines">
                      <div class="line" style="background-color:transparent">${ele.name}</div>
                      <div class="line" style="background-color:transparent">Rating : ${ele.rating}</div>
                      </div>`
  
          // append to article to it's container
          item_section_container.appendChild(article);
  
                
          
        });
  
        // iterate to remove  skeleton effect of heading
        all_skeleton_icons.forEach( (item) => {
  
  
        item.classList.remove("loading");
  
        item.style.backgroundColor = "#212b3f"
  
        })
  
        // remove  skeleton effect 
        copy_right.classList.remove('loading');
        copy_right.style.backgroundColor = "transparent";
        copy_right.innerHTML = `Made by gullapalli jyothi prakash`
  
  
        // remove  skeleton effect 
        title.classList.remove('loading');
        title.innerText  = "skeleton desing";
        title.style.background= "transparent";
  
       }
  
      }
  
      // calling
  
      skeleton_loading_api();