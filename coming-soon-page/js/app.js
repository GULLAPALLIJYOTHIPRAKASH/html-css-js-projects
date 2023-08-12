function countdown_timer(){

    //  we selected the days,hours,minutes,second count element 
    let days_count=document.querySelector(".days-count");
    let hours_count=document.querySelector(".hours-count");
    let minutes_count=document.querySelector(".minutes-count");
    let seconds_count=document.querySelector(".seconds-count");

    // console.log(days_count);
    // console.log(hours_count);
    // console.log(minutes_count);
    // console.log(second_count);


     // set_countdown function
    function set_countdown(){


            // we will get  current date
            let sample_date= new Date();

            // we taken an array of months
            let Months_list=['jan','feb','mar', 'apr','may','jun','jul','aug','sept','oct','nov','dec'];

            // now we added inside date is 'Month date, year HH:MM:SS (24 hour format)'
            // then countdown time is set like every month   current date + 7 (7+7= 14 date ) , current year  and time is completed 23:59:59 hours
            let countdown_time= new Date(`${Months_list[sample_date.getMonth()]} ${sample_date.getDate()+7}, ${sample_date.getFullYear()}  23:59:59`).getTime();

            // console.log(countdown_time);

            //  we will get current time
            let current_time=new Date().getTime();

            // we calculate the distance of countdown_time and current_time
            let distance=countdown_time - current_time;

            // console.log(distance);


            // we calculate the day  by distance / ms*sec*min*hrs  result 7 date from current date ex:  if date is 1 the 1 +7 = 8 date  
            let days=Math.floor(distance / (1000*60*60*24));

            // console.log(days);

            // we calculate the  hour by distance  % ms*sec*min*hrs  with reminder  /  ms*sec*min
            let hours=Math.floor((distance % (1000*60*60*24)) / (1000*60*60));

            // console.log(hours);

            // we calculate the  minutes by distance  % ms*sec*min  with reminder  /  ms*sec*
            let minutes=Math.floor((distance % (1000*60*60)) / (1000*60));

            // console.log(minutes);

            // we calculate the  seconds by distance  % ms*sec  with reminder  /  ms
            let seconds=Math.floor((distance % (1000*60)) /(1000));

            // console.log(seconds);

            let day,hour,minute, second;

            // to check if days is less than 10 but countdown every 7 day so we add zero + days
            if( days < 10){

                day='0'+days                
            }
            else{

                day=days;
            }

            // to check if hours is less than 10 but  so we add zero + hours
            if(hours < 10){

                hour="0"+hours
            }
            else{

                hour=hours
            }

            // to check if minutes is less than 10 but  so we add zero + minutes
            if(minutes < 10){

                minute="0"+minutes
            }
            else{

                minute=minutes;
            }

            // to check if seconds is less than 10 but  so we add zero + seconds

            if(seconds < 10){

                second="0"+seconds;
            }
            else{
                second=seconds;
            }



            // add the value into innerText of days_count, hours_count ,minutes_count, seconds_count
            days_count.innerText=day;
            hours_count.innerText=hour;
            minutes_count.innerText=minute;
            seconds_count.innerText=second;

    }


    // set interval for every 1000 ms
    setInterval(set_countdown,1000);


    }

    //  call the countdown_timer function
        countdown_timer();
