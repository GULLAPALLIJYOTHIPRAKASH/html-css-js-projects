

// gallery_slider()
function gallery_slider(){



 //  slider-main
 let slider_image_main=document.getElementById("slider-image-main");

 // console.log(slider_image_main)


 // slider-button

 let left_btn=document.getElementById("left-buttton");
 let right_btn=document.getElementById("right-button");

//  console.log(left_btn);
//  console.log(right_btn);

 // added eventlistener  to left, right slider-button
 left_btn.addEventListener("click",goto_backward );
 right_btn.addEventListener("click",goto_farward );


 // all images in arrays
 
 let all_images=[ "./assets/image-1.jpg",
         "./assets/image-2.jpg",
         "./assets/image-3.jpg",
         "./assets/image-4.jpg",
         "./assets/image-5.jpg",
         "./assets/image-6.jpg",
         "./assets/image-7.jpg",
         "./assets/image-8.jpg",
         "./assets/image-9.jpg",
         "./assets/image-10.jpg"]

 let images_lenght=all_images.length-1

//  console.log(images_lenght)



//  body 1st  image load

// let body_load=document.body;
// body_load.addEventListener("loadstart",starting_image)

// console.log(body_load)

 function starting_image(){
    slider_image_main.setAttribute("src",all_images[0])

}

let   count=0;


 function goto_farward(){


     if(count==0){
         starting_image();
     }

    
     count++;

    if(count<=images_lenght){

     slider_image_main.setAttribute("src",all_images[count])

     // console.log(count)

     
    }
    else{

     // if count =10
    //   after count=10-1

     count=count-1;
    }
    
   




 }



 // console.log(count)
 function goto_backward(){


     count=count-1;

     if(count<=-1){
         


         // count=0
         count=count+1;
 }

 else{

     
     slider_image_main.setAttribute("src",all_images[count]);

     // console.log(count)

 }

}

}

gallery_slider();


