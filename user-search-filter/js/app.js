        // function
        function user_search_filter(){

            // we selected elements input ,inner-center,user-profiles-section
            let input_search=document.getElementById("search-box");
            let inner_center=document.querySelector(".inner-center");
            let profile_section=document.querySelector(".user-profiles-section");
            
            // we selected element related to card section. 
            let single_profile_section=document.querySelector(".user-single-profile");        let user_img=document.querySelector(".single-card .img-container img");
            let user_name=document.querySelector(".single-card .user-name");
            let user_email=document.querySelector(".single-card .user-email");
            let user_cell=document.querySelector(".single-card .user-cell");
            let user_gender=document.querySelector(".single-card .user-gender");
            let user_location=document.querySelector(".single-card .user-location");
            let close_btn=document.querySelector(".single-card .close");
    
            // url for api random users
            let random_users_url=`https://randomuser.me/api/?results=25`;
    
            // empty array to push articles for search 
            let listItems=[];
    
            // called function
            get_users();
            
            // added event to input for  to filter the user
            input_search.addEventListener("input",(e) =>{filter_user(e.target.value)});
    
            // work asynchorizes
            async function get_users(){
    
                //  create resquest with await
                let request =await fetch(random_users_url);
    
                // get the respone in json obj format with await.
                let respone=await request.json();
    
                //get the result in array with contains inner objects 
                let results_array=respone.results;
    
                // iterate the result array
                results_array.forEach( (item) => {
    
                    // create element articles
                    let article_element=document.createElement("article");
    
                    // pushed the article into listItems array every time.   
                    listItems.push(article_element);
    
                    // add class to article
                    article_element.classList.add("single-user");
    
                    // set the id value as  user first name to each  article
                    article_element.setAttribute("id",`${item.name.first}`);
    
                    // added innerHTML, with all elements along with content.
                    article_element.innerHTML=`<div class="img-container">
                            <img src="${item.picture.medium}" alt="user-pic" data-name="${item.name.first}">
                        </div>
                        <div class="user-info">
                            <h3 class="user-name">${item.name.title} ${item.name.first}</h3>
                            <p class="user-location">${item.location.city}, ${item.location.country}</p>
                        </div>`
    
                        // then append the each article into profile-section
                        profile_section.appendChild(article_element);                
                });
    
                // true if listItems array with article elements
                if(listItems.length){
    
                    // now iterate listItems array for article
                    listItems.forEach( (person) => { 
    
                        // added event the user click on the particular person to view profile completely
                        person.addEventListener("click" ,(e) => {
    
    
                            // to check if inner_center contain class hide 
                            if(!inner_center.classList.contains("hide")){
    
                                // then hide the inner_center with class hide.
                                inner_center.classList.add("hide");
                            }
    
                            // then find the user_profile from results_array
                            let user_profile=results_array.find((user) =>{
    
                                // it will return the object with single_user when  results_array -> user obj with id article
                                return user.name.first === e.currentTarget.id;
                            });
    
                            // visible the single_profile_card
                            single_profile_section.classList.remove("hide");
    
                            // added elements with content.
                            user_img.src=`${user_profile.picture.large}`;
                            user_name.innerHTML=`<span>name:</span> ${user_profile.name.title} ${user_profile.name.first}`;
                            user_email.innerHTML=`<span>email:</span> ${user_profile.email} `;
                            user_cell.innerHTML=`<span>phone:</span> ${user_profile.cell}`;
                            user_gender.innerHTML=`<span>gender:</span> ${user_profile.gender}`;
                            user_location.innerHTML=`<span>location:</span> ${user_profile.location.city}  ${user_profile.location.country}`;
                            
                        })
                    })
                }
    
            }
    
    
            // added event to close_btn when it is visible.
            close_btn.addEventListener("click" ,close_profile_card)
    
            // to close the profile_card
            function close_profile_card(){
    
                // return true beacause inner_center contains class hide.
                if(inner_center.classList.contains("hide")){
    
                    // hide the card
                    single_profile_section.classList.add("hide");
    
                    // visible the inner_center.
                    inner_center.classList.remove("hide");
                }
    
    
    
            }
    
    
            // to filter users
            function filter_user(searchValue){
    
                // iterate the listItems array
                listItems.forEach((item) =>{
    
                    // to match details with searchvalue with event input
                    if(item.innerText.toLowerCase().includes(searchValue.toLowerCase())){
    
                        // match found make visble 
                        item.classList.remove("hide");
                    }
    
                    else{
    
                        // match not found make hide 
                        item.classList.add("hide");
                    }
                })
            }
    
        }
    
    
        // called the function
        user_search_filter();