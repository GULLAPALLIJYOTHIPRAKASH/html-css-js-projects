// keyboard event keys ,keycodes,code

function keyboard_events(){

            // keyboard-event-center div
            let keyboard_event_center=document.querySelector(".keyboard-event-center");
    
            // console.log(keyboard_event_center);
    
            // add event to when user press keydown  
    
            window.addEventListener("keydown",show_KeyboardEvent);
    
    
            // to display in the keyboard-event-center div innerHTML
    
            function show_KeyboardEvent(e){
    
    
                // when user press space like ' empyt string' then add text "space" in event.key or  execute for  remaining keys
    
                    keyboard_event_center.innerHTML=`
                    <div class="keyboard-section">
                        <div class="event-key">
                        <h3 class="title">event.key</h3>
                        <div class="key-type">${e.key === ' ' ? 'Space' : e.key}</div>
                        </div>
                        <div class="event-key">
                        <h3 class="title">event.keycode</h3>
                        <div class="key-type">${event.keyCode}</div>
                        </div>
                        <div class="event-key">
                            <h3 class="title">event.code</h3>
                            <div class="key-type">${event.code}</div>
                            </div>
                    </div>`
    
            }
    
        }
    
    
        // call  keyboard_events()
    
        keyboard_events();