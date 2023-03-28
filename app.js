const inputPassword = document.getElementById("passwordfield");
const inputRange = document.getElementById("rangeInput");
const inputValue = document.getElementById("inputValue");
const lowerLetter = document.getElementById("lowerCase");
const upperLetter = document.getElementById("upperCase");
const number = document.getElementById("number");
const symbols = document.getElementById("symbols");
const btn = document.getElementById("btn");

inputValue.textContent = inputRange.value;

inputRange.addEventListener("input", () => {
  inputValue.textContent = inputRange.value;
});

btn.addEventListener("click", () => {
  inputPassword.value = genetarePassword();
});

const lowerChar = "abcdefghijklmnopqrstuvwxyz";
const upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numberVal = "0123456789";
const symbolsVal = "!@#$%^&*";

function genetarePassword() {
  let passwordGen = "";
  let allChar = "";

  allChar += lowerLetter.checked ? lowerChar : "";
  allChar += upperLetter.checked ? upperChar : "";
  allChar += number.checked ? numberVal : "";
  allChar += symbols.checked ? symbolsVal : "";

  let i = 1;

  while (i <= inputRange.value) {
    passwordGen += allChar.charAt(Math.floor(Math.random() * allChar.length));
    console.log(passwordGen)
    i++;
  }
  return passwordGen;
}
