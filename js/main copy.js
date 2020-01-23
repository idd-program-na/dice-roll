// First you will have to store all the sides of the dice as options for the button
// Then you will make the button function for every time it is clicked
// The button will have a total of 6 options for every time it is clicked

// ******************************************************
// ********************* VARIABLES **********************
// ******************************************************

// List all the sides of the dice as variables
let diceOne = 1
let diceTwo = 2
let diceThree = 3
let diceFour = 4
let diceFive = 5
let diceSix = 6

console.log(`dice(${diceOne}, ${diceTwo}, ${diceThree}, ${diceFour}, ${diceFive}, ${diceSix})`)

//let diceOne = Math.floor(Math.random() * 6);

// FIND THE BUTTON
let rollBtn = document.querySelector ('#rollBtn')

// ASSIGN CLICK LISTENER TO BUTTON & OUTPUT MSG TO TEST
rollBtn.addEventListener=('click', (event)=> {
  console.log('!Click!')
})

//CHANGE THE DICE IMAGE

// A) find the img
let bodyElement = document.querySelector ('img')

// B) Assign an img to the backgroundColor property
// bodyElement.img.src = 'img/dice2.svg';

// B) Assign a color to the backgroundColor property
dice.setAttribute('img','src','img/dice2.svg')

// ******************************************************
// ********************* FUNCTIONS *********************
// ******************************************************


// ******************************************************
// ****************** APPLICATION CODE ******************
// ******************************************************
