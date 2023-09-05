

// stopWatch function 
function stopWatch(){

    // we get the stopwatch timer div to display the timer

    let timer=document.querySelector(".stopwatch-timer");

    // start,pause ,reset button to perform events

    let start=document.getElementById("start");
    let pause=document.getElementById("pause");
    let reset=document.getElementById("reset");

    

    // calling this function to  execute local_storage()   and  time.innertext with localstorage variable values
    check_storage();
 

    
    // declared variable with localstorage item is zero;
    let hour =Number( localStorage.getItem('h'));
    let  minute =  Number( localStorage.getItem('m'));
    let second = Number(localStorage.getItem('s'));
    let milliSecond =Number( localStorage.getItem('ms'));


    // check_storage
   function check_storage(){

    // initail localstorage is empty then execute local_storage()
    if(localStorage.length === 0){

        local_storage();


    }

    // also update innertext of timer with localstorage variable values
    timer.innerText=`${(localStorage.getItem('h'))} : ${(localStorage.getItem('m'))}  : ${(localStorage.getItem('s'))}  : ${(localStorage.getItem('ms'))} `;

   }




    //    local_storage with defualt paraments
    function local_storage(h="00",m="00",s="00",ms="000") {

 
        //  initail localstorage is not set with ms  going inside if only 
         if (!localStorage.getItem("ms")){

            // initial now we set localstorage with variable value
            localStorage.setItem("h",h);
            localStorage.setItem("m",m);
            localStorage.setItem("s",s);
            localStorage.setItem("ms",ms);

     
        }
        
        //  we update localstorage with variable value from other function like start,pause,reset
        localStorage.setItem("h",h);
        localStorage.setItem("m",m);
        localStorage.setItem("s",s);
        localStorage.setItem("ms",ms);

               

                

    

}


    // to store the values of hour,minute,second, milliSecond
    let h,m,s,ms;

    // to add the setInterval and clearInterval timing event
    let timeref;


    start.addEventListener("click",function(e){

        timeref=setInterval(startTimer,10);

        });
    

    function startTimer(){

            /* To make user  free to use the stopWatch
            when timer start  the pause,
            reset button will visible then and
            hidden start button          */

        pause.style.display="inline";

        reset.style.display="inline";

        start.style.display="none";

        milliSecond = milliSecond + 10;

       


        if(milliSecond == 1000){
            
            second = second + 1;
            milliSecond = 0;

            if(second == 60){

                second = 0;
                minute = minute + 1;


                if(minute == 60){

                    minute = 0;
                    hour = hour+1;

                    if(hour ==  60){

                        hour=0
                    }
                }

            }

        }

        
        // to add zero if hour,minute,second,milliSecond is less than 10 mean like 01,02,03...09


                if(hour <10){

                    h='0'+hour;
                    // h=Number('0')+hour;
                }
                else{

                    h=hour;
                }

                if(minute < 10){

                    m='0'+minute;
                    // m=Number('0')+minute;

                }

                else{

                   m=minute;
                }


                if(second < 10){

                    s='0'+second;
                    // s=Number('0')+second;
                }
                else{

                    s=second;
                }

                if(milliSecond < 10){

                    ms='00'+milliSecond;
                    // ms=Number('00')+milliSecond;
                }

                if(milliSecond < 100){

                    ms='0'+milliSecond;
                }

                if(milliSecond >=100){

                    ms=milliSecond;
                }

                // now h,m,s,ms values into timer innerHTML;
                
                timer.innerText=`${h} : ${m}  : ${s}  : ${ms} `;
                
                // send the value to local_storage function
                local_storage(h,m,s,ms);

        


    }


    // add event to pause then to clearInterval with timeref above setInterval event.

    pause.addEventListener("click",pauseTimer);

    function pauseTimer(e){

        clearInterval(timeref);

        
        timer.innerText=`${h} : ${m}  : ${s}  : ${ms} `;

        // send the value to local_storage function
        local_storage(h,m,s,ms);


        /* To make user  free to use the stopWatch 
        when user click on pause to make to start  timer 
        with continues and by visible  start button   */                                 
        
        pause.style.display="none";

        
        start.style.display="inline";

    
     }



    //  add event to reset button to to clearInterval and  reset the timer with 00:00:00:000
     reset.addEventListener("click",resetTimer);

     function resetTimer(e){

        clearInterval(timeref);


        // reset the values
        hour=0;
        minute=0;
        second=0;
        milliSecond=0;
        h="00";
        m="00";
        s="00";
        ms="000";

        // send the value to local_storage function
        local_storage(h,m,s,ms);

        timer.innerText=`00 : 00 : 00 : 000`;

    
        /*  hidden the pause and reset button 
            to starting stage and visible the start button  */

        pause.style.display="none";

        reset.style.display="none";

        start.style.display="inline";
   }


     }



    // calling the stopWatch function
    stopWatch();