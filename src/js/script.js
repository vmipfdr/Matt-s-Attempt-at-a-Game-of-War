

let deck = [];
let suits = ['Hearts','Diamonds','Clubs','Spades'];
let faces = [ 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
let playerone = [];
let playertwo = [];
let tabledeck = [];


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

let flip = () => {
	tabledeck.push(playerone[0], playertwo[0]);
	playerone.splice(0,1);
	playertwo.splice(0,1);
	console.log('shot');
	if (tabledeck[0].face > tabledeck[1].face) {
		playerone.push(tabledeck[0], tabledeck[1]);
		tabledeck.splice(0,2)
	} else if (tabledeck[1].face > tabledeck[0].face) {
		playertwo.push(tabledeck[0], tabledeck[1]);
		tabledeck.splice(0,2)
	} else if (tabledeck[0].face = tabledeck[1].face) {
		goToWar();
	}
}

let goToWar = () => {
	// needs some refinement on amount of cards collected
	tabledeck.push(playerone[0, 3], playertwo[0, 3]);
	playerone.splice(0, 3);
	playertwo.splice(0, 3);
	console.log('fire for effect');
	if (tabledeck[0].face > tabledeck[1].face) {
			playerone.push(tabledeck[0], tabledeck[1]);
			// account for all of the cards won
			tabledeck.splice(0,3)
		} else if (tabledeck[1].face > tabledeck[0].face) {
			playertwo.push(tabledeck[0], tabledeck[1]);
			// account for all of the cards won
			tabledeck.splice(0,3)
		} else if (tabledeck[0].face = tabledeck[1].face) {
			goToWar();
		}
}

goToWar(tabledeck);
console.log(playerone, playertwo, tabledeck);






// let flip = () => {
// 	tabledeck.push(playerone[0], playertwo[0]);
// 	playerone.splice(0,1);
// 	playertwo.splice(0,1);
// 	console.log('flipped');
// }

// flip(tabledeck);
// console.log(tabledeck);

// if (tabledeck[0].faces < tabledeck[1].faces); {
// 	tabledeck.splice(0,2);
// 	playerone.push(tabledeck[0], tabledeck[0]);
// } else if (tabledeck[1].faces < tabledeck[0].faces); {
// 	tabledeck.splice(0,2);
// 	playertwo.push(tabledeck[0], tabledeck[0]);
// }



// flip(tabledeck)
// console.log(tabledeck);

// let battle = () => {
// 	if (playerone.length !== 0) {
// 		flip();
// 	}
// 	else if (playertwo.length !== 0) {
// 		flip();
// 	}
// 	let flip = () => {
// 		tabledeck.push(playerone[0], playertwo[0]);
// 		playerone.splice(0,1);
// 		playertwo.splice(0,1);
// 		console.log('flipped');
// 	if (tabledeck[0] > tabledeck[1]) {
// 		playerone.push(tabledeck[0]faces, tabledeck[1].faces);
// 	}
// 	else if (tabledeck[1].faces > tabledeck[0].faces) {
// 		playertwo.push(tabledeck[0], tabledeck[1]);
// 	}
// 	}
// }

// battle(tabledeck);
// console.log(tabledeck);

// while (playerone.length !== 0 || playertwo.length !==0) {
// 	if (playerone.length < 0) {
// 		flip();
// 	}
// 	else if (playertwo.length < 0) {
// 		flip();
// 	}
// }







//Requirements to play war
//4. build card flipping system (unshift from each array into tableDeck)  this is where all the work is
	//this has to have an if statement for one card higher than another
	//another else if statement for two cards of same value (total war) (unshift 3 cards, then flip the last)
	//build round winning collection (if statement that's used in two places?!)
//6. build a simple announce winner if either player array is empty

	// function that flips cards from player arrays into tabledeck
		// make sure playerOne always puts their card in first
		// if playerOne card is higher than playerTwo = pop both cards into playerOne array
		// else if playerTwo card is higher than playerOne = pop both cards into playerTwo array
		// else if both cards are equal than play totalWar
			//function total war
				// if playerOne.length < 3 can't play
				// if playerTwo.length < 3 can't play		
				// bring in 4 cards compare the last statement
					//if playerOne card is higher than playerTwo = pop both cards into playerOne array
					// else if playerTwo card is higher than playerOne = pop both cards into playerTwo array
					// else if both cards are equal than play totalWar














