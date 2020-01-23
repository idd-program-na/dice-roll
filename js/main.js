// First you will have to store all the sides of the dice as options for the button
// Then you will make the button function for every time it is clicked
// The button will have a total of 6 options for every time it is clicked

rollBtn.addEventListener('click', (event)=> {

  let randomNum = Math.floor(Math.random()*6) + 1;
  console.log(`You rolled ${randomNum}`);

  document.querySelector(`.diceImg`)
  .innerHTML = 
  (`<img id="dice${randomNum}" src="img/dice${randomNum}.svg" alt="Dice${randomNum}">You rolled ${randomNum}`);
})

//dice.setAttribute('img','src','img/dice2.svg')

/*/Problem A
: Roll a random interger between 1 and 6


*/

/* Problem B
: Change the output to show: You rolled 5
1. Find the element (the whole output or just the number)
2. Change the contents of the element to reflect a new value
*/

/* Problem C
Change the dice image to match the roll
1. Find the img element
2. Change the src attribute's url to match the dice roll
*/

/* Problem D: 
When the button is clicked, re-roll the dice
1. Find the <button> element
2. Add a click listener that will run all previous steps again
*/
// List all the sides of the dice as variables


//let diceOne = Math.floor(Math.random() * 6);

// FIND THE BUTTON
//let rollBtn = document.querySelector ('#rollBtn')

// ASSIGN CLICK LISTENER TO BUTTON & OUTPUT MSG TO TEST
/*rollBtn.addEventListener=('click', (event)=> {
  console.log('!Click!')
})*/

//CHANGE THE DICE IMAGE

// A) find the img
//let bodyElement = document.querySelector ('img')

// B) Assign an img to the backgroundColor property
// bodyElement.img.src = 'img/dice2.svg';

// B) Assign a color to the backgroundColor property
//dice.setAttribute('img','src','img/dice2.svg')

// ******************************************************
// ********************* FUNCTIONS *********************
// ******************************************************


// ******************************************************
// ****************** APPLICATION CODE ******************
// ******************************************************
