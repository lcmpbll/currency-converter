import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import MoneyService from './js/money-service.js';

// async function makeApiCall(currency) {
//   const response = await MoneyService.getExchange(currency);
//   //let dollarAmount = $('#amount-usd').val(); 
//   getMoney(response);

// }

function getMoney(response) {
  if (response) {
    let exchangeRate = `${1/response.conversion_rates.USD}`;
    console.log(exchangeRate);
    return exchangeRate;
  } else {
    $('.showErrors').text(`There was an error: ${response.error}`);
  }
}

// $(document).ready(function() {
//   $('#submit').click(function () {
//     let currency = $('#converty-to').val();
//     //let dollarAmount = $('#amount-usd').val(); 
//     //clearFields();
//     makeApiCall(currency);

//   });
// });



// function usMoney(exchangeRate, dollars) {
//   let foreignMoney = exchangeRate * dollars;
//   console.log(foreignMoney);
//   return foreignMoney;
// }


$(document).ready(function () {
  $('#submit').click(function () {
    let currency = $('#convert-to').val();
    //let dollars = $('#amount-usd').val();
    MoneyService.getExchange(currency)
    .then(function (response) {
      getMoney(response);
      //console.log(exchangeRate)

    });
   
  });
});
