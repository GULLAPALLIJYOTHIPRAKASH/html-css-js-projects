function user_testimonial(){

 // we selected the user_desc,user_img and user_name element
 let user_desc=document.querySelector(".user-desc");
 let user_img=document.querySelector(".img-container img");
 let user_name=document.querySelector(".user-name");




 //   we taken array of objects with men / women profiles alternate
 const users_list=[


    // men profile
    {
        user_name:"Arjun",
        user_role:"Web engineer",
        user_pic:'./assets/human-1.jpg',
        user_about:"He is an amazing Web developer that delivered the task exactly how we need it, do yourself a favor and hire her, you will not be disappointed by the work delivered. He has 2+ years of experience in the Aptiv company, During projects he follows the SDLC to build interactive projects. He will go the extra mile to make sure that you are happy with your project. I will surely work again with him!"
    },


 // men profile
     {
         user_name:"Krishna",
         user_role:"UX designer",
         user_pic:'./assets/user-1.jpg',
         user_about:"This guy is a top-notch UX designer. He communicates well, works fast, and produces quality work. He has 7 years of experience in Figma and Adobe Xd tools and he was currently working in Google UX design company, we have been lucky to work with him."
     },

 // women profile
     {
         user_name:"Annu",
         user_role:"Product Manager",
         user_pic:'./assets/user-10.jpg',
         user_about:"She is an amazing Product Manager with 5 years of experience, She delivered the task exactly how we need it, do yourself a favor and hire her, you will not be disappointed by the work delivered. She will go the extra mile to make sure that you are happy with your project. She was currently working in Oracle company. I will surely work again with her!"
     },

 // men profile
     {
         user_name:"Vikram",
         user_role:"Software Engineer",
         user_pic:'./assets/user-2.jpg',
         user_about:"This guy is an efficient engineer in our team. He communicates well, works fast, and produces quality work. He has 3+ years of experience in HTML/CSS, JavaScript, and React JS.  He was currently working in a Netflix company, we have been lucky to work with him."
     },

     // women profile
     {
         user_name:"Ushasree",
         user_role:"Cloud Engineer",
         user_pic:'./assets/user-9.jpg',
         user_about:"She is a top-notch cloud engineer with 10 years of experience. She communicates well, works fast, and produces quality work. She developed a robust cloud infrastructure for deploying and maintaining the project in the cloud, and also she was one of the certified cloud experts in AWS Cloud company. We have been lucky to work with her!"
     },

 // men profile
     {
         user_name:"Rishi kumar",
         user_role:"CEO",
         user_pic:'./assets/user-3.jpg',
         user_about:"This guy is a young and talented IT professional, proactive, and responsible, with a strong work ethic. He is very strong in client conversions and business. He is a quick learner, eager to learn new technologies. He was currently working in TCS company. He is focused and has the good dynamics to achieve due dates and outstanding results."
     },

 // women profile
     {
         user_name:"Rupa",
         user_role:"Human Resources",
         user_pic:'./assets/user-6.jpg',
         user_about:"She is an young and talented HR, proactive, and responsible, with a strong work ethic. She is very strong in client conversions and business. She is a quick learner, eager to learn new technologies. She was currently working in IBM company. She is focused and has the good dynamics to achieve due dates and outstanding results."
     },

 // men profile
     {
         user_name:"Prasad",
         user_role:"Director",
         user_pic:'./assets/user-4.jpg',
         user_about:"This guy is an amazing  12+ years of experience an entrepreneur that delivered the task exactly how we need it, do yourself a favor and hire him, you will not be disappointed by the work delivered. He was currently working in Microsoft. He will go the extra mile to make sure that you are happy with your project. I will surely work again with him!"
     },

 // women profile
     {
         user_name:"Surekha",
         user_role:"Backend Developer",
         user_pic:'./assets/user-8.jpg',
         user_about:"She is an amazing backend developer that delivered the task exactly how we need it, do yourself a favor and hire her, you will not be disappointed by the work delivered. She has 5+ years of experience in Verizon company  She will go the extra mile to make sure that you are happy with your project. I will surely work again with her!"
     },

 // men profile
     {
         user_name:"Kalayan",
         user_role:"Team Lead",
         user_pic:'./assets/user-5.jpg',
         user_about:"This guy is a young and talented Team Leader, proactive, and responsible, with a strong work ethic. He has 14+ years of experience in HCL company. He is very strong in client conversions and business. He is a quick learner, eager to learn new technologies. He is focused and has the good dynamics to achieve due dates and outstanding results."
     },

 // women profile
     {
         user_name:"Priyanka",
         user_role:"Frontend Developer",
         user_pic:'./assets/user-7.jpg',
         user_about:"She is an amazing frontend developer that delivered the task exactly how we need it, do yourself a favor and hire her, you will not be disappointed by the work delivered.She has 9+ years of experience in Deloitte company, During projects she follows the SDLC to build the interactive projects. She will go the extra mile to make sure that you are happy with your project. I will surely work again with her!"
     },
     
 ]

 // initial value count=1;
 let count=1;

 // function to show the user profiles
 function  show_profile(){

     // adding the each object properties to user_desc,user_img,user_name elements through index with count.
     user_desc.innerText=users_list[count].user_about;
     user_img.src=users_list[count].user_pic;
     user_name.innerText=`${users_list[count].user_name},${users_list[count].user_role}`;

     // then update count with count value+1
     count=count+1;

 // To check the count is greater than the user_list array lenght then    
    if(count > users_list.length-1){

    // make count to zero.
     count=0;

 }

}

// call the  show_profile function after 10s == 10000ms
setInterval(show_profile,10000);

}

 //call the user_testimonial function;
 user_testimonial();

 
