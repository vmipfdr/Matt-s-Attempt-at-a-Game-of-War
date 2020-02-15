

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
		deck.push(card); 
		console.log('cards built');
	}
}
let shuffle = (array) => {
	for (let i = array.length - 1; i > 0; i--){
		let j = Math.floor(Math.random()* (i + 1));
		let temp = array[i];
		array[i] = array [j];
		array[j] = temp;
	}
	console.log('shuffled');
	return array;
}
//based on rules, i should no use reshuffle at all
let reShuffle = (array) => {
	for (var i = array.length - 1; i > 0; i--){
		var j = Math.floor(Math.random()* (i + 1));
		var temp = array[i];
		array[i] = array [j];
		array[j] = temp;
	}
	console.log('reshuffled');
	return array;
}

shuffle(deck);
// console.log('cards shuffled')

let dealCards = () => {
	playerone = deck.splice(0, 26)
	playertwo = deck.splice(0, 26)
}

dealCards(deck);
// console.log('ammo distroed');
console.log(playerone, playertwo, tabledeck);

let flip = () => {
	tabledeck.push(playerone[0], playertwo[0]);
	playerone.shift(0,1);
	playertwo.shift(0,1);
	console.log('flipped');
	// console.log(tabledeck);
	if (tabledeck[0].face > tabledeck[1].face) {
		playerone.push(tabledeck[0], tabledeck[1]);
		tabledeck.splice(0,2)
		console.log('playerone won');
		console.log(playerone, playertwo, tabledeck);
	} else if (tabledeck[1].face > tabledeck[0].face) {
		playertwo.push(tabledeck[0], tabledeck[1]);
		tabledeck.splice(0,2)
		console.log('playertwo won')
		console.log(playerone, playertwo, tabledeck);
	} else if (tabledeck[0].face = tabledeck[1].face) {
		console.log(tabledeck);
		goToWar();
		console.log('WAR!')
		console.log(playerone, playertwo, tabledeck);
	}
}

flip(tabledeck);
console.log('round complete');
console.log(playerone, playertwo, tabledeck);

let goToWar = () => {
	tabledeck.push(playerone[0], playerone[1], playerone[2], playerone[3], playertwo[0], playertwo[1], playertwo[2], playertwo[3]);
	playerone.shift(0, 3);
	playertwo.shift(0, 3);
	console.log(playerone, playertwo, tabledeck);
	console.log('fire for effect');
	if (tabledeck[5].face > tabledeck[9].face) {
			console.log(tabledeck.length);
			playerone.push(tabledeck.length);
			tabledeck.splice(tabledeck.length);
			console.log('playerone won');
			console.log(playerone, playertwo, tabledeck);
		} else if (tabledeck[9].face > tabledeck[5].face) {
			console.log(tabledeck.length);
			playertwo.push(tabledeck.length);
			tabledeck.splice(tabledeck.length);
			console.log('playertwo won');
			console.log(playerone, playertwo, tabledeck);
		} else if (tabledeck[5].face = tabledeck[9].face) {
			goToWar();
			console.log('WAR!');
			console.log(playerone, playertwo, tabledeck);
		}
}

//I need to make an if statement for players can't play 

for (let i = 0; i < 100; i++) {
	flip(playerone, playertwo);
}




















// let goToWar = () => {
// 	// needs some refinement on amount of cards collected
// 	tabledeck.push(tabledeck.push(playerone[0], playerone[1], playerone[2], playerone[3], playertwo[0], playertwo[1], playertwo[2], playertwo[3]));
// 	playerone.splice(0, 3);
// 	playertwo.splice(0, 3);
// 	console.log('fire for effect');
// }


// goToWar(tabledeck);
// console.log('good effects, target destroyed');
// console.log(playerone, playertwo, tabledeck);









