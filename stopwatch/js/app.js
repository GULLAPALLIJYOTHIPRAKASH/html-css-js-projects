

// stopWatch function 

function stopWatch(){

    // we get the stopwatch timer div to display the timer

    let timer=document.querySelector(".stopwatch-timer");

    // start,pause ,reset button to perform events

    let start=document.getElementById("start");
    let pause=document.getElementById("pause");
    let reset=document.getElementById("reset");

    // console.log(start,pause,reset);


    // declared variable with zero;

    let hour = 0 ;
    let minute = 0 ;
    let second = 0 ;
    let milliSecond =0;

    // to store the values of hour,minute,second, milliSecond
    let h,m,s,ms;

    // to add the setInterval and clearInterval timing event
    let timeref;


    start.addEventListener("click",function(){

        timeref=setInterval(startTimer,10);
        });
    

    function startTimer(){


            /* To make user  free to use the stopWatch
            when timer start visible the pause,
            reset button then and
            hidden start button          */

        pause.style.display="inline";

        reset.style.display="inline";
        
        start.style.display="none";

        milliSecond = milliSecond + 10;

        // console.log(milliSecond);


        if(milliSecond == 1000){
            
            second = second + 1;
            milliSecond = 0;

            if(second == 60){

                second = 0;
                minute = minute + 1;

                // console.log(minute);

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

                    h="0"+hour;
                }
                else{

                    h=hour;
                }

                if(minute < 10){

                    m="0"+minute;

                }

                else{

                   m=minute;
                }


                if(second < 10){

                    s="0"+second;
                }
                else{

                    s=second;
                }

                if(milliSecond < 10){

                    ms="00"+milliSecond
                }

                if(milliSecond < 100){

                    ms="0"+milliSecond;
                }

                if(milliSecond >=100){

                    ms=milliSecond;
                }

               

                // now h,m,s,ms values into timer innerHTML;

                timer.innerText=`${h} : ${m}  : ${s}  : ${ms} `;

        


    }


    // add event to pause then to clearInterval with timeref above setInterval event.

    pause.addEventListener("click",pauseTimer);

    function pauseTimer(){

        clearInterval(timeref);
        timer.innerText=`${h} : ${m}  : ${s}  : ${ms} `;

        

           
           // change the inner text of start btn   resume to start
           start.innerText='play'

                       /* To make user  free to use the stopWatch
            when user click on pause to make to start  timer 
            with continues and by visible  start button
                 
            */
           
           start.style.display="inline";
     }



    //  add event to reset button to to clearInterval and  reset the timer with 00:00:00:000
     reset.addEventListener("click",resetTimer);

     function resetTimer(){

        clearInterval(timeref);


        hour=0;
        minute=0;
        second=0;
        milliSecond=0;
        // h=0;
        // m=0;
        // s=0;
        // ms=0;

        timer.innerText=`00 : 00 : 00 : 000`;


        /* hidden the pause and reset button 
         to starting stage and visible the start button 
         */


        pause.style.display="none";

        reset.style.display="none";

        // change the inner text of start btn   resume to start

        start.innerText="start";

        start.style.display="inline";





     }


    }


    // calling the stopWatch function
    stopWatch();