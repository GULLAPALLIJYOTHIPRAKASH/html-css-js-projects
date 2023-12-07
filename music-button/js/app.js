// music_button
function music_button(){

// we selected the button_container to insert buttons
let button_container=document.querySelector(".btn-container");

// music names  => array
let music_list=['applause 👏','scary 👻','fail 🤯','wrong 😵','laughing 😆','victory ✌️','gunshot 🔫','wind-blowing 🌪️','helicopter 🚁','oh my god 🙆‍♂️'];


// iterate array  to create a button 
music_list.forEach((sound)=>{

    // create button
    let button=document.createElement("button");

    // insert the content in button
    button.innerHTML=sound;

    // then add event to each button to play music
    button.addEventListener("click", (e)=>{

        // call to stop music by stop_music finction
        stop_music();

        // get the target button innertext
        let id=e.target.innerText.toLowerCase();
        
        // we select the audio tag to play
        let music=document.getElementById(`${id}`);

        // then play the audio by selected button
        music.play();
    });

    //append the each button to button_container
    button_container.append(button)
})


// to stop  the  each audio tag
function stop_music(){

    // iterate the array for selecting the audio tag
    music_list.forEach((song) =>{

        // audio tag
        let audio=document.getElementById(`${song}`);

        // pause the all audio tag
        audio.pause();
        //  audio tag currenttime i zero
        audio.currentTime=0;
    })
}

}

// music_button called
music_button();

