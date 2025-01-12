const inputSlider = document.querySelector("[slider-data]");
const lengthDisplay = document.querySelector("[length-data]");
const passwordDisplay = document.querySelector("[data-passwordDisplay]");
const copyBtn = document.querySelector("[data-copy]");
const copyMsg = document.querySelector("[data-CopyMsg]");
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
    
    lengthDisplay.innerText = passwordLength;

}
// const generatePassword()
 function SetIndicator(color){
   indicator.style.backgroundColor = color;
 }
 function getRandomInteger(min,max){
    return Math.floor(Math.random *(max-min)+ min ); 
 }
 function generateRandomNumber(){
    return getRandomInteger(0,9)
 }
function generateUppercase(){
    return String.fromCharCode(getRandomInteger(65,91));
}
function generateLowercase(){
    return String.fromCharCode(getRandomInteger(97,123));
}

function generateSymbol(){
    const randNum = getRandomInteger(0,symbols.length);
    return symbols.charAt(randNum);

    
}
function calcStrength(){ 
   let hasUpper = false;
   let hasLower = false;
   let hasNum = false;
   let hasSym = false;
   if(uppercaseCheck.checked) hasUpper = true;
   if(lowercaseCheck.checked) hasLower = true;
   if(numberCheck.checked) hasNum = true;
   if(symbolCheck.checked) hasSym = true;
   
   if(hasUpper && hasLower && hasNum && hasSym && passwordLength>=9){
    SetIndicator('#0f0');
   }else if(
    (hasLower || hasUpper) &&
    (hasNum || hasSym) &&
    passwordLength>=6
   ){
    SetIndicator("#ff0");
   } else{
    SetIndicator("#f00");
   }
}
async function copyContent(){
    try{
        await navigator.clipboard.writeText(passwordDisplay.value);
        copyMsg.innerText = "copied"
       
    }
    catch(e){
        copyMsg.innerText ="failed"


    }
    //to make copy appear and dissapear
    copyMsg.classList.remove("hidden");
    setTimeout(() => {
    
    copyMsg.classList.add("hidden");    
    }, 3000);

}

inputSlider.addEventListener('input', (e)=>{
    passwordLength=e.target.value;
    handleSlider();
})

copyBtn.addEventListener('click', () =>{
    if(passwordDisplay.value)
        copyContent();
})
function shufflePassword(shufflePassword){
    //Fishers-Yates method
    

}

function handlecheckboxchange(){
    checkCount =0;
    allCheckBox.forEach((checkbox)=>{
        if(checkbox.checked){
            checkCount++;
        }
    })

    if(passwordLength<checkCount){
        passwordLength = checkCount;
        handleSlider();     
    }
}


allCheckBox.forEach((checkbox)=>{
    checkbox.addEventListener('change',handlecheckboxchange);
})

generateBtn.addEventListener('click', ()=>{
   //none of the checkboxes are checked
   if(checkCount <= 0){
       return;
   }

   if(passwordLength<checkCount){
       passwordLength = checkCount;
       handleSlider();
   }

   //lets find a new password

   //remove old password
   password='';

//    if(upppercaseCheck.checked){
//     password += generateUppercase();
//    }
//     if(lowercaseCheck.checked){
//     password += generateLowercase();
//    }
//     if(numbersCheck.checked){
//     password += generateRandomNumber();
//    }
//    if(symbolsCheck.checked){
//     password += generateSymbol();
//    }
   
let funcArr= [];

   if(uppercaseCheck.checked){
       funcArr.push(generateUppercase);
   }
    if(lowercaseCheck.checked){
         funcArr.push(generateLowercase);
    }
    if(numbersCheck.checked){
        funcArr.push(generateRandomNumber);
    }
    if(symbolsCheck.checked){
        funcArr.push(generateSymbol);
    }
for(let i=0; i<funcArr.length;i++){
    password += funcArr[i]();
}

for(let i=0; i<passwordLength-funcArr.length;i++){
    let randIndex = getRandomInteger(0,funcArr.length);
    password += funcArr[randIndex]();
}

//shuffle the password
password=shufflePassword(Array.from(password));
passwordDisplay.value = password;
//calculate strength
calcStrength();     

});

