
      // color change

      let btn_spinner=document.getElementById("btn-spin");
      btn_spinner.addEventListener("click",change_bg);

      
      let color_name=document.getElementById("color_name");

      let color_title=document.getElementById("color-title-change");

      // console.log(color_title)
      

      function change_bg(){
        const letter="0123456789ABCDEF";
        let color="#";

        for(let i=0;i<6;i++){

          let r=Math.floor(Math.random()*16)

          color=color+letter[r];
        }


        // display hex color in webpage
        color_name.innerText=color

        
        // background color change
        document.body.style.backgroundColor=color


        // color-title change when spin match the background 

        color_title.style.color=color


      }