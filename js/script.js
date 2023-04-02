let currencyConverterForm = document.querySelector(".form");
let enteredValue = document.querySelector(".js-enteredValue");
let selectedCurrency = document.querySelector(".js-selectedCurrency");
let plnToPay = document.querySelector(".js-currencyConverter__value");
let resetButton = document.querySelector(".js-resetButton");

currencyConverterForm.addEventListener("submit", (event) => {
  event.preventDefault();

  let value = enteredValue.value;
  let currency = selectedCurrency.value;

  let toPay = value * currency;

  plnToPay.innerText = toPay.toFixed(2);

});

resetButton.addEventListener("click", () => {
  plnToPay.innerText = ("0.00");

});