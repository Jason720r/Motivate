Motivate

Video Demo: 

Description:  "Motivate" is a Google Chrome Extension that allows users to view random inspirational 
               and introspective quotes by clicking the "Random Quote" button.

               Simple in design, it was my first attempt at building a Chrome Extension, I've built full-stack applications in JavaScript/React before but an extension was new territory. I wanted to create something new but not anything overly-ambitious. This was mainly due to a packed schedule(mostly work, fitness and other projects) I looked up a tutorial on YT before I started, understanding what was required in order to create and deploy a Chrome Extension, which if I'm being honest, was a lot smoother than I expected.

               Motivate required the use of an External API for generating the quotes, although If I really wanted too I could hard-code a database containing quotes from me to choose from. The implementation of the "Quotes API" from [Ninja API](https://api-ninjas.com/api/quotes) saved me lots of time from having to look up and code quotes into the database. I first tried a "Quote" API from "Rapid API's" but it seems some of their options didn't work too well, at least for my particular situation.

               I already had some experience with JS before CS50, so concepts such as "Event Listeners" and the "getElementById" method weren't too foreign to me, I also understand that JS is sync unless stated otherwise(async). This means I structured my code as I would if someone were to read it from top-to-bottom, or sequential order. I only say this since I am used to React, where I was able to employ the use of useState and useEffect for asynchronous operations, so this was a nice refresher and reminder of how important readability is.

               The one thing I struggled with the most during this project was fetching the data from the API, I forgot that I needed a unique key to be given permission to fetch the data(really silly mistake on my part). I created an Event Listener that would wait/listen for the user to 'click' on the 'Random Quote' button, fetching the specific object properties(quote and author) to display for the user. Then I used the 'getElementById' method to reference the Event Listener and invoke the fetch function in my HTML.

               I pulled a CSS background style from [uiCookies] (https://uicookies.com/css-background-pattern/) to create a gradient background for Motivate. I edited the RGB properties for the style to a more minimalist/bland design. 

               Overall, this has been a great journey/process in improving my fundamental skills as a developer. Happy to say that none of my time or effort was wasted, thank you to everyone on the CS50 team.