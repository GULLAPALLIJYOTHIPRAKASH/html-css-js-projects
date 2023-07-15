// add  timer to call function digital_clock at every 1 second;

  setInterval(digital_clock,1000);


//   function for digital_clock


    function  digital_clock() {



    // hours,minutes,seconds, time_indicator(AM/PM);

    let hours=document.getElementById("hours");

    let minutes=document.getElementById("minutes");

    let seconds=document.getElementById("seconds");

    let time_indicator=document.getElementById("time");

    // console.log(hours,minutes,seconds,time_indicator);

    let date=new Date();

    // new array for 24 hours ---- not used -----

    // let hours_24=[0,1,2,3,4,5,6,7,8,9,10,11,12,1,2,3,4,5,6,7,8,9,10,11,12];

    // converted  24 hours  into 12 hours  and  to check the values hour is < 10 then add 0 hour like  01 ,02,03

    // let d_hours=hours_24[date.getHours()]  < 10  ? `0${hours_24[date.getHours()] }` : `${hours_24[date.getHours()]}` ;

    // this condition helps to find  if hours is > 12   and else <=12
    let d_hours;

    if(date.getHours() > 12){

      d_hours=date.getHours() -12  < 10 ? `0${date.getHours()-12}` : `${date.getHours()-12}` ;



    }

    else{

      d_hours=date.getHours()   < 10 ? `0${date.getHours()}` : `${date.getHours()}` 


    }

    // console.log(d_hours);

    // to check the values minutes is < 10 then add 0 minutes  like  01 01 ,02,03
    
    let  d_minutes=date.getMinutes() < 10 ? `0${date.getMinutes()}` : `${date.getMinutes()}`;


    // console.log(d_minutes);

    // to check the values seconds is < 10 then add 0 seconds  like  01 01 ,02,03

    let d_seconds=date.getSeconds() < 10 ? `0${date.getSeconds()}` :  `${date.getSeconds()}`;

    // console.log(d_seconds);

    
    // to get the AM or PM when time is <= 11
    
    let d_time_indicator= date.getHours()  <= 11 ? 'AM' : 'PM';
    
    // console.log(d_time_indicator);


    // add to hours,minutes,seconds and AM/PM to html elements

    hours.innerText=  `${d_hours}`;

    minutes.innerText= `${d_minutes}`;

    seconds.innerText= `${d_seconds}`;

    time_indicator.innerText= `${d_time_indicator}`;
}



