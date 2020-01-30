//Requirements to play war
//1. build car deck
	//consider using a for loop initializing at 2 and going <=10
	//consider using the print this 4 times
	//put these into objects
//2. build deck shuffling system
//3. build card distribution system
//4. build card flipping system
//5. build round winning collection (if statement?)
//6. build 

let deck = [];
let suits = ['Hearts','Diamonds','Clubs','Spades'];
let faces = [ 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
let fullDeck = []

for (let i = 0; i < suits.length; i++){
	let suit = suits[i];
	for (let j = 0; j < faces.length; j++){
		let face = faces[j];
		let card = {
			suit: suit,
			face: face,
		}
		deck.push(card)
	}
}




// // let cards = concat(suits + card)
// // let player = ['Player1', 'Player2'];
// // cards.buildCards (cards) => console.log()
// const makePerson = (firstname, lastname) => {
// 	return{firstname: firstname, lastname: lastname}
// }
// console.log(makePerson('Zakk', 'F'))



// playing round 
// var cards = ['a','b', 'c', 'd', 'e', 'f'];
// cards.forEach(letter => console.log(letter));