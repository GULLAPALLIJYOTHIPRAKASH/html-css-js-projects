function show_Notification_Api(){

    // selected button
    const notification_btn=document.getElementById('notification-btn');

    // added event to button
    notification_btn.addEventListener("click" , show_Notification);

    // // also added event to window
    // window.addEventListener("load" , show_Notification);

    // To display notfiction 
     async function show_Notification(){

        // asking for permission for notification
        let request_premission = await Notification.requestPermission();
        
        // variables
        let notification ;

        let bio =`👋 Hello! I'm G Jyothi Prakash 😎, a frontend web developer. Thanks for visiting my site! 😊🌐. 🖱️ Click here to know more about me! 👍`;


        // if allowed premission
        if(request_premission === 'granted'){

            //created notification obj
            notification = new  Notification("Notifcation JS" ,{

            body:`${bio}`,
            icon:"./assets/notification-favicon.svg",
            data:{info:'notification received'},
            vibrate:true,
            silent:false,
            tag:'message',
            renotify:true,
           });


        // added event to notification, when blocked by something
        notification.addEventListener("error" , (e) => {

            alert('🚫 Something in your system blocking notification 🔔');
        });

        // added event to notification, when clicked on notification
        notification.addEventListener('click' , (e) =>{

             window.open('https://www.linkedin.com/in/jyothiprakash-gullapalli-186857207/','_blank');

        });


        }


        // if permission was defualt
        else if(request_premission === 'default'){

            alert('🔔 Allow notification permission on this site! 🌐👍')
        }

        //else permission was blocked
        else{

            alert('🚫 Notification permission blocked! Please allow and read noted points. 📵📝');

        }
        
    }

  }

    //   called show  show_Notification_Api
    show_Notification_Api();
