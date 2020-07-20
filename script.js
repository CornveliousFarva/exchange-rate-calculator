const currencyEl_one= document.getElementById('currency-1');
const amountEl_one = document.getElementById('amount-one');
const currencyEl_two = document.getElementById('currency-2');
const amountEl_two = document.getElementById('amount-two');

const rateEl = document.getElementById('rate');
const swap = document.getElementById('swap');

//Fetch exchange rates and update the DOM
function calculate(){
    const currency_one = currencyEl_one.value;
    const currency_two = currencyEl_two.value;

    fetch(`https://v6.exchangerate-api.com/v6/5ca7a328724faea10cad41af/latest/USD`)
}