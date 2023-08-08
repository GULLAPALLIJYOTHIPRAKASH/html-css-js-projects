        // github_user function 

        function github_user(){
            // we selected the search_input,search_button 
            let  search_input=document.querySelector("#username");
    
            // console.log(search_input);
            
            let search_btn=document.querySelector(".search-btn");
            
            // console.log(search_btn);
    
            // we selected the  img ,name, about, follower/ing ,repository elements
            let githud_name=document.querySelector(".user-name");
    
            // console.log(githud_name);
    
            let githud_bio=document.querySelector(".about-user");
    
            // console.log(githud_bio);
    
            let  githud_profile_img=document.querySelector(".img-container");
    
    
            let  githud_link=document.querySelector(".button-link");
    
            // console.log(githud_profile_img);
    
            let githud_follower=document.querySelector(".user-followers");
            let githud_following=document.querySelector(".user-following");
            let githud_repository=document.querySelector(".user-repository");
    
            // console.log(githud_repository);
    
            // githud api link
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
    
                githud_profile_img.src=`${response.avatar_url}`
    
                githud_name.innerText=`${response.name}`;
    
    
                githud_bio.innerText=`${response.bio}`
    
                githud_follower.innerText=`followers: ${response.followers}`;
                githud_following.innerText=`following: ${response.following}`;
                githud_repository.innerText=`repository:${response.public_repos}`;
    
                githud_link.href=`${response.html_url}`
    
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