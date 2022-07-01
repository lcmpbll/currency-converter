import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import MoneyService from './js/money-service.js';

function getMoney(response) {
  if (response.result === "success") {
    let exchangeRate = `${1/response.conversion_rates.USD}`;
    return exchangeRate;
  } else {
    $('.showErrors').text(`There was an error: ${response.error}`);

  }
}

function usMoney(exchangeRate) {
  let dollars = $('#amount-usd').val();
  let foreignMoney = exchangeRate * dollars;
  currencyVailidator(foreignMoney);
  return foreignMoney;
}

function currencyVailidator (foreignMoney) {
  if (isNaN(foreignMoney)) {
    $('.showExchange').hide();
    $('.showRate').hide();
    $('.errorMessage').text(`We are not familiar with that currency or format. Please re-enter in the format of three uppercase letters, like so : USD`)
    $('.errorMessage').show();
    $('.showErrors').show();
  }
}

$(document).ready(function () {
  $('#submit').click(function () {
    $('.showExchange').show();
    $('.showRate').show();
    $('.errorMessage').hide();
    $('.showErrors').hide();
    let currency = $('#convert-to').val();
    MoneyService.getExchange(currency)
    .then(function (response) {
      let exchangeRate = getMoney(response);
      let foreignMoney = usMoney(exchangeRate);
      $('.showExchange').text("You have " + foreignMoney.toFixed(2) + " in " + currency)
      $('.showRate').text("The exchange rate is : " + exchangeRate + " for " + currency)
      
    });
   
  });
});
