import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import MoneyService from './js/money-service.js';

function getMoney(response) {
  if (response) {
    let exchangeRate = `${1/response.conversion_rates.USD}`;
    return exchangeRate;
  } else {
    $('.showErrors').text(`There was an error: ${response.error_message}`);
  }
}

// function usMoney(exchangeRate, dollars) {
//   let foreignMoney = exchangeRate * dollars;
//   console.log(foreignMoney);
//   return foreignMoney;
// }


$(document).ready(function () {
  $('#submit-btn').click(function () {
    let currency = $('#convert-to').val();
   // let dollars = $('#amount-usd').val();
    MoneyService.getExchange(currency)
    .then(function (response) {
      let exchangeRate = getMoney(response);
      console.log(exchangeRate);
    });
   
  });
});
