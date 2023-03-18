// weather app script js
function weather_app(){

    // user_input   ,   search_btn,
    let input=document.getElementById("city-name");
    // console.log(input);
    
    let search=document.querySelector(".search-weather");
    // console.log(search);

    // weather_message p
    let weather_message=document.querySelector(".weather-message");
    // console.log(weather_message);

    // weather_information div
    let weather_info=document.querySelector(".weather-info");
    // console.log(weather_info);

    // weather_details div
    let weather_details=document.querySelector(".weather-details");
    // console.log(weather_details);

    // weather app title(not used)
    let title=document.querySelector(".title");
    // console.log(title);

    // copy_rights p
    let copy_right=document.querySelector(".copy-right");
    // console.log(copy_right);

    // weather_img
    let image=document.getElementById("img-result");
    // console.log(image);

    // weather_date  p
    let weather_date=document.querySelector(".weather-date");
    // console.log(weather_date);

    // weather_temperature p
    let weather_temperature=document.querySelector(".temperature");
    // console.log(weather_temperature);

    // weather_desc p
    let weather_description=document.querySelector(".weather-desc");
    // console.log(weather_description);

    // weather_humidity span
    let weather_humidity=document.querySelector("#humidity-percentage");
    // console.log(weather_humidity);


    // weather_wind_speed span
    let weather_wind_speed=document.querySelector("#wind-speed");
    // console.log(weather_wind_speed);

    // date object
    let date=new Date();

    // month in array
    let month=["January","February","March","April","May","June",
    "July","August","September","October","November","December"];

    // weekdays in array
    let weekdays=[ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ];

    // console.log(month);
    // console.log(weekdays);
    // console.log(weekdays[date.getDay()]);
    // console.log(date.getDate());
    // console.log(month[date.getMonth()]);
    // console.log(date.getFullYear());


    // add event to search_btn
    search.addEventListener("click",show_weather);


    // show weather 
    function show_weather(){

        // api key for weather api
        let api_key='6d2c8fa5efc10f07c8eafdbd6d3a0f95';
        
        //  XMLHttpRequest object created
        let xhr= new  XMLHttpRequest();

        // requested created
        xhr.open("GET",`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&APPID=${api_key}`,true);

        // request sent
        xhr.send();


        // before result loader added 

        xhr.onprogress=function(){

            // defualt add  no-show class to weather_information, weather_details div
            weather_info.classList.add("no-show");
            weather_details.classList.add("no-show");

            //add   no-show class to copy_rights after result
            copy_right.classList.remove("no-show");

            // add loader
            weather_message.innerHTML='<div class="loader"></div>'
          
        }



        // get response
        xhr.onload=function (){

            // set the time gap between loader and result every time
            setTimeout(

                function (){

                    // if status is 200 means success
                    if(xhr.status==200){

                        // store the result in result variable
                        let result=xhr.responseText;

                        // make the weather_message is null 
                        weather_message.innerHTML='';

                        // stop to show the copy_right
                        copy_right.classList.add("no-show");

                        // coverted string to object
                        result=JSON.parse(result);
                        // console.log(result);

                        // store weather[main]
                        let weather_result=result.weather[0];
                        // console.log(weather_result);

                        // converted farhen to celsius (f-273) 
                        let temperature_result=Math.floor(result.main.feels_like-273);
                        // console.log(temperature_result)

                        // humidity result
                        let humidity_result=result.main.humidity;
                        // console.log(humidity_result);

                        // calculated wind speed m/sec into km/h (m*36000)/1000
                        let wind_speed_result=Math.floor((result.wind.speed*3600)/1000);
                        // console.log(wind_speed_result);

                        
                        // show to result for img,date,temperature,
                        weather_info.classList.remove("no-show");
                        // console.log(weather_info.className);

                        // show to result for humidity and wind speed div
                        weather_details.classList.remove("no-show");
                        // console.log(weather_info);
                        
                       

                        // used to match weather  main with image
                        switch(weather_result.main){

                            // thunder weather
                            case "Thunderstorms":
                                image.src='./assets/thunder.png';
                                // console.log("image");
                                break;

                            // mist,smoke,haze,dust,fog,sand,ash,squall,tornado weather
                            case "Mist" :
                                image.src="./assets/mist.png";
                                // console.log("image");
                                break;

                            case "Smoke" :
                                image.src="./assets/mist.png";
                                // console.log("image");
                                break;

                            case "Haze" :
                                image.src="./assets/mist.png";
                                // console.log("image");
                                break;
                            case "Dust" :
                                image.src="./assets/mist.png";
                                // console.log("image");
                                break;

                            case "Fog" :
                                image.src="./assets/mist.png";
                                // console.log("image");
                                break;

                            case "Sand" :
                                image.src="./assets/mist.png";
                                // console.log("image");
                                break;

                            case "Ash" :
                                image.src="./assets/mist.png";
                                // console.log("image");
                                break;

                            case "Squall" :
                                image.src="./assets/mist.png";
                                // console.log("image");
                                break;

                            case "Tornado" :
                                image.src="./assets/mist.png";
                                // console.log("image");
                                break;
                            
                            //clear weather 
                            case "Clear":
                                image.src="./assets/clear.png";
                                // console.log("image");
                                break;

                            // rain,drizzle weather
                            case "Rain":
                                image.src="./assets/rain.png";
                                // console.log("image");
                                break;

                            case "Drizzle":
                                image.src="./assets/rain.png";
                                // console.log("image");
                                break;
                            
                            // cloud weather 
                            case "Clouds":
                                image.src="./assets/cloud.png";
                                // console.log("image");
                                break;

                            // snow weather 
                            case "Snow":
                                image.src="./assets/snow.png";
                                // console.log("image");
                                break;
                            
                            default:
                                image.src='';

                        }

                        // add date 
                        weather_date.innerText=`${weekdays[date.getDay()]}, ${date.getDate()} ${month[date.getMonth()]} ${date.getFullYear()}`;
                        // add temperature
                        weather_temperature.innerHTML=`${temperature_result}<sup class="celsius"><sup class="dot">.</sup>c</sup>`
                        // add weather description
                        weather_description.innerText=`${weather_result.description}`;
                        // add humidity percentage
                        weather_humidity.innerText=`${result.main.humidity}%`;
                        // add wind_speed km/h
                        weather_wind_speed.innerText=`${wind_speed_result}Km/h`
                    }

                    // user_input is null
                    else if(input.value==''){

                        // default add class
                        weather_info.classList.add("no-show");
                        weather_details.classList.add("no-show");
                        copy_right.classList.remove("no-show");

                        // show the message to user
                        weather_message.innerHTML='<p class="message">please enter city name</p>'
                     
                    }

                    // if city is not found
                    else if(xhr.statusText=="Not Found"){
                        // console.log(xhr.statusText);

                        // default add class
                        weather_info.classList.add("no-show");
                        weather_details.classList.add("no-show");
                        copy_right.classList.remove("no-show");

                        // show the message to user
                        weather_message.innerHTML='<p class="message">city not found</p>'
                       

                        
                    }

                    // make empty nothing here
                    else{

                    }
                }
                ,2000)

           
        }


    

}

}

// called
weather_app()
