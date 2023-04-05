// randon_quote function 
function randon_quote(){
    // here quote_content ,author element
    let quote_content=document.querySelector(".quote-content");

    // console.log(quote_content);

    let author=document.querySelector(".author");

    // console.log(author);

    // here quote_btn random
    let quote_btn=document.querySelector(".quote-btn");

    // console.log(quote_btn);

    // add event to quote_btn
    quote_btn.addEventListener("click",show_quotes);

    // simple function to generate quote
    function show_quotes(){

        // created XMLHttpRequest object
        let xhr=new XMLHttpRequest();
        
        // request created
        xhr.open("GET","https://api.quotable.io/random",true);

        // then send
        xhr.send();

        // when result come onload event
        xhr.onload=function(){

            // store result 
            let result=xhr.responseText;

            // convert string to object
            result=JSON.parse(result);

            //  console.log(result);

            // add innerHTml quote and content
            quote_content.innerHTML=`<span class="quote">“</span>${result.content}<span class="quote">”</span>`
            
            // add innerText author name
            author.innerText=`-- ${result.author}`

            // console.log(quote_content);
        }
    }
}

randon_quote();