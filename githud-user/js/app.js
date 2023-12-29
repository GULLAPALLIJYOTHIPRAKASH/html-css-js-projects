        // github_user function 

        function github_user(){
            // we selected the search_input,search_button 
            let  search_input=document.querySelector("#username");
    
            // console.log(search_input);
            
            let search_btn=document.querySelector(".search-btn");
            
            // console.log(search_btn);
    
            // we selected the  img ,name, about, follower/ing ,repository elements
            let github_name=document.querySelector(".user-name");
    
            // console.log(github_name);
    
            let github_bio=document.querySelector(".about-user");
    
            // console.log(github_bio);
    
            let  github_profile_img=document.querySelector(".img-container");
    
    
            let  github_link=document.querySelector(".button-link");
    
            // console.log(github_profile_img);
    
            let github_follower=document.querySelector(".user-followers");
            let github_following=document.querySelector(".user-following");
            let github_repository=document.querySelector(".user-repository");
    
            // console.log(github_repository);
    
            // github api link
            // const api=`https://api.github.com/users/`;
    
            // added event listener to search-btn 
            search_btn.addEventListener("click", show_user_data);
    
            
    
          async  function show_user_data(){
    
            if(search_input.value === ""){
    
                alert("Please Enter Data")
            }
    
            else{
    
                let request= await fetch(`https://api.github.com/users/${search_input.value}`);
    
                search_input.value="";
    
                let response= await request.json();
    
                // console.log(response);
    
            if(request.status == 404 ||  response.name === null || response.avatar_url === null || response.bio === null || response.message == "Not Found" ){
    
            document.querySelector(".main").classList.remove("visible");
            alert("NO Data found.....");
    
    
            }
    
            else{
    
        // added response  data in to element and added class visible to main 
    
                github_profile_img.src=`${response.avatar_url}`
    
                github_name.innerText=`${response.name}`;
    
    
                github_bio.innerText=`${response.bio}`
    
                github_follower.innerText=`followers: ${response.followers}`;
                github_following.innerText=`following: ${response.following}`;
                github_repository.innerText=`repository:${response.public_repos}`;
    
                github_link.href=`${response.html_url}`
    
                document.querySelector(".main").classList.add("visible");
    
                    
    
                    
                }
            }
    
            }
    
    
            // add event to search_input when user click on enter key  to call  show_user_data() function 
    
    
            search_input.addEventListener("keydown", show_user)
            
            function show_user(e){
    
              if(e.key == "Enter"){
    
                show_user_data();
    
    
              }
            }
    
    
        }
    
    
        //  called github_user function
            github_user()