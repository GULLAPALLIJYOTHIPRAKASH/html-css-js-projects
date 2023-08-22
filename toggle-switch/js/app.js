        // whole toggle_swtich_theme function
        function toggle_switch_theme(){

            // we  selected  the toggle_switch_center element to change it's background color and text color in light and dark mode;
            let toggle_switch_center=document.querySelector(".toggle-switch-center");
    
         
            // we  selected  the content_shape, round_shape  elements to change it's shape and effects in light and dark mode;
            let content_shape=document.querySelector(".content");
            let round_shape=document.querySelector(".content .round");
    
            // we  selected  the  battery_shape,network_shape element to change it's background color in light and dark mode;
            let  battery_shape=document.querySelector(".shape .battery");
            let  network_shape=document.querySelector(".shape .network");
    
    
            // we  selected  the toggle_switch element to change it's background color in light and dark mode;
            let toggle_switch=document.querySelector(".toggle-switch");
    
            // we  selected  the light and dark elements to add events
            let lightMode=document.querySelector(".mode  .light");
            let darkMode=document.querySelector(".mode  .dark");
    
            // we  selected  the move_bg element to change it's background color and move front and back in light and dark mode;
            let move_bg=document.querySelector(".move-bg");
    
            let time=document.querySelector(".time");
    
            // console.log(time);
    
    
            // we took variable light_mode and dark_mode.
            let light_mode='light';
            let dark_mode='dark';
    
            // we set defualt_mode is light_mode.
            let defualt_mode=light_mode;
    
    
            // we call the storage_mode function  initially.
            storage_mode();
    
            // this function is used to set the  mode like light(defualt mode) and dark.
            // also add and remove   the stlyes of the elements in light and dark mode.
    
            function setMode(mode = defualt_mode ){
    
    
            // if mode is dark add stlyes of the element  in dark mode.
            if(mode == "dark"){
    
                // we change the bg-color in dark mode from  "dark to white" of the parentElement.
                toggle_switch_center.parentElement.classList.add("bg-container");
    
                // we change the bg-color  from "white to dark"  and text color from "dark to white"   in dark mode  bg-color is  oppsite container(parent) and center(child)
                toggle_switch_center.classList.add("dark-mode-center");
    
                // we change the bg-color of shapes in dark mode from "grey to white".
                battery_shape.classList.add("shape-white");
                network_shape.classList.add("shape-white");
    
    
                // we change the bg-color of sun to moon shape and add effects  moon-visible animation .
                content_shape.classList.add("moon-bg");
                round_shape.classList.add("moon-round");
                
                // we change the bg-color of  switch  from "light white to dark black " in dark mode.
                toggle_switch.classList.add("dark-bg"); 
                // we move the toggle positon from 20% to  80%  and change it bg-color.
                move_bg.classList.add("dark-bg-move","move-front");
        
                //    console.log("clicked dark");
    
    
    
    
    
    
    
    
            }
    
            //else if mode is light 
            else if(mode == "light"){
        
    
            // we removed the stlyes that we added in  dark mode and changes to dafualt mode is light_mode.
    
                toggle_switch_center.parentElement.classList.remove("bg-container");
    
                toggle_switch_center.classList.remove("dark-mode-center");
    
                
                battery_shape.classList.remove("shape-white");
                network_shape.classList.remove("shape-white");
    
                content_shape.classList.remove("moon-bg");
                round_shape.classList.remove("moon-round");
    
                toggle_switch.classList.remove("dark-bg");
                move_bg.classList.remove("dark-bg-move",  "move-front");
    
                //    console.log("clicked light");
    
    
            }
    
        
    
    }
    
    
    // this function is used to set  the mode in localstorage.
    function storage_mode(){
    
        // we get the mode available  in localstorage  but starting is null 
        //  after that  events happen changing the mode light to dark
        let stored_mode=localStorage.getItem("mode");
    
        // starting stored_mode is null so not Null mean to excute the if block once olny
        // until mode change null to light or dark. 
        if(!stored_mode){
    
            // set the stored_mode to light mode as defualt_mode
            stored_mode=defualt_mode;
    
            // set in the localstorage as light mode as defualt_mode
            localStorage.setItem("mode",stored_mode);
        }
    
        // call the  function and change the value of the mode 
        // but starting  mode is  light mode as defualt_mode
        // update every time  from localStorage.
        setMode(stored_mode);
    }
    
    
    
    //  added event to darkMode and lightMode element
    darkMode.addEventListener("click", change_mode);
    lightMode.addEventListener("click", change_mode);
    
    // this function is for both darkMode and lightMode elements when it clicked.
    function change_mode(){
    
        // we get mode  available in localStorage
        let mode=localStorage.getItem("mode");
    
        // true 
        if(mode){
    
    
            // when user clicked the light to dark   ,in localStorage, mode  is  light mode as defualt_mode  
            // so  mode is light == light_mode then change to dark_mode or else not equals light_mode.
            let new_mode= mode == light_mode ? dark_mode : light_mode;
    
            // set the new_mode value to localstorage
            localStorage.setItem("mode", new_mode);
    
            // also update the mode parement when change.
            setMode(new_mode);
        }
    }
    
    
    
    // we set the  time 
     function setTime(){
    
        let date=new Date();
    
        // if hour and minutes is less than 10 then 0+hours  and 0+minutes else hour ,minutes.
        let hours=date.getHours() < 10 ? `0${date.getHours()}` :`${date.getHours()}`;
    
        let minutes=date.getMinutes() < 10 ? `0${date.getMinutes()}` :`${date.getMinutes()}`;
    
        // added values time element innerHTML.
        time.innerHTML=`${hours} : ${minutes}`
     }
    
    //  this  function is called for every 1000 second.
    setInterval(setTime,1000);
    
    
    }
    
    
    // we call the whole function
    toggle_switch_theme();