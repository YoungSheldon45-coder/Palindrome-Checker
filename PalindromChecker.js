const checkBtn = document.querySelector("#check-btn");
const inputText = document.querySelector("#text-input");
const resultText = document.querySelector("#result");
let filterInput;

checkBtn.addEventListener("click", () => {
  
  if (inputText.value === "") {
    alert("Please input a value");
    return
  }
  else {
    filterInput = inputText.value.toLowerCase().replace(/[^A-Z0-9]/ig, "");
    let reverseInput = filterInput.split("").reverse().join("");
    if (reverseInput !== filterInput) {
    resultText.innerText = `${inputText.value} is not a palindrome`;
    return;
  }
  resultText.innerText = `${inputText.value} is a palindrome`;
  }
  
});


  inputText.addEventListener("keyup", () => {
  filterInput = inputText.value.toLowerCase().replace(/[^A-Z0-9]/ig, "");
  if(filterInput) {
    return checkBtn.classList.add("active");
  }
  checkBtn.classList.remove("active");
});
