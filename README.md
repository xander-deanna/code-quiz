code-quiz - Homework assignment for 01/20/2021

---------------------------------------------------------

This week's assignment was to make a timed quiz on JavaScript fundamentals that stores high scores.

I started by building the bare bones of my site using HTML and javaScript. I also threw in some HTML elements to help me visualize formatting, although many would be deleted later and created dynamically through javaScript. 

After the HTML and CSS was complete, I started working on the javaScript. I started first with my timer. I tied the timer to a navbar element and made sure that it was displaying correctly. I also had the timer display the text "Times up!" once the time had reached 0. I had some trouble with this timer since I decided I wanted to format to display as 00:XX. I set an if statement to display a string of "00:0" + time, once time remaining was below 10 (single digit). Otherwise a string of "00:" + time would display. 

After I was happy with my timer I went ahead and started thinking of quiz questions. I decided the easiest way to go about this in my opinion, would be to create an array of objects. This for me personally was the easiest part of this assignment.

From here I continued to work on the functions in my script and thought about how to create my DOM elements. I did find a tutorial online that helped with this, however I had to do some serious editing and manipulating to add the buttons I wanted to create for visual appeal. The tutorial had only helped create regular list items with innerHTML. I was able to first create the list items then append a child to reach "empty" list item. Because I started on CSS first and had already created and deleted filler elements in HTML, I already knew how everything would look.

After I had the site rendering the HTML I needed, I got started on some funtions to help me compare right and wrong answers, as well as penalize the user for wrong answers. For fun, I added some sound effects. These had to first be linked through the HTML but were referenced using JS variables and "getElementByID".

I'm much farther along than I was before and am going to be doing another push to my repository. I may or may not be done with the highscore page by then, however I'm quite happy with what I have so far regardless. If I have time after completing the highscore page, I may search for better questions / add more to the quiz. Enjoy!

---------------------------------------------------------
https://github.com/xander-deanna/code-quiz
https://xander-deanna.github.io/code-quiz

Thanks for grading! :)