// txt speech api function
function text_speech_api(){

    // selected all inputs , btn
    let dropdown_list = document.getElementById("speech-list");

    let input =document.getElementById("text-input");

    let speak_btn = document.getElementById('speak-btn');

    // create speech_Synthessis obj
    let speech_Synthessis =  speechSynthesis;


    // added to speech_Synthessis when voiceschanges
    speech_Synthessis.addEventListener("voiceschanged" , get_voices);

    //  To get all available voices in  browser
    function get_voices(e){

        // to voices in array
        let  voices_list = speech_Synthessis.getVoices();
        
        // iterate array
        for(let i=0 ; i<voices_list.length ; i++){

            // create and append options to dropdown_list
            let option = document.createElement("option");

            option.value = voices_list[i].name;
            option.textContent= `${voices_list[i].name} -> (${voices_list[i].lang})`;

            dropdown_list.appendChild(option);
        }

        // call to set localstorage
        set_storage();
    }

    // added event to speak_btn
    speak_btn.addEventListener("click" , check_voice);

    // To check voice to speak
    function check_voice(){

    // Get value of input
    let value = input.value.trim();

    // value is not empty
    if(value != ""){

        // defualt speaking is false
        if(!speech_Synthessis.speaking){

            // call utterance to speak the voice
            get_utterance(value);
        }
    }
    else{

        // get error when empty input
        alert("enter the message")
    }
    }


    // To utter voices
    function get_utterance(value){

        // create the utterance obj
        let utterance= new SpeechSynthesisUtterance(value);

        // iterate voice from speech_Synthessis voices
        for(let voice_ of speech_Synthessis.getVoices()){

            // voice found
            if(voice_.name == dropdown_list.value){

                // added to utterance obj voice
                utterance.voice = voice_;

                // adjust the utterance properties
                utterance.volume =1;
                utterance.rate=1;
                utterance.pitch=1
        
            }
        }
        
        // speck the utterance
        speech_Synthessis.speak(utterance)
    }


    // To set the localStorage
    function set_storage(){

        // To get speech obj  from storage
        let obj = JSON.parse(localStorage.getItem("speech"));

        // check obj value
        if(!obj){

            // 1st time only set localstorage
            obj = {
                message: `${input.value.trim()}`,
                voice_type: `${dropdown_list.value}`,

            }
            
            localStorage.setItem("speech" ,`${JSON.stringify(obj)}`);
        }
        
        // call to update localStorage
        update_storage(obj)
    }

    // To update localStorage
    function update_storage(obj){
    
        // set storage 
        localStorage.setItem('speech' , JSON.stringify(obj));
    

        // update value of inputs to show
        input.value = `${obj.message}`
        dropdown_list.value = `${obj.voice_type}`

    }

    // added event to text 
    input.addEventListener("input" , (e) => {

        // Get storage obj 
        let local_obj = JSON.parse(localStorage.getItem("speech"));

        // edit the obj from input
        local_obj.message = `${e.target.value}`
        
    
        // call the update storage
        update_storage(local_obj);
    } )

    // added event to dropdown_list 
    dropdown_list.addEventListener('change' , (e) => {

        // Get storage obj
        let local_obj = JSON.parse(localStorage.getItem('speech'));

        // edit the obj from dropdown_list
        local_obj.voice_type = dropdown_list.value;

        // call the update storage
        update_storage(local_obj);
    })

}

// call
text_speech_api();
