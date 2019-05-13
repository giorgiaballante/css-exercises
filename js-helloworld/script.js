// single line comment

/* multi
line
comment */

// to log information to the console
// we can use the console.log(); function

console.log('hello world');
// single line instruction - statement
// has to end with a semicolon - ; -

var x = 5

console.log(5 / 15);

// variable
// declare a variable 
var messageToTheWorld = 'Hello World';
var myName = 'Giorgia';

console.log(messageToTheWorld + ' from ' + myName);

// try to substitute the content of h1 element           
// nel documento html trova elemento ID dal nome 'title'
var titleElement = document.getElementById('title');
// innerHTML manipulates the content between the HTML tags
titleElement.innerHTML = messageToTheWorld + ' from ' + myName;

/*******
 * Manipulate CSS
 ********/
// select the element with the ID 'styleButton'
var buttonStyleElement = document.getElementById('styleButton');

buttonStyleElement.addEventListener('click', changeTextColor);

// a variable storing number
var counter = 0;

// function containing some code with all the instructions
function changeTextColor() {

  var titleColors = [ 'red', 'purple', 'pink', 'orange', 'green' ];
  
  /*
  // print the whole Array
  console.log(titleColors);
  // print the Array lenght
  console.log(titleColors.length);
  // print the first item in the Array
  console.log(titleColors[0]);
  console.log(titleColors[1]);
  console.log(titleColors[3]);
  // print the last item in the Array
  console.log(titleColors[titleColors.length-1]);
  */
 
  // cambio colore al titolo
  // assign a new value to the color property of the element
  titleElement.style.color = titleColors[counter];

  if(counter == titleColors.length - 1) {
    console.log('WOOHOO IT IS TRUE');
    counter = -1;
  }

  counter = counter + 1;
  // oppure counter ++;   - per aumentare di 1

  console.log('Color changed');
};

// execute a function
// changeTextColor();

// console.log('This is the element:' + buttonStyleElement);
// buttonElement.classList.add('my-big-button')