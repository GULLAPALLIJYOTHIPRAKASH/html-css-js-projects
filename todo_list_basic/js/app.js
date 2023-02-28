
function todo_list_basic(){


        let user_input=document.getElementById("todo-text");
        // console.log(user_input)

        let btn_1=document.getElementById("btn-1");
        // console.log(btn_1)

        let todo_list_section=document.getElementById("todo-list-section")
        // console.log(todo_list_section)

        let message_info=document.querySelector(".message");
        // console.log(message_info)


        btn_1.addEventListener("click",add_todo_task);


        function add_todo_task(){

        if(user_input.value.length==0){

            message_info.classList.add("display")
            message_info.innerText="please enter a value"
            setTimeout(function(){
                            message_info.classList.remove("display")
                        },1000)
            
        }

        else{
                

            // add to list

            // create element article
            let todo_task=document.createElement("article")

            // add css class to article
            todo_task.classList.add("single-todo-list")
            
            // adding content to the innerHTML
            todo_task.innerHTML=`<!--single todo list start-->
            <h3 class="todo-comment">${user_input.value}</h3>
            <div class="todo-list-icons">
            <i class="fa-solid fa-trash delete-icon"></i>
            </div> <!--single todo list end-->`

            // sessionStorage.setItem("aa",todo_task.innerHTML)

            // console.log(todo_task)
                
            // then append the each task
            todo_list_section.append(todo_task)

            message_info.classList.add("display")
            message_info.innerText="item is added to the list"

            setTimeout(function(){
                            message_info.classList.remove("display")
                        },1000)
            
            // make the input to empty
            user_input.value=""


                // del_button
                let del=document.querySelectorAll(".delete-icon")
                // console.log(del)

                // for loop for all  delete buttons
                for(let i=0;i<del.length;i++){

                del[i].onclick=function(){
                this.parentElement.parentElement.remove()

                message_info.classList.add("display")
                message_info.innerText="task is deleted"

                setTimeout(function(){
                            message_info.classList.remove("display")
                        },1000)


                }
            }


        }

    }


                // clear_button
                let clear_btn=document.getElementById("clear-btn");
                // console.log(clear_btn)

                // event clear button
                clear_btn.addEventListener("click",clear_all_task);

                // function for clear_all_task

                function clear_all_task(){
                     let all_task=document.querySelectorAll(".single-todo-list");
                    //  console.log(all_task)

                     for(let l=0;l<all_task.length;l++){

                        all_task[l].remove()
                        message_info.classList.add("display")
                        message_info.innerText=" all tasks are cleared"

                        setTimeout(function(){
                            message_info.classList.remove("display")
                        },1000)
                     }
                }


  

            }


            todo_list_basic();

