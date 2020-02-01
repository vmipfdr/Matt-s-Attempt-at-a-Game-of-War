//Requirements to play war
//3. build card distribution system (splice into playerone and playertwo)
//4. build card flipping system (unshift from each array into tableDeck)  this is where all the work is
	//this has to have an if statement for one card higher than another
	//another else if statement for two cards of same value (total war) (unshift 3 cards, then flip the last)
	//build round winning collection (if statement that's used in two places?!)
//6. build a simple announce winner if either player array is empty

let deck = [];
let suits = ['Hearts','Diamonds','Clubs','Spades'];
let faces = [ 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
let playerone = [];
let playertwo = [];
let tableDeck = [];


for (let i = 0; i < suits.length; i++){
	let suit = suits[i];
	for (let j = 0; j < faces.length; j++){
		let face = faces[j];
		let card = {
			suit: suit,
			face: face,
		}
		deck.push(card)
		console.log('cards built')
	}
}
let shuffle = (array) => {
	for (var i = array.length - 1; i > 0; i--){
		var j = Math.floor(Math.random()* (i + 1));
		var temp = array[i];
		array[i] = array [j];
		array[j] = temp;
	}
	return array;
}

shuffle(deck);
console.log('cards shuffled')

let dealCards = () => {
	playerone = deck.splice(0, 26)
	playertwo = deck.splice(0, 26)
}

dealCards(deck);
console.log('cards dealt');













// let deal = (deck) => {
// 	for (var i = deck.length; i > 0; i / 2){
// 		var j = Math.floor(deck.slice(0, 25));
// 		var temp = playerone[i];
// 		deck[i] = deck [j];
// 		playertwo[j] = temp;
// 	}
// 	return deck;
// };




