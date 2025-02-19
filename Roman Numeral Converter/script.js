// SELECTORS
const input = document.querySelector("#number");
const checkBtn = document.querySelector("#convert-btn");
const output = document.getElementById("output");
const instruction = document.getElementById("instruction");

// FUNCTION: Convert number to Roman numeral
function convertToRoman(num) {
  const romanMap = [
    { value: 1000, symbol: "M" }, { value: 900, symbol: "CM" }, { value: 500, symbol: "D" },
    { value: 400, symbol: "CD" }, { value: 100, symbol: "C" }, { value: 90, symbol: "XC" },
    { value: 50, symbol: "L" }, { value: 40, symbol: "XL" }, { value: 10, symbol: "X" }, 
    { value: 9, symbol: "IX" }, { value: 5, symbol: "V" }, { value: 4, symbol: "IV" },
    { value: 1, symbol: "I" }
  ];

  let romanNumeral = "";
  for (const { value, symbol } of romanMap) {
    while (num >= value) {
      romanNumeral += symbol;
      num -= value;
    }
  }
  return romanNumeral;
}

// EVENT LISTENER: Convert number on button click
checkBtn.addEventListener("click", () => {
  // Get the input value and trim spaces
  const value = parseInt(input.value.trim(), 10);

  // Case 1: No input entered
  if (input.value === "") {
    output.innerText = "Please enter a valid number";
    output.style.display = "none"; 
    return;
  }

  // Case 2: Invalid input (negative or less than 1)
  if (isNaN(value) || value < 1) {
    output.innerText = "Please enter a number greater than or equal to 1";
    output.style.display = "none"; 
    return;
  }

  // Case 3: Out of range (> 3999)
  if (value > 3999) {
    output.innerText = "Please enter a number less than or equal to 3999";
    output.style.display = "none";
    return;
  }

  // Case 4: Valid input - Convert and Show Output
  output.innerText = convertToRoman(value);
  output.style.display = "block";
  // instruction.style.display = "none";
});
