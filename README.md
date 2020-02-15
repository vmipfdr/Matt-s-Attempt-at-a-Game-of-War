# Matt's Game of War Re-imagined

### Game of War

Remember the card game ["War"](https://bicyclecards.com/how-to-play/war/)?

I deployed the game here:  https://vmipfdr.github.io/Matt-s-Game-of-War/

Two players start the game by splitting a deck of 52 standard playing cards
evenly. Each stack is facedown, and players cannot look at the cards in their
stack or rearrange them.

The objective of the game is to play until one player has all 52 cards in their
stack.

## Requirements

To play, each player reveals the top card in their stack. The player who played
the card with the higher rank (Aces high) takes both cards and puts them at the
bottom of their stack in an arbitrary order.

If there is a tie, then it's War! In the card game each player adds places the
top three cards of their stack face down, and then each player reveals the top
card again. Whoever wins out of the second reveal takes all of the cards, and if
there is another tie the process repeats until there is a winner.

### Technical Requirements

For this project, I built it so we can play the game through the console in the browser. Additionally, my project should meet the following requirements:

- I hope to run my game without errors
- The game should start when the player loads the page. Create your two players
    and start the rounds!
- Print a message for each "round" of the game showing the cards played by each
    user, who won the round, and how many cards each player now has.
