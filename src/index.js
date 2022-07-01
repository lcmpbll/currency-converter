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



function usMoney(exchangeRate) {
  let dollars = $('#amount-usd').val();
  let foreignMoney = exchangeRate * dollars;
  return foreignMoney;
}


$(document).ready(function () {
  $('#submit').click(function () {
    let currency = $('#convert-to').val();
    MoneyService.getExchange(currency)
    .then(function (response) {
      let exchangeRate = getMoney(response);
      let foreignMoney = usMoney(exchangeRate);
      $('.showExchange').text("You have " + foreignMoney.toFixed(2) + " in " + currency)
      $('.showRate').text("The echange rate is : " + exchangeRate + " for " + currency)
    });
   
  });
});
