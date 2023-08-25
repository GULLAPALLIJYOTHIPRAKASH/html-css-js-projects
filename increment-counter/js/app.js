// when dom content is load when call the function
document.addEventListener("DOMContentLoaded", increment_counter);

// increment_counter function
function increment_counter(){

// we selected twitter,youtube,facebook count elements
let twitter_count=document.querySelector(".twitter-count");
let youtube_count=document.querySelector(".youtube-count");
let facebook_count=document.querySelector(".facebook-count");

// initiall count is zero
let count=0;

// we stored the  interval and call the function with 1second
let interval=setInterval(increment,1)

function increment(){

// increment the count value with hunder
count=count+100;

// add count value to  selected elements
twitter_count.innerText=`${count}`;
youtube_count.innerText=`${count}`;
facebook_count.innerText=`${count}`;

// if count reached 15000 and above 
  if(count >= 15000){

        // add count value to  selected elements with division
        twitter_count.innerText=`${Math.floor(count/3)}`;  
        youtube_count.innerText=`${Math.floor(count/2)}`;
        facebook_count.innerText=`${Math.floor(count/1)}`;

        //   then stop the interval
        clearInterval(interval);
  }


}

}
