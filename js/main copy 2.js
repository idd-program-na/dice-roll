// First you will have to store all the sides of the dice as options for the button
// Then you will make the button function for every time it is clicked
// The button will have a total of 6 options for every time it is clicked
// 

let rollBtn = document.querySelector ('#rollBtn')

rollBtn.addEventListener=('click', (event)=> {
  let diceOne = Math.cell(Math.random() * 6);
  let diceTwo = Math.cell(Math.random() * 6);
  let diceThree = Math.cell(Math.random() * 6);
  let diceFour = Math.cell(Math.random() * 6);
  let diceFive = Math.cell(Math.random() * 6);
  let diceSix = Math.cell(Math.random() * 6);

  console.log(`dice(${diceOne}, ${diceTwo}, ${diceThree}, ${diceFour}, ${diceFive}, ${diceSix})`)

  let bodyElement = document.querySelector ('img')
  bodyElement.img = '';
  
  //dice.setAttribute('img','src','img/dice2.svg')

})
// List all the sides of the dice as variables


//let diceOne = Math.floor(Math.random() * 6);

// FIND THE BUTTON


// ASSIGN CLICK LISTENER TO BUTTON & OUTPUT MSG TO TEST


//CHANGE THE DICE IMAGE

// A) find the img


// B) Assign an img to the backgroundColor property
// bodyElement.img.src = 'img/dice2.svg';

// B) Assign a color to the backgroundColor property

// ******************************************************
// ********************* FUNCTIONS *********************
// ******************************************************


// ******************************************************
// ****************** APPLICATION CODE ******************
// ******************************************************
