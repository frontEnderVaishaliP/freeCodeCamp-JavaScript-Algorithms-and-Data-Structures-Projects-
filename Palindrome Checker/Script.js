// Slectors
const textInput = document.querySelector("#text-input");
const checkBtn = document.querySelector("#check-btn");
const result = document.querySelector("#result");


// Code
checkBtn.addEventListener(
  "click",
  () => {
    // Storing input in 'val' variable
    let val = textInput.value;
    console.log("Value of Input is " + val);

    // if input is blank
    if(val === "") {
      alert("Please input a value");
      return ;
    }

    // if only one character is entered display the result directly
    if(val.length === 1) {
      result.innerText = `${val} is a palindrome`;
      result.style.display = "block";
      return;
    }

    // if more than one character is entered
    if(val.length > 1){
      // eliminating white spaces, special characters and punctuations from the input value and converting it to lowercase (because strings are case sensitive) and storing it in a variable
      const checkVal = val.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

      // reversing the input with eliminating white spaces, punctuations and special characters
      let reversedVal = checkVal.split('').reverse().join('');
      console.log(reversedVal);

      //If the entered val and revesred val are same execute if block and if they are not same then excute else block
      if(checkVal === reversedVal) {
        result.innerText = `${val} is a palindrome`;
      }
      else{
        result.innerText = `${val} is not a palindrome`;
      }
    }
    result.style.display = "block";
  }
);
