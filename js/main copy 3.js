// First you will have to store all the sides of the dice as options for the button

// List dice sides as variables - 6 Sides

let diceOne = `img/dice1.svg`;
let diceTwo = `img/dice2.svg`;
let diceThree = `img/dice3.svg`;
let diceFour = `img/dice4.svg`;
let diceFive = `img/dice5.svg`;
let diceSix = `img/dice6.svg`;


console.log
(`You rolled ${Math.round(Math.random() * 10)}`);

// Then you will make the button function for every time it is clicked

let rollBtn = document.querySelector(`.rolling`)

rollBtn.addEventListener(`click`, event => {
  console.log(`!Click!`)
})

// The button will have a total of 6 options for every time it is clicked
// 

  

//STEP 3: Change the background img of the  div

// A) find the div
let bodyElement = document.querySelector ('body')

// B) Assign a color to the backgroundColor property
bodyElement.style.backgroundImage = 'img/dice2.svg';
  //dice.setAttribute('img','src','img/dice2.svg')
