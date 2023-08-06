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

        // 0-100 quotes in obj [ {} ]
        let  quotes_obj= [
           
            {
                id: "WQbJJwEFP1l9",
                content: "In the depth of winter, I finally learned that there was within me an invincible summer.",
                author: "Albert Camus",
                tags: ["Famous Quotes", "Inspirational"]
              },
              {
                id: "Tm5YUGQYMtDk",
                content: "To follow, without halt, one aim: There is the secret of success.",
                author: "Anna Pavlova",
                tags: ["Success"]
              },
              {
                id: "h12ulAfEEIi1",
                content: "Focusing your life solely on making a buck shows a poverty of ambition. It asks too little of yourself. And it will leave you unfulfilled.",
                author: "Barack Obama",
                tags: ["Success", "Famous Quotes"]
              },
              {
                id: "rIyjtuXKWUzv",
                content: "It is never too late to be what you might have been.",
                author: "George Eliot",
                tags: ["Famous Quotes", "Success", "Wisdom"]
              },
              {
                id: "jFcxLEUS2zO",
                content: "Pick battles big enough to matter, small enough to win.",
                author: "Jonathan Kozol",
                tags: ["Famous Quotes", "Wisdom"]
              },
              {
                id: "kxZYO18IlUd",
                content: "Who sows virtue reaps honor.",
                author: "Leonardo da Vinci",
                tags: ["Famous Quotes", "Honor", "Virtue"]
              },
              {
                id: "QKZqW0wzV-w",
                content: "Nobody will believe in you unless you believe in yourself.",
                author: "Liberace",
                tags: ["Famous Quotes", "Inspirational", "Motivational"]
              },
              {
                id: "MgUl-kKgCq6",
                content: "Each day provides its own gifts.",
                author: "Marcus Aurelius",
                tags: ["Famous Quotes", "Wisdom"]
              },
              {
                id: "mH_m-Xmw1dk",
                content: "Don't wait. The time will never be just right.",
                author: "Napoleon Hill",
                tags: ["Famous Quotes", "Motivational"]
              },
              {
                id: "OHNMF1vCnPFE",
                content: "If I am not for myself, who will be for me? If I am not for others, what am I? And if not now, when?",
                author: "Rabbi Hillel",
                tags: ["Famous Quotes", "Wisdom"]
              },
              {
                id: "vuGBuD1oaev3",
                content: "Do not go where the path may lead, go instead where there is no path and leave a trail.",
                author: "Ralph Waldo Emerson",
                tags: ["Famous Quotes", "Wisdom"]
              },
              {
                id: "8pxScew8Z6Fg",
                content: "Nothing great was ever achieved without enthusiasm.",
                author: "Ralph Waldo Emerson",
                tags: ["Famous Quotes", "Success"]
              },
              {
                id: "DRrFFyFqWhQD",
                content: "If you love someone, set them free. If they come back, they're yours; if they don't, they never were.",
                author: "Richard Bach",
                tags: ["Love"]
              },
              {
                id: "ISX_zfx8abzc",
                content: "There is no duty we so underrate as the duty of being happy. By being happy we sow anonymous benefits upon the world.",
                author: "Robert Louis Stevenson",
                tags: ["Life", "Happiness"]
              },
              {
                id: "0zVGLJ51n4H-",
                content: "These days people seek knowledge, not wisdom. Knowledge is of the past; wisdom is of the future.",
                author: "Vernon Cooper",
                tags: ["Future", "Wisdom"]
              },
              {
                id: "Fg4uCgQpOYMw",
                content: "This is the final test of a gentleman: his respect for those who can be of no possible value to him.",
                author: "William Lyon Phelps",
                tags: ["Wisdom", "Life"]
              },
              {
                id: "EBX5NXqc-R6-",
                content: "Six essential qualities that are the key to success: Sincerity, personal integrity, humility, courtesy, wisdom, charity.",
                author: "William C. Menninger",
                tags: ["Success", "Life"]
              },
              {
                id: "jv-_CBZKIl8A",
                content: "Short words are best and the old words when short are best of all.",
                author: "Winston Churchill",
                tags: ["Famous Quotes", "Wisdom"]
              },
              {
                id: "-7eqy9t642",
                content: "Applause is a receipt, not a bill.",
                author: "Dale Carnegie",
                tags: ["Wisdom"]
              },
              {
                id: "51iIZed76Z",
                content: "Talent is God-given; be humble. Fame is man-given; be thankful. Conceit is self-given; be careful.",
                author: "Harvey Mackay",
                tags: ["Wisdom"]
              },
              {
                id: "SmLKR1PDjBK",
                content: "Never interrupt someone doing what you said couldn't be done.",
                author: "Amelia Earhart",
                tags: ["Wisdom"]
              },
              {
                id: "eeXDeVTMI",
                content: "Some of the best lessons we ever learn are learned from past mistakes. The error of the past is the wisdom and success of the future.",
                author: "Dale Turner",
                tags: ["Wisdom"]
              },
              {
                id: "nFekPJy-f7",
                content: "Many sophisticated, intelligent people lack wisdom and common sense.",
                author: "Joyce Meyer",
                tags: ["Wisdom"]
              },
              {
                id: "BF_d0-6_2j",
                content: "Every friendship goes through ups and downs. Dysfunctional patterns set in; external situations cause internal friction; you grow apart and then bounce back together.",
                author: "Mariella Frostrup",
                tags: ["Friendship"]
              },
              {
                id: "kCSK8XmyZT",
                content: "Friendship, like love, is destroyed by long absence, though it may be increased by short intermissions.",
                author: "Samuel Johnson",
                tags: ["Friendship"]
              },
              {
                id: "Xgdo3uU5rey",
                content: "Do something wonderful, people may imitate it.",
                author: "Albert Schweitzer",
                tags: ["Famous Quotes", "Inspirational"]
              },
              {
                id: "VBlwGGSQRWom",
                content: "There surely is in human nature an inherent propensity to extract all the good out of all the evil.",
                author: "Benjamin Haydon",
                tags: ["Famous Quotes", "Wisdom", "Character"]
              },
              {
                id: "t7L2YkK_2QWr",
                content: "As you think, so shall you become.",
                author: "Bruce Lee",
                tags: ["Famous Quotes", "Life", "Inspirational"]
              },
              {
                id: "d79yOltfl35h",
                content: "Genuine sincerity opens people's hearts, while manipulation causes them to close.",
                author: "Daisaku Ikeda",
                tags: ["Character"]
              },
              {
                id: "DiIyvrMPCZUK",
                content: "The universe is full of magical things, patiently waiting for our wits to grow sharper.",
                author: "Eden Phillpotts",
                tags: ["Wisdom"]
              },
              {
                id: "X1jdRU0Azian",
                content: "Those who cannot learn from history are doomed to repeat it.",
                author: "George Santayana",
                tags: ["Wisdom"]
              },
              {
                id: "JvN_exUiTvKU",
                content: "Ability is what you're capable of doing. Motivation determines what you do. Attitude determines how well you do it.",
                author: "Lou Holtz",
                tags: ["Famous Quotes", "Inspirational"]
              },
              {
                id: "tcFPk-72hdRT",
                content: "The thoughts we choose to think are the tools we use to paint the canvas of our lives.",
                author: "Louise Hay",
                tags: ["Famous Quotes", "Life", "Wisdom"]
              },
              {
                id: "O7pfivbuYa33",
                content: "Every adversity, every failure, every heartache carries with it the seed of an equal or greater benefit.",
                author: "Napoleon Hill",
                tags: ["Famous Quotes", "Wisdom"]
              },
              {
                id: "SUGTTr1lgAW",
                content: "Strong beliefs win strong men, and then make them stronger.",
                author: "Richard Bach",
                tags: ["Famous Quotes"]
              },
              {
                id: "JqusXYQEGNPC",
                content: "Do you want to know who you are? Don't ask. Act! Action will delineate and define you.",
                author: "Thomas Jefferson",
                tags: ["Famous Quotes"]
              },
              {
                id: "GEqMoChoXn",
                content: "A wise man is superior to any insults which can be put upon him, and the best reply to unseemly behavior is patience and moderation.",
                author: "Molière",
                tags: ["Wisdom"]
              },
              {
                id: "4iwVD9jYPBp",
                content: "Well done is better than well said.",
                author: "Benjamin Franklin",
                tags: ["Famous Quotes", "Success"]
              },
              {
                id: "WLeZo2pcwiPB",
                content: "We must not allow ourselves to become like the system we oppose.",
                author: "Desmond Tutu",
                tags: ["Character"]
              },
              {
                id: "SP7hRDnqmC0M",
                content: "The key to transforming our hearts and minds is to have an understanding of how our thoughts and emotions work.",
                author: "Dalai Lama",
                tags: ["Famous Quotes", "Character"]
              },
              {
                id: "0GYhGCy1iGJq",
                content: "Do not give your attention to what others do or fail to do; give it to what you do or fail to do.",
                author: "Dhammapada",
                tags: ["Wisdom"]
              },
              {
                id: "weP7hTYV0FLk",
                content: "People grow through experience if they meet life honestly and courageously. This is how character is built.",
                author: "Eleanor Roosevelt",
                tags: ["Character"]
              },
              {
                id: "HTn2Q6e3AYr",
                content: "If you wish to be a writer, write.",
                author: "Epictetus",
                tags: ["Success"]
              },
              {
                id: "4DR-3WdvTHam",
                content: "Not every difficult and dangerous thing is suitable for training, but only that which is conducive to success in achieving the object of our effort.",
                author: "Epictetus",
                tags: ["Success"]
              },
              {
                id: "NcbrYrPkqmiL",
                content: "But man is not made for defeat. A man can be destroyed but not defeated.",
                author: "Ernest Hemingway",
                tags: ["Famous Quotes", "Wisdom"]
              },
              {
                id: "MZW3t0KRxWNU",
                content: "Character cannot be developed in ease and quiet. Only through experience of trial and suffering can the soul be strengthened, vision cleared, ambition inspired, and success achieved.",
                author: "Helen Keller",
                tags: ["Character"]
              },
              {
                id: "DBkTDkczWkg",
                content: "You can't shake hands with a clenched fist.",
                author: "Indira Gandhi",
                tags: ["Wisdom"]
              },
              {
                id: "Q8UN20ENwDOM",
                content: "There are things so deep and complex that only intuition can reach it in our stage of development as human beings.",
                author: "John Astin",
                tags: ["Science"]
              },
              {
                id: "bUM3Kw1GEj8",
                content: "You can't stop the waves, but you can learn to surf.",
                author: "Jon Kabat-Zinn",
                tags: ["Wisdom"]
              },
              {
                id: "UzvFA9ox5C21",
                content: "If you correct your mind, the rest of your life will fall into place.",
                author: "Laozi",
                tags: ["Life"]
              },
              {
                id: "Nx1D0o8jYu8",
                content: "Imagination is the highest kite one can fly.",
                author: "Lauren Bacall",
                tags: ["Wisdom"]
              },
              {
                id: "sKRDFZR86R5",
                content: "I never see what has been done; I only see what remains to be done.",
                author: "Marie Curie",
                tags: ["Success", "Wisdom"]
              },
              {
                id: "kpHBKU4UZAsL",
                content: "Those who are blessed with the most talent don't necessarily outperform everyone else. It's the people with follow-through who excel.",
                author: "Mary Kay Ash",
                tags: ["Success"]
              },
              {
                id: "61fgPzU6BeYY",
                content: "No man can succeed in a line of endeavor which he does not like.",
                author: "Napoleon Hill",
                tags: ["Success"]
              },
              {
                id: "Bjvcw8bqPmEJ",
                content: "Here is one quality that one must possess to win, and that is definiteness of purpose, the knowledge of what one wants, and a burning desire to possess it.",
                author: "Napoleon Hill",
                tags: ["Success"]
              },
              {
                id: "-ZGXOoJquO1",
                content: "By believing passionately in something that does not yet exist, we create it.",
                author: "Nikos Kazantzakis",
                tags: ["Success"]
              },
              {
                id: "p3WMuYECz33S",
                content: "The meaning I picked, the one that changed my life: Overcome fear, behold wonder.",
                author: "Richard Bach",
                tags: ["Life", "Change"]
              },
              {
                id: "tLHlKytgFRyW",
                content: "It's so simple to be wise. Just think of something stupid to say and then don't say it.",
                author: "Sam Levenson",
                tags: ["Famous Quotes"]
              },
              {
                id: "MWAepUPgkZZQ",
                content: "Leaders aren't born they are made. And they are made just like anything else, through hard work. And that's the price we'll have to pay to achieve that goal, or any goal.",
                author: "Vince Lombardi",
                tags: ["Success"]
              },
              {
                id: "a7lEejDkHdFL",
                content: "Everything you are against weakens you. Everything you are for empowers you.",
                author: "Wayne Dyer",
                tags: ["Wisdom", "Power Quotes"]
              },
              {
                id: "Iyw6zzbLWhh",
                content: "Do more than dream: work.",
                author: "William Arthur Ward",
                tags: ["Success"]
              },
              {
                id: "oQsNMDdiAJ",
                content: "The function of wisdom is to discriminate between good and evil.",
                author: "Cicero",
                tags: ["Wisdom"]
              },
              {
                id: "vbTwRyX9uu",
                content: "Genius unrefined resembles a flash of lightning, but wisdom is like the sun.",
                author: "Franz Grillparzer",
                tags: ["Wisdom"]
              },
              {
                id: "JQSnlxjgDa",
                content: "The greatest healing therapy is friendship and love.",
                author: "Hubert Humphrey",
                tags: ["Friendship"]
              },
              {
                id: "Q0q53LrtbHm0",
                content: "Those that know, do. Those that understand, teach.",
                author: "Aristotle",
                tags: ["Wisdom"]
              },
              {
                id: "xwABJFIJQVwW",
                content: "We need to find the courage to say NO to the things and people that are not serving us if we want to rediscover ourselves and live our lives with authenticity.",
                author: "Barbara De Angelis",
                tags: ["Life", "Wisdom"]
              },
              {
                id: "hvopOdCj4J6J",
                content: "We must learn our limits. We are all something, but none of us are everything.",
                author: "Blaise Pascal",
                tags: ["Wisdom"]
              },
              {
                id: "803LY8Jv_iuf",
                content: "Choose a job you love, and you will never have to work a day in your life.",
                author: "Confucius",
                tags: ["Inspirational", "Success", "Life"]
              },
              {
                id: "0lnHVeiNr0un",
                content: "They must often change, who would be constant in happiness or wisdom.",
                author: "Confucius",
                tags: ["Famous Quotes", "Wisdom"]
              },
              {
                id: "OCgCMtjcY3HJ",
                content: "Respect should be earned by actions, and not acquired by years.",
                author: "Frank Lloyd Wright",
                tags: ["Wisdom", "Life"]
              },
              {
                id: "Ls62KqLuousc",
                content: "We are all inclined to judge ourselves by our ideals; others, by their acts.",
                author: "Harold Nicolson",
                tags: ["Character"]
              },
              {
                id: "wftK-3DERCdh",
                content: "Correction does much, but encouragement does more.",
                author: "Johann Wolfgang von Goethe",
                tags: ["Famous Quotes"]
              },
              {
                id: "kKAMmRhnyps",
                content: "All the great performers I have worked with are fueled by a personal dream.",
                author: "John Eliot",
                tags: ["Success"]
              },
              {
                id: "HrDfFDfT_HDs",
                content: "Beauty is not in the face; beauty is a light in the heart.",
                author: "Kahlil Gibran",
                tags: ["Life"]
              },
              {
                id: "ldPGIu-fmv2e",
                content: "You were not born a winner, and you were not born a loser. You are what you make yourself be.",
                author: "Lou Holtz",
                tags: ["Success"]
              },
              {
                id: "uXYBVahYk_0g",
                content: "How wonderful that we have met with a paradox. Now we have some hope of making progress.",
                author: "Niels Bohr",
                tags: ["Famous Quotes", "Science"]
              },
              {
                id: "0rHhMXNYdyo",
                content: "What we achieve inwardly will change outer reality.",
                author: "Plutarch",
                tags: ["Change", "Wisdom"]
              },
              {
                id: "2iQU_-0nv8x",
                content: "Our strength grows out of our weaknesses.",
                author: "Ralph Waldo Emerson",
                tags: ["Famous Quotes"]
              },
              {
                id: "5UaK7cijxqOE",
                content: "Can miles truly separate you from friends... If you want to be with someone you love, aren't you already there?",
                author: "Richard Bach",
                tags: ["Love", "Friendship"]
              },
              {
                id: "akTyDRb1gL8x",
                content: "Things that were hard to bear are sweet to remember.",
                author: "Seneca the Younger",
                tags: ["Famous Quotes"]
              },
              {
                id: "je7UytrRlH-0",
                content: "The supreme art of war is to subdue the enemy without fighting.",
                author: "Sun Tzu",
                tags: ["Famous Quotes"]
              },
              {
                id: "9elExPH3DyRD",
                content: "The most formidable weapon against errors of every kind is reason.",
                author: "Thomas Paine",
                tags: ["Famous Quotes"]
              },
              {
                id: "EpDrsWX_c6li",
                content: "When people are like each other they tend to like each other.",
                author: "Tony Robbins",
                tags: ["Famous Quotes"]
              },
              {
                id: "drHiHnrlHdPg",
                content: "You have enemies? Good. That means you've stood up for something, sometime in your life.",
                author: "Winston Churchill",
                tags: ["Famous Quotes"]
              },
              {
                id: "-4WQ_JwFWI",
                content: "The three great essentials to achieve anything worthwhile are: Hard work, Stick-to-itiveness, and Common sense.",
                author: "Thomas Edison",
                tags: ["Wisdom"]
              },
              {
                id: "GPwpUR7iz-",
                content: "If you were to offer a thirsty man all wisdom, you would not please him more than if you gave him a drink.",
                author: "Sophocles",
                tags: ["Wisdom"]
              },
              {
                id: "y2-XO-7xRg",
                content: "Love is the attempt to form a friendship inspired by beauty.",
                author: "Cicero",
                tags: ["Friendship"]
              },
              {
                id: "WsswXPIbtq1p",
                content: "To hell with circumstances, I create opportunities.",
                author: "Bruce Lee",
                tags: ["Famous Quotes"]
              },
              {
                id: "HyGs4595-FfY",
                content: "True happiness means forging a strong spirit that is undefeated, no matter how trying our circumstances.",
                author: "Daisaku Ikeda",
                tags: ["Famous Quotes"]
              },
              {
                id: "gO2rEcTrwLo7",
                content: "When fate hands us a lemon, let's try to make lemonade.",
                author: "Dale Carnegie",
                tags: ["Famous Quotes"]
              },
              {
                id: "RXBrRJcq1Cih",
                content: "One must be fond of people and trust them if one is not to make a mess of life.",
                author: "E. M. Forster",
                tags: ["Famous Quotes"]
              },
              {
                id: "UGTlczrORBij",
                content: "Nobody made a greater mistake than he who did nothing because he could do only a little.",
                author: "Edmund Burke",
                tags: ["Famous Quotes"]
              },
              {
                id: "oJ0RtLuNOQM",
                content: "All serious daring starts from within.",
                author: "Harriet Beecher Stowe",
                tags: ["Famous Quotes"]
              },
              {
                id: "e1la14gLuob",
                content: "Trouble is only opportunity in work clothes.",
                author: "Henry J. Kaiser",
                tags: ["Famous Quotes"]
              },
              {
                id: "nDXa5iqd6KKD",
                content: "Freedom is what you do with what's been done to you.",
                author: "Jean-Paul Sartre",
                tags: ["Freedom"]
              },
              {
                id: "AugfMwbMNbp",
                content: "Love is the flower you've got to let grow.",
                author: "John Lennon",
                tags: ["Famous Quotes"]
              },
              {
                id: "cldBH7aZAkC_",
                content: "Quality is never an accident; it is always the result of intelligent effort.",
                author: "John Ruskin",
                tags: ["Famous Quotes"]
              },
              {
                id: "n1CKSLhX-iSp",
                content: "All that is necessary is to accept the impossible, do without the indispensable, and bear the intolerable.",
                author: "Kathleen Norris",
                tags: ["Famous Quotes"]
              },
              {
                id: "LJdZayGhYgjp",
                content: "Everything that exists is in a manner the seed of that which will be.",
                author: "Marcus Aurelius",
                tags: ["Famous Quotes"]
              },
              {
                id: "_tNDPuX5N3v5",
                content: "Waste no more time arguing about what a good man should be. Be one.",
                author: "Marcus Aurelius",
                tags: ["Famous Quotes"]
              },
              {
                id: "0FJtHaraIRKe",
                content: "We shall never know all the good that a simple smile can do.",
                author: "Mother Teresa",
                tags: ["Famous Quotes"]
              }
        ]
      
        // to generate the random number  with positive sign(0,100)
        let quotes_random_number=Math.floor(Math.abs(Math.random()* quotes_obj.length))

        // console.log(quotes_random_number);


        // add innerHTml quote and content
        quote_content.innerHTML=`<span class="quote">“</span>${quotes_obj[quotes_random_number].content}<span class="quote">”</span>`

        // add innerText author name
        author.innerText=`-- ${quotes_obj[quotes_random_number].author}`

        // console.log(quote_content);


       
    }

}

randon_quote()



































/*  

https://api.quotable.io/random is not working current 

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


*/