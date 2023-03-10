// country api function
function country_api(){
// input text,btn
let country_name=document.getElementById("country-name");
let bt1=document.querySelector(".country-btn");
let country_result=document.querySelector(".country-result")

// console.log(country_name);
// console.log(bt1);
// console.log(country_result);

// add event to submit btn
bt1.addEventListener("click",show_flag);

// function to show the flag
function show_flag(){

    // store the user country_name in value
    let value=country_name.value

    // create object for XMLHttpRequest()
    let xhr=new XMLHttpRequest()

    // create request for object
    xhr.open("GET",`https://restcountries.com/v3.1/name/${value}`,true )

    // send request
    xhr.send();

    // before get the result add the loader
    xhr.onprogress=function (){
        
        country_result.innerHTML=`<div class="loader"></div>`


    }

    // after the   get the result
    xhr.onload=function (){

        // setTimeout timer to wait for 2500ms
            setTimeout(function (){

                // to xhr.status is 200
                if(xhr.status==200){

                // store the responseText in result
                let result=xhr.responseText;

                // convert the result string into object
                result=JSON.parse(result);

                // make empty to remove loader and display the result
                country_result.innerHTML=""

                // console.log(result)

                // store object in variable country like destruction
                let [country]=result

                console.log(country);

                // add result in img format
                country_result.innerHTML=`<img src="${country.flags.png}" class="flag-img" alt="${country.flags.alt}">`

                }

                // if user entered value is null then
                else if(value==""){

                    country_result.innerHTML="<p>please enter any country</p>"

                }

                // if user entered  country name  is wrong  
                else{

                    country_result.innerHTML="<p>please enter correct country name</p>"


                }

            },2500)
        }

 
   



}
}

country_api();
