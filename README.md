# Lab: Game of War

[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

## Description

Remember the card game ["War"](https://bicyclecards.com/how-to-play/war/)?

Two players start the game by splitting a deck of 52 standard playing cards
evenly. Each stack is facedown, and players cannot look at the cards in their
stack or rearrange them.

The objective of the game is to play until one player has all 52 cards in their
stack.

To play, each player reveals the top card in their stack. The player who played
the card with the higher rank (Aces high) takes both cards and puts them at the
bottom of their stack in an arbitray order.

If there is a tie, then it's War! In the card game each player adds places the
top three cards of their stack face down, and then each player reveals the top
card again. Whoever wins out of the second reveal takes all of the cards, and if
there is another tie the process repeats until there is a winner.

(Don't worry, for MVP we simplify how to handle a tie.)

## Prerequisites

- Javascript
- Object Oriented Programming

## Instructions

1. Fork and clone this repository.
2. Change into the new directory.
3. Fulfill the listed requirements.

Please turn in your submission by the deadline on your cohort calendar.

## Requirements

1. Create a class for a Card, with the properties "suite" and "rank".
2. Create a class for a Player, with the property "stack".
3. Use the Card class generate a standard deck of 52 playing cards, and use the
   Player class to generate two Players for the game.
4. "Shuffle" the deck and distribute it evenly to two players - one user, one
   computer
5. Add the functionality for the user to "play", and handle the logic for adding
   the cards to bottom of the stack of the winning player.
6. In the case of the tie, each player takes the card they played and places it
   at the bottom of their stack, and then the game automatically plays the next
   round.
7. Once one player has all 52 cards in their stack, end the game and declare
   them the winner!

## Bonus

Add the logic to resolve ties the same way as the original card game, where each
player places three more cards face down and reveals a new top card until one
player wins the entire pot.

## Hint

- Adding a property for the "value" of a rank could make it easier to compare
  face cards (ie: Jack < Queen).
- It could be helpful to have a class to represent the overall Game,
  particularly when handling ties and other complicated game states.

## Plagiarism

Take a moment to refamiliarize yourself with the
[Plagiarism policy](https://git.generalassemb.ly/DC-WDI/Administrative/blob/master/plagiarism.md).
Plagiarized work will not be accepted.

## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
2.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
