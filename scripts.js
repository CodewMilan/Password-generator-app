const inputSlider = document.querySelector("[slider-data]");
const lengthDisplay = document.querySelector("[length-data]");
const passwordDisplay = document.querySelector("[data-passwordDisplay]");
const copyBtn = document.querySelector("[data-copy]");
const copyMsg = document.querySelector("[Data-CopyMsg]");
const uppercaseCheck = document.querySelector("#uppercase");
const lowercaseCheck = document.querySelector("#lowercase");
const numbersCheck = document.querySelector("#numbers");
const symbolsCheck = document.querySelector("#symbols");
const indicator = document.querySelector("[color-data]");
const generateBtn = document.querySelector(".generateButton");
const allCheckBox = document.querySelectorAll("input[type=checkbox]");
const symbols = '!@#$%^&*()><:~`'


let password = "";
let passwordLength = 10;
let checkCount =1;

// const copyContent()
//sets password length
handleSlider();
function handleSlider() {
    inputSlider.value= passwordLength;
    lengthDisplay.innerText = passwordLength;

}
// const generatePassword()
 function SetIndicator(color){
   indicator.style.backgroundColor = color;
 }
 function getRandomInteger(min,max){
    return Math.floor(Math.random *(max-min)+ min ); 
 }
function getRandomUppercase(){
    return String.fromCharCode(getRandomInteger(65,91));
}
function getRandomLowercase(){
    return String.fromCharCode(getRandomInteger(97,123));
}
function getRandomNumber(){
    return getRandomInteger(0,9);

}
function getRandomSymbol(){
    const randNum = getRandomInteger(0,symbols.length);
    return symbols.charAt(randNum);

    
}
function calcStrength(){
   
}
function copyContent{
    navigator.clipboard.writeText(document.getElementById(""));

}
