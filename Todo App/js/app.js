// Todo app functionality
function Todo_app(){


    //  we selected the required element for transparent
    let todo_center = document.querySelector('.todo-center');

    // for btn action to open form
    let open_form = document.querySelector(".todo-button");

    // form container
    let form_container = document.querySelector(".form-container");

    // close btn 
    let close_btn = document.getElementById("close-btn");

    
    // added event to open the form 
    open_form.addEventListener("click" , (e) => {

        // add class to open the form with condition 
        if(form_container.classList.contains("show-form")){

            // hide form
            form_container.classList.remove("show-form") ;

            // visible center
            todo_center.classList.remove('transparent');

        }
        else{

            // show form
            form_container.classList.add('show-form')

            // transparent center
            todo_center.classList.add('transparent');
        }
        
        })



    // added event to close the form
    close_btn.addEventListener("click" , (e) => {

        // close form with condition
        if(form_container.classList.contains("show-form")){

            // close form
            form_container.classList.remove("show-form") 
        }
        else{

            // show form
            form_container.classList.add('show-form')
        }
    })


    // selected form element
    let form = document.querySelector('form');

    // added event to form when submit
    form.addEventListener('submit' , (e) => {

        // prevent default form submit
        e.preventDefault();

        // then validate it fields by calling
        form_validate();
    })

    // selected all input tags and submit_btn
    let input_task_title = document.querySelector('#input-task-title');
    let input_task_desc = document.querySelector('#input-task-desc');
    let task_btn = document.querySelector('#task-btn');


    // check the input tag validation
    function form_validate(){

        // all input tags values stored
        let task_title_value = input_task_title.value.trim()
        let task_desc_value = input_task_desc.value.trim();

        //  validate  input field
        let title_isvaild = false;
        let desc_isvaild = false;

        
        // input task title
        if(task_title_value == ""){

            title_isvaild = false;

            // call  to show error message 
            error_info(input_task_title , "title can't be empty");
            
        }
        else if(task_title_value.length >= 15){
                
            title_isvaild = false;

            // call to show error message
            error_info(input_task_title , "title name should be  max 15 characters only");
            
        }
        else if(task_title_value.length <=5){

            title_isvaild = false;

            // call to show error message
            error_info(input_task_title , "title name should be  min 6 characters");


        }
        else if (task_title_value){

            title_isvaild = true;

            // call to show success message
            success_info(input_task_title ,"title name accepted");

        }

        

        // input task description
        if(task_desc_value == ""){

            desc_isvaild = false;

            // call to show error message
            error_info(input_task_desc , "description can't be empty");
        }
        else if(task_desc_value.length < 10){

            desc_isvaild = false;

                // call to show error message
            error_info(input_task_desc , "description should be min 10 characters");
        }
        else if(task_desc_value.length > 100){

            desc_isvaild = false;

                // call to show error message
            error_info(input_task_desc , "description should be max 100 characters only")
        }
        else if(task_desc_value){

            desc_isvaild = true;

                // call to show succes message
            success_info(input_task_desc , "description text accepted");
        }
    
    
    
    
    
    //  validate all input values
    if(title_isvaild === true && desc_isvaild === true){


        // help to added each task value
        add_task(task_title_value , task_desc_value);

        // after added , hide form
        form_container.classList.remove("show-form");


        // clear all input value
        input_task_title.value = ""
        input_task_desc.value = ""

        // change to defualt value
        title_isvaild=false;
        desc_isvaild=false;


        // remove all  success message
        input_task_title.parentElement.classList.remove('success');
        input_task_desc.parentElement.classList.remove('success');

        
    }        
        
    }


    // Help to show error message
    function error_info(input , msg){

        // get the parent from input like field
        let parent_field = input.parentElement;

        // select small from parent like field
        let small = parent_field.querySelector('small');

        // add msg in small
        small.textContent = `${msg}`;

        // added error indicator
        parent_field.classList.add('error');

        // remove success indicator
        parent_field.classList.remove('success');

    }

        // Help to show success message
    function success_info(input , msg){

        // get the parent from input like field
        let parent_field = input.parentElement;

        // select small from parent like field
        let small = parent_field.querySelector('small');

        // add msg in small
        small.textContent = `${msg}`;


        // add success indicator
        parent_field.classList.add('success');

            // remove error indicator
        parent_field.classList.remove('error');
        



    }




    // selected  task container , clearall_btn
    let task_container = document.querySelector('.task-items-main');
    let clear_btn = document.querySelector(".button-container");

    // selected alert message 
    let alert_message = document.querySelector('.heading .alert');




    //  load DOM  and call to display task 
    document.addEventListener('DOMContentLoaded' ,get_task_items);  


    // defualt value initialize for edit event
    let edit_flag= false;
    let edit_title_element;
    let edit_desc_element;
    let edit_id;


    // list of color code
    let color_code = ["#f3cab0","#bef3b0","#b0f3e3","#b0dff3","#bdb0f3","#dfb0f3","#f3b0d1","#f3b0b4"];


    // To add each task 
    function add_task(input_title_ , input_desc_){

        //  stored input value
        let input_title = input_title_;
        let input_desc = input_desc_;

        // get unique_id of task 
        let unique_id = new Date().getTime().toString();

        // Get random color code
        let randam_color = color_code[Math.floor(Math.random()*color_code.length)]

        // to create  every new task
        if(input_title && !edit_flag ){
            
            // to create each single task  
            create_article_task(input_title , input_desc , unique_id, randam_color);

            // show task container
            task_container.classList.add('show');

            // add each new task to storage
            add_item_storage(input_title , input_desc , unique_id , randam_color);

            // show message every new task
            alert_info("new task added successfully" , '#f3cab0');

            // reset all values 
            reset_values();

        }

        // when edit event occur then to submit form
        else if( input_title && edit_flag) {

            // get the edit elemt like title,desc
            // added new edited content to edited inner text elemt
            edit_title_element.innerText = input_title ;
            edit_desc_element.innerText = input_desc ;

            
            // add edited element to storage
            edit_item_storage(input_title, input_desc , edit_id);

            // show message every new task
            alert_info("task  edited successfully" , '#bef3b0');

            // reset all values
            reset_values ();
        }


    
    }



    // to reset all value
    function reset_values (){

        
        // reset all input value
        input_task_title.value = '';
        input_task_desc.value = '';

        // reset all edited variable
        edit_flag= false;
        edit_title_element ;
        edit_desc_element ;
        edit_id = "";

    }

    


    // To show alert message when each operations occurring
    function alert_info(text , color){

        // show alert info and color_code bg
        alert_message.innerText = `${text}`;

        alert_message.style.backgroundColor = `${color}`;

        alert_message.classList.toggle('add');

        // remove alert info with time
        setTimeout( () => {

        // hide alert
        alert_message.classList.remove('add');

        }, 3000);

        
    }




    // localstorage functions
        
    // add each new task to storage
    function  add_item_storage(input_title , input_desc , unique_id , randam_color){

        // create single obj 
        let item = {title : input_title , desc : input_desc , id : unique_id , color_code : randam_color};

        // get obj  from storage or intitial []
        let task_items = check_storage();

        // push to list
        task_items.push(item);

        // set storage  obj in  stringify
        localStorage.setItem('todo-tasks' , JSON.stringify(task_items));
        
    }



    // add edit element to storage
    function edit_item_storage(edit_title , edit_desc , edit_id){


        // get obj from storage
        let task_items = check_storage();

        // iterate task from obj then return it
        task_items= task_items.map( item => {

            // task id matches
            if(item.id === edit_id){

                // modify obj with edit content only
                // then return obj 
                return {...item,title : edit_title, desc : edit_desc};
            }

            // then return entry obj
            return item ;
        })


        // set modified obj  storage
        localStorage.setItem("todo-tasks" , JSON.stringify(task_items));
    }


    // delete element from storage
    function delete_item_storage(id){

        // Get obj from storage
        let task_items = check_storage();

        //  filter each task and return unmatched task id's obj
        task_items = task_items.filter( (item) => {

            // unmatched task id's obj
            if(item.id != id)

            // return task obj
            return item
        })


        // set the storage 
        localStorage.setItem("todo-tasks" ,JSON.stringify(task_items));
    }

    


    // check storage
    function check_storage(){

        // return obj  from storage or []
        return localStorage.getItem('todo-tasks') ? JSON.parse(localStorage.getItem('todo-tasks')) : [];
    }


    // iterate to get task from storage initially
    function get_task_items(){

        // Get the obj  from storage or []
        let task_items = check_storage();

        // obj lenght more zero
        if(task_items.length > 0){

            // iterate each item and create it 
            task_items.forEach( item => {
                
                // create each task 
                create_article_task(item.title, item.desc , item.id , item.color_code);
            });

            
            // show task_container and clearall_btn
            task_container.classList.add('show');
            clear_btn.classList.remove('hide');

        


        }
            
        
        
    }


    // To create each Task
    function create_article_task(title , desc ,id , color_code){

        // create aritlce
        let article_element = document.createElement('article');

        // set bg color
        article_element.style.backgroundColor = `${color_code}`;

        // added class
        article_element.classList.add('single-task-item');

        // create data_set attribute
        let data_set = document.createAttribute('data-id')

        //  add id value to data_set
        data_set.value = `${id}`;

        // then set to aritlce elemet
        article_element.setAttributeNode(data_set);

        //  html format  for task
        article_element.innerHTML = `<h4 class="task-title">${title}</h4>
                <p class="task-desc" alt="${desc}" title ="${desc}" >${desc}</p>
                <span class="options">
                    <i class="fa-solid fa-edit" ></i>
                    <i class="fa-solid fa-trash"></i>
                </span>`


        // append to container
        task_container.appendChild(article_element);

        // show clear_all_btn
        clear_btn.classList.remove('hide');


        // selected all edit_btns and delete_btns
        let edit_btns  = document.querySelectorAll('.fa-edit');
        let delete_btns  = document.querySelectorAll('.fa-trash');


        // iterate and added event
        [...edit_btns].forEach( (edit_btn) => {

            // call edit 
            edit_btn.addEventListener('click' , edit_task);

        });

        // iterate and added event
        [...delete_btns].forEach( (delete_btn) => {

            // call delete 
            delete_btn.addEventListener("click" , delete_task);
            
        });

    }
    //    doing  edit function


    // this occuring when edit btn clicks
    // To edit each task 
    function edit_task(e){

        // get the title  and desc  elemt
        edit_title_element = e.target.parentElement.previousElementSibling.previousElementSibling ; 
        edit_desc_element  =e.target.parentElement.previousElementSibling; 


        // then add previous select element content to input
        input_task_title.value = edit_title_element.textContent ; 
        input_task_desc.value = edit_desc_element.textContent ; 


        // make flag is true
        edit_flag = true ; 

        // get the  article id
        edit_id = e.target.parentElement.previousElementSibling.parentElement.dataset.id;


        // show form 
        form_container.classList.add('show-form')

    }



    // this occuring when delete btn clicks
    // TO delete each task
    function  delete_task(e) {


        // Get article of each task
        let element = e.target.parentElement.previousElementSibling.parentElement;

        // remove from task_container
        task_container.removeChild(element);

        // reset all values
        reset_values();

        // call to delete task from storage
        delete_item_storage(element.dataset.id);

        //  if obj lenght  from storage is zero
        if(check_storage().length <= 0){

            // then hide task_container
            task_container.classList.remove("show");

            // hide clearall_btn
            clear_btn.classList.toggle("hide");


        }


        
        // show delete message
        alert_info("task deleted successfully" , '#b0f3e3')


        }


        
    // added event to clearall_btn
    clear_btn.addEventListener("click" , clear_tasks);


    // To clear all tasks
    function clear_tasks(e){

    
        // select all task elements
        let task_items = document.querySelectorAll('.single-task-item');

    
        if(task_items.length > 0){

        // iterate each task then remove form task_container
        task_items.forEach( (item) => {


            task_container.removeChild(item);
        })

        }
        

        // reset all values
        reset_values();
        

        //  hide all task_container , clearall_btn  , form
        task_container.classList.remove('show');
        e.currentTarget.classList.add('hide');
        form_container.classList.remove('show-form')

        
    
        // clear todo_tasks obj from storage
        localStorage.removeItem('todo-tasks');


        // show alert message
        alert_info("all tasks are cleared" , '#b0dff3');

    }



}

// call 
Todo_app();