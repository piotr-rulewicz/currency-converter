{
  
const plnToPay = document.querySelector(".js-currencyConverter__value");

  const calculateResult = () => {

  const currencyConverterForm = document.querySelector(".form");
  const enteredValue = document.querySelector(".js-enteredValue");
  const selectedCurrency = document.querySelector(".js-selectedCurrency");
  
  currencyConverterForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const value = enteredValue.value;
  const currency = selectedCurrency.value;
  const toPay = value * currency;

  plnToPay.innerText = toPay.toFixed(2);

});

}

calculateResult();

  const init = () => {

  const resetButton = document.querySelector(".js-resetButton");

  resetButton.addEventListener("click", () => {
  plnToPay.innerText = ("0.00");

});

}

init();

}