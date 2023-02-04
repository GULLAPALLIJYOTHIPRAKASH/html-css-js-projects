    // ice cream counter script

  
    function ice_cream_counter(){

        //  heading h1 tag  inside content
        let counter_number=document.getElementById("counter_no");
    
    
      //   button increase-btn,decrease-btn,reset-btn
    
        let increase_btn1=document.getElementById("increase_btn"); 
        let decrease_btn2=document.getElementById("decrease_btn");
        let reset_btn3=document.getElementById("reset_btn");
    
        
        //  add event to button
        increase_btn1.onclick=increase_count;
        decrease_btn2.onclick=decrease_count;
        reset_btn3.onclick=reset_count;
    
    
    // intial count=0;
    let count=0;
    
    // color change depend on condition
    function color_condition(){
    if(count>0){
      counter_number.style.color="green"
    }
    else if(count<0){
      counter_number.style.color="red"
    }
    else{
      counter_number.style.color="rgb(26, 51, 67)"
    
    }
    }
    
    // increase_btn
    function increase_count(){
    
       
    count=count+1;
    
    // color change depend on condition function
    color_condition();
    
    
    // console.log(count); 
    counter_number.innerText=count
    }
    
    
    
    
    
    // decrease_btn
    function decrease_count(){
    
    
    count=count-1;
    // color change depend on condition function
    color_condition();
    
    // console.log(count)
    counter_number.innerText=count
    }
    
    
    
    // reset_btn
    function reset_count(){
    counter_number.style.color="rgb(26, 51, 67)"
    count=0;
    // console.log(count)
    counter_number.innerText=count
    }
    
    }
    
    
    
    // called main function
    
    
    ice_cream_counter()
    
    