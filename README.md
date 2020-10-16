# Pokemon
Project 1 for GA

////////////////////
// Technologies Used
////////////////////
I used HTML and CSS for my front end, jQuery to develop my dom and JavaScript to give it functionality.

////////////////////
//  Approach Taken
////////////////////
1. I started by making objects for the player, computer and all the pokémon available.
2. I gave the player and computer the ability to pick one of the pokémon each.
3. I wrote the logic that would allow the player and computer to battle their pokémon.
4. I added a type advantage system to give more depth to the battle mechanics.
5. I made it so when a pokémon got to 0 health, it would be shifted out the array and into a new one so that it couldn't be used in that battle anymore.
6. I wrote outcome logic so when all the player's or computer's pokémon team array was empty, the battle would end.
7. I then started on making the webpage look good and work well.
8. I added "pages" to the dom so when the user clicked the dialogue box or a button it would move to the next screen and continue the game.
9. I then implemented the battle scene onto the webpage and set up gifs and styled buttons to make it look better.
10. And lastly I went back over my code and cleaned up all the unnecessary stuff and annotated over everything.

////////////////////
// Link to live site
////////////////////
https://raedanwin.github.io/Pokemon/

////////////////////
// Unsolved Problems
////////////////////
The main unsolved problem is that when you open the pokémon/items menu on the fight screen, the pokémon gifs move out of place while its open.
A couple other small ones are that if you don't close the battle menu before the end of the battle it stays up for the rest of the game and the gifs of the pokémon don't disappear after moving onto the next screen.

////////////////////
// Technical Challenges
////////////////////
The biggest technical challenges I faced were: 
1. I had issues with my battle logic in that fainted pokémon would still be able to attack so the battle would never end.
2. Probably my biggest issue was that I couldn't progress past my third screen. It would do the first and second or the third and fourth but never together.
3. I had issues with setting a timeout so it would only fire once, it would keep firing everytime I tried to move on the next screen and go back to screen 6. I never figured out how to fix that one and eventually settled on a different solution.
4. And finally my last problem was scaling and positioning my picure divs to be in the right spots during the battle phase. I had to pretty much rework that screen to get it to work.

////////////////////
// Improvements I Would Make
////////////////////
1. I would let you continue to battle after the initial fight so you could level up and encounter more pokémon.
2. I would add catching logic to allow the player to get more than 1 pokémon.
3. I would add an API to give more variety to the pokemon selection.
4. I would make some more quality of life changes like figuring out how to make some screens time-based, fix the menu and pokémon showing up after the battle, add more items and let you change pokémon and use items in the middle of a battle.
5. I would give the Run button in the battle functionality.
