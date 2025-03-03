// SCRABBLE GROUP PROJECT

// const letterValues = {
//   a: 1, b: 3, c: 3, d: 2, e: 1, 
//   f: 4, g: 2, h: 4, i: 1, j: 8, 
//   k: 5, l: 1, m: 3, n: 1, o: 1, 
//   p: 3, q:10, r: 1, s: 1, t: 1, 
//   u: 1, v: 4, w: 4, x: 8, y: 4, 
//   z: 10}

// function wordScores(string) {
  
//   let sum = 0;
//   for (let i = 0; i < string.length; i++) {
//     sum += letterValues[string[i]];
//   }
//   return sum;
// }

// console.log(addString("hello"));
// console.log(addString("kitty"));
// console.log(addString("quiz"));

//////////////////////////////////////////////////////
///                                                ///
///           CS PREP GROUP PROJECT                ///
///                                                ///
///        JAVASCRIPT-FOCUSED APPLICATION          ///
///                                                ///
//////////////////////////////////////////////////////

// Describe the problem you’re solving
	// Creating a scrabble like game where each player gets 10 randomly assigned letters with varying points assigned to each letter
	// Each player creates a word with the assigned letters to score the maximum number of points.
	
// Demo the program (an actual walkthrough of the thing working - not a code walkthrough)
	//	

// Technical challenges (a lot of these will overlap - only share the most important)
	// Implementing a scoring system 
	// Generating random letters for both the vowels and consonants
	// Calculating the score for each letter and summing the value for the entire word
	// Displaying the values and the letters to each player before they select a word 

// Stretch features - what would you remove, change, or add if you could do this project again
	//  1. Validation checks to ensure only letters provided can be used  
  //  2. Add a time counter instead of manually recording the time
	//  3. Adding a closure/helper function to keep track of score for multiple games
	// 	4. If not limited to JS only, we would add a UI for the game using CSS anf HTML

// ----- ten4ten || Game Names? -----


// If we had more time:


// Scoring system -> An object that assigns point values to each letter (based off the scrabble point system)
const letterObj = {a:1, b:3, c:3, d:2, e:1, f:4, g:2, h:4, i:1, j:8, k:5, l:1, m:3, n:1, o:1, p:3, q:10, r:1, s:1, t:1, u:1, v:4, w:4, x:8, y:4, z:10}

// Function calculating word scores -> It loops through each letter in the word and adds up its point value
function wordScores(string) {
  
  let sum = 0;
  
  for (let i = 0; i < string.length; i++) {
    if (letterObj[string[i]]){
    sum += letterObj[string[i]];
  	}
  }
  return sum;
}

// Function generating 7 random letters (2 vowels & 5 consonants)
const generateLetters = () => {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];
  
  // We need to get 2 random vowels
  const chosenVowels = [];
  for (let i = 0; i < 4; i++) {
    const indexNumber = Math.floor(Math.random() * vowels.length); //'o'
    chosenVowels.push(vowels[indexNumber])
  }
  
  // We need to get 5 random consonants
  const chosenConsonants = [];
  for (let i = 0; i < 6; i++) {
    const indexNumber = Math.floor(Math.random() * consonants.length);
    chosenConsonants.push(consonants[indexNumber]);
  }
  
  // We need to combine the letters
  const combinedLetters = [...chosenVowels, ...chosenConsonants]; // Using spread to flatten into one array (without the spread the output is an array of arrays)
  
  // Now we need to shuffle these letters
  const shuffledHand = []; // This will be our output hand for each user
  const arrayCopy = [...combinedLetters]; // This is a copy of the combined letters
  
  // Picking a random letter while there are still letters in our arrayCopy
  while (arrayCopy.length > 0) {
    const indexNumber = Math.floor(Math.random() * arrayCopy.length); 
    const randomLetter = arrayCopy[indexNumber]; 
    
    shuffledHand.push(randomLetter); // Add it to the shuffled array for each user
    arrayCopy.splice(indexNumber, 1)      
  }
  return shuffledHand; // Return the shuffled letters instead
}

// Function to display a player's letters and their values
function displayLettersAndValues(playerNumber, letters) {
 
    console.log(`Letters for Player ${playerNumber}:`);

  for (let i = 0; i < letters.length; i++) {
    console.log(`${letters[i]}: ${letterObj[letters[i]]} points`);
  }
  
  return letters;
}

// This is our Game Flow
console.log(`* ========================= WELCOME TO TEN4TEN ========================= *`);
console.log(`* ======================== LET THE GAMES BEGIN ======================== *`)
console.log("Generating letters for both players...");

// Alternative -> shared letters to see who can come up with the better word/highest score
// const sharedLetters = generateLetters(); 

// Generate and display letters for both players
const player1Letters = generateLetters(); // = sharedLetters 
const player2Letters = generateLetters();

displayLettersAndValues(1, player1Letters);
displayLettersAndValues(2, player2Letters);

// Players, enter your words!
const player1Word = ""; // Player 1 -> Enter your word!
const player2Word = ""; // Player 2 -> Enter your word!




console.log(`Player 1 forms the word: ${player1Word}`);

const player1Score = wordScores(player1Word);

console.log(`Score for Player 1's word: ${player1Score} points`);

console.log(`Player 2 forms the word: ${player2Word}`);
const player2Score = wordScores(player2Word);
console.log(`Score for Player 2's word: ${player2Score} points`);

// Announce winner
console.log("===== RESULTS =====");
if (player1Score > player2Score) {
  console.log(`Player 1 wins with ${player1Score} points vs Player 2's ${player2Score} points!`);
} else if (player2Score > player1Score) {
  console.log(`Player 2 wins with ${player2Score} points vs Player 1's ${player1Score} points!`);
} else {
  console.log(`It's a tie! Both players scored ${player1Score} points.`);
}


// const user1 = wordScores("zeta");
// const user2 = wordScores("bat");

// //Add console.log into function
// console.log(`Score for User 1: ${user1}`)
// console.log(`Score for User 2: ${user2}`)






// filter to get values from object associated with user choice
// filtered values added to sum 

// cat (string) ->  -> sum using values from object
// sum += obj.key

// Score ()
// •	1 point: A, E, I, L, N, O, R, S, T, U
// * 2 points: D, G
// * 3 points: B, C, M, P
// * 4 points: F, H, V, W, Y
// * 5 points: K
// * 8 points: J, X
// * 10 points: Q, Z


