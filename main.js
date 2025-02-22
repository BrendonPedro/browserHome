

// // 1. Arrays & their built-in higher-order functions (map, filter, reduce)


// // *****MAP FUNCTION*****

// // Map takes an array and a callback function
// // Creates a new array
// // Iterates through each element
// // Applies the callback function to each element
// // Pushes the result to the new array
// // Return the new array

// // ***IMPERATIVE VERSION - MAP FUNCTION (UNDER THE HOOD - STEP BY STEP)***
// const copyArrayAndManipulate = function(array, instruction){ // HIGHER-ORDER FUNCTION
//     const output = [];
//     for (let i = 0; i < array.length; i++){ // array.forEach(item => {
//         output.push(instruction(array[i])); // output.push(instruction(item))
//     }                                       // });
//     return output;                          
// }                                           

// // CALLBACK FUNCTION
// const squareNum = function(num) {
//     return num**2;
// }

// myArray = [1, 2, 3];

// console.log(copyArrayAndManipulate(myArray, squareNum));

// // ***DECLARATIVE VERSION - MAP FUNCTION (MORE READABLE)***
// const myArrayMapped = myArray.map(squareNum);
// // const myArrayMapped = myArray.map(num => num**2);
// // const myArrayMapped = myArray.map((num) => {
// //     return num**2
// // });
// console.log (myArrayMapped);


// // *****SUMMARY*****

// // 1. Array Higher-Order Functions (for transforming arrays):

//     // map - transform each element
//     [1, 2, 3].map(x => x * 2)  // [2, 4, 6]

//     // filter - select elements that match condition
//     [1, 2, 3].filter(x => x > 1)  // [2, 3]

//     // reduce - combine elements into single value
//     [1, 2, 3].reduce((sum, x) => sum + x, 0)  // 6

//     // forEach - execute code for each element (no return)
//     [1, 2, 3].forEach(x => console.log(x))


// // 2. Object Methods (for converting between objects and arrays):
    
//     const obj1 = { a: 1, b: 2 };

//     // Convert object TO arrays
//     Object.keys(obj1)     // ['a', 'b']
//     Object.values(obj1)   // [1, 2]
//     Object.entries(obj1)  // [['a',1], ['b',2]]

//     // Convert array TO object
//     Object.groupBy([{age: 20}, {age: 20}], x => x.age)
//     // { 20: [{age: 20}, {age: 20}] }


// // 3. Loop Types (for iteration):

//     // for...of: iterate array values
//     const arr = [1, 2];
//     for (const value of arr) {
//         console.log(value);  // 1, 2
//     }

//     // for...in: iterate object keys
//     const obj = { a: 1, b: 2 };
//     for (const key in obj) {
//         console.log(obj[key]);  // 1, 2
//     }


// // 4. Higher-Order Functions (general concept):

//     // Functions that take functions as arguments
//     function doTwice(func, value) {
//         return func(func(value));
//     }

//     // Or return functions
//     function multiply(x) {
//         return function(y) { return x * y; }
//     }

    const fruits = [
        { name: "Banana", calories: 28 },
        { name: "Strawberry", calories: 3 },
        {name: "Avocado", calories: 28 },
    ]

    let fruitsByCalories = {};

    fruits.forEach((fruit) => {
        if (!fruitsByCalories[fruit.calories]) {
            fruitsByCalories[fruit.calories] = []
        }
        fruitsByCalories[fruit.calories].push(fruit)
    })

    console.log(fruitsByCalories)

    const groupByCalories = Object.groupBy(fruits, fruit => fruit.calories);
    console.log(groupByCalories)
    
    // create a function groupBy 
    const groupBy = (array, callback) => {
        // input: array and a callback
        // output: object
        const obj = {};
        
        // iterate through the input array
        for (let i = 0; i < array.length; i++){
         // add key value pairs into our object
         let currentElement = array[i];
          let callbackResult = callback(currentElement);   
         // key: each result of passing in the elements into the callback
            // value: an array of all the elements that resulted in that key
        // if the property doesn't exist
          // add the key value pairs into that object
          if (!obj[callbackResult]){
            obj[callbackResult] = [currentElement]
          } else {  
        // else if the property does exist
         // access the value, add the current element into the existing value array
         obj[callbackResult].push(currentElement)
        }
    };
    // return object
    return obj;
};

const decimals = [1.3, 2.1, 2.4];
const floored = (num) => Math.floor(num)
console.log(groupBy(decimals, floored));






