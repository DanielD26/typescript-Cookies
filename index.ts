// Import stylesheets
import './style.css';
import { Cookie } from './models/Cookie';
import { ColourEnums } from './models/ColoursEnum';
import { SprinkleCookie } from './models/SprinkleCookie';

const cookieSelector: HTMLSelectElement = document.getElementById(
  'cookieSelector'
) as HTMLSelectElement;
const colourSelector: HTMLSelectElement = document.getElementById('colourSelector') as HTMLSelectElement;
// Create a array/list of cookies named cookies
let cookiesArray: Array<Cookie> = [];
const coloursList: ColourEnums[] = [
  ColourEnums.Brown, ColourEnums.Black, ColourEnums.Blue, ColourEnums.Pink, ColourEnums.White
];

// create an init() function
// init() will create two cookies called Cookie1 and Cookie2, and add them to the array of cookies
init();
function init() {
  //TODO: add code here
  // create the two cookies
  let Cookie1: Cookie = new Cookie('Cookie1');
  let Cookie2: Cookie = new Cookie('Cookie2');
  // add them to the array
  cookiesArray.push(Cookie1);
  cookiesArray.push(Cookie2);
  // add them as options in the select/dropdown (cookieSelector) element
  for (let i = 0; i < cookiesArray.length; i++) {
    // creates newOption as an option element
    let newOption: HTMLOptionElement = document.createElement('option');
    // the new option then sets its value to the cookies name
    newOption.innerHTML = cookiesArray[i].name;
    // and then converts it into a string
    newOption.value = i.toString();
    // cookieSelector adds newOption and displays it on the dropdown bar
    cookieSelector.add(newOption);
  }

  // initialise the cookieColour-inp to the colour of the first cookie created
  colourSelector.value = cookiesArray[0].colour;

  for(let i=0; i < coloursList.length; i++) {
    let newOption: HTMLOptionElement = document.createElement('option');
    newOption.innerHTML = coloursList[i];
    newOption.value = i.toString();
    colourSelector.add(newOption);
  }

  updateDisplay();
}

//TODO: this function needs to go through the list of cookies and draw them to cookiesDiv
// create the cookies as divs with the class name of cookie - see style.css
// number of chocolatechips needs to be shown on the cookie
function drawCookies() {
  const displayCookies: HTMLElement = document.getElementById(
    'cookiesDiv'
  ) as HTMLElement;
  displayCookies.innerHTML = '';
  for (let i = 0; i < cookiesArray.length; i++) {
    // create <div> tags
    let cookieDiv = document.createElement('div');
    // display chocolateChipNum
    cookieDiv.innerHTML = String(cookiesArray[i].chocolateChipNum);
    // assign the class cookie to the div
    cookieDiv.classList.add('cookie');
    // set background colour to the default coloud brown
    cookieDiv.style.backgroundColor = cookiesArray[i].colour;
    // append the div to the cookiesDiv
    displayCookies.appendChild(cookieDiv);
  }
}

//TODO: this fuction needs to be triggered by button changeColour-btn
// upon pressing the button it should change the colour of the cookie selected in the dropdown to the colour typed in the input element (cookieColour-inp)
const changeCookieColour: HTMLElement = document.getElementById(
  'changeColour-btn'
) as HTMLElement;
changeCookieColour.addEventListener('click', changeColour);

function changeColour() {
  // gets the value of the selected cookie and sets it to the colour from the colourSelector
  const cookieValue = cookieSelector.value;
  const colourValue = colourSelector.value;

  cookiesArray[cookieValue].colour = coloursList[colourValue] ;
  updateDisplay();
}

//TODO: this fuction needs to be triggered by button addChocolateChip-btn
// upon pressing the button it should add a chocolate chip to cookies selected from the dropdown
const addChocChips: HTMLElement = document.getElementById(
  'addChocolateChip-btn'
) as HTMLElement;
addChocChips.addEventListener('click', addChocolateChip);

function addChocolateChip() {
  // gets the selected cookie and increments the chocolateChipNum
  cookiesArray[cookieSelector.value].chocolateChipNum++;
  updateDisplay();
}

function updateDisplay() {
  drawCookies();
}
