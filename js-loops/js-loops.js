console.log('-- init script');

var myTitle;
// print a variable in the console
// the variable is UNDEFINED because it has NO VALUE assigned to it
console.log(myTitle);

// the variable returns as NULL because it has a WRONG VALUE assigned to it
// NULL means there is something wrong in the code
myTitle = document.getElementById('name');
console.log(myTitle);

// the value of the variable gets loged
myTitle = document.getElementById('appTitle').innerText;
console.log(myTitle);

// say my name APP

// DEFINE A VARIABLE

// var allTheNames = [] - all the names è uguale a una variabile vuota
var allTheNames = [];

var nameButton = document.getElementById('nameButton');
var nameInput = document.getElementById('myName');
var messageBox = document.getElementById('messageBox');


nameButton.addEventListener('click', sayMyName);

// nell'input field con id=myName quando inserisco un nome lo vedo loged nella console 
// var inputText = document.getElementById('myName');

function sayMyName() {
  // 1. check if the string is not empty e salvare solo se c'è almeno un carattere
  // lenght = quanti caratteri deve avere l'input field

  // console.log(nameInput.value.length)
  // se ci sono più di 0 caratteri nell'input field
  if (nameInput.value.length > 0 ) {
    allTheNames.push(nameInput.value);
    console.log(allTheNames);
    var lastNameAdded = allTheNames[allTheNames.length - 1];
    updateTheMessage('Your have succesfully added ' + lastNameAdded + ' to the list', true);
    console.log(allTheNames[allTheNames.length - 1]);
  } else {
    console.log('No name');
    updateTheMessage('no name entered', false);
  }

  // 2. una volta che hai salvato , cancellare cosa c'è nell'input per scrivere un altro nome
  nameInput.value = '';
  // vogliamo mettere il cursore sull'input field
  nameInput.focus();

  // in the console.log un messaggio per noi per vedere nella console se il codice funziona
  // console.log(inputText.value);
  
// STORE IN THAT VARIABLE USING THE .push('value') METHOD
// ((((ogni volta che definisci una var l'elemento viene sovrascritto))))


// allTheNames.push(nameInput.value);
// console.log(allTheNames);

// SUCCES


}


// push = add to the end of an array
// pop = remove from the end of an array

// messaggio all'interno del box
function updateTheMessage(messageText, messageSuccess) {
  messageBox.innerText = messageText;

// se il messaggio è giusto aggiungo la classe dell'html e il css / se è sbagliato l'altra classe
  if (messageSuccess == true) {
    messageBox.classList.add('message-success');
    messageBox.classList.remove('message-error');
  } else {
    messageBox.classList.add('message-error');
    messageBox.classList.remove('message-success');
  }
}

// questo è quello all'interno con questa funzione
// updateTheMessage('helloooo', true);