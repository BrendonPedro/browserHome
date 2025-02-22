// Challenge 1 - Regular
function reverseString(string) {
    return [...string].reverse().join(''); 
}

// Uncomment the line below and click ▶️ ("Run Code") to test your code
console.log (reverseString('codesmith prep'))
console.log(  'Challenge 1:', reverseString('codesmith prep') === 'perp htimsedoc' ? 'Correct!' : 'Try again!');

// *** EXPLANATION ***

// The spread operator creates an array by taking an iterable (string) and expanding it into individual elements
// For example, if str = "hello", then [...str] creates an array: ['h', 'e', 'l', 'l', 'o']

// .reverse() - This is an array method that reverses the order of elements:
// .join('') - This method combines all elements in an array into a string
    // The empty quotes '' specify that we want to join without any separator between characters
    // Default would be a comma