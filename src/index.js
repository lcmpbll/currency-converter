import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import MoneyService from './js/money-service.js';

// function whichService (whichWay) {
//   let currency = $("convert-to").val();
//     MoneyService.getExchange(currency);
//   if (whichWay === USD) {
//     $(".convertUSD").show();
//     $('.convertCurrency').hide();
//     } else {

//   }
// }

// MoneyService.getExchange(currency)
// .then(function (response) {
//   let exchangeRate = getMoney(response);
//   let foreignMoney = Money(exchangeRate);
//   $('.showExchange').text("You have " + foreignMoney.toFixed(2) + " in " + currency)
//   $('.showRate').text("The exchange rate is : " + exchangeRate + " for " + currency)
  
// });

function getMoney(response) {
  if (response.result === "success") {
    let exchangeRate = `${response.conversion_rates.USD}`;
    return exchangeRate;
  } else {
    $('.showErrors').text(`There was an error: ${response.error}`);
    $('.showErrors').show();
     console.log(response);
  }
}

// function Money(exchangeRate) {
//   let dollars = $('#amount-of-money').val();
//   let foreignMoney = exchangeRate * dollars;
//   currencyVailidator(exchangeRate);
//   inputValidator(foreignMoney);
//   return foreignMoney;
// }

// function inputValidator (foreignMoney) {
//   if (isNaN(foreignMoney)) {
//     $('.showExchange').hide();
//     $('.showRate').hide();
//     $('.errorMessage').show();
//   }
// }

// function currencyVailidator (exchangeRate) {
//   if (isNaN(exchangeRate)) {
//     $('.showExchange').hide();
//     $('.showRate').hide();
//     $('.errorMessage').text(`We are not familiar with that currency or format. Please re-enter in the format of three uppercase letters, like so : USD`)
//     $('.errorMessage').show();
//     $('.showErrors').show();
//   }
// }

// $(document).ready(function () {
//   $('#submit').click(function () {
//     $('.showExchange').show();
//     $('.showRate').show();
//     $('.errorMessage').hide();
//     $('.showErrors').hide();
//     let whichWay = $('input:radio[name=whichWay]:checked').val();
//     whichService(whichWay);

   
//   });
// });


// function getMoney(response, whichWay) {
//   if (response.result === "success" && whichWay === "other") {
//     let exchangeRate = `${response.conversion_rates.USD}`;
//     $('.showExchangeOther').show();
//       $('.showRateOther').show();
//       $('.showExchange').hide();
//       $('.showRate').hide();
//     return exchangeRate;
//   } else if (response.result === "sucess" && whichWay === "USD") {
//     let exchangeRate = `${1/response.conversion_rates.USD}`;
//     console.log('its working usd');
//     $('.showExchangeOther').hide();
//     $('.showRateOther').hide();
//     $('.showExchange').show();
//     $('.showRate').show();
//     return exchangeRate;
//   } else {
//     $('.showErrors').show();
//     $('.showErrors').text(`There was an error: ${response.error}`);
//     console.log(response);

//   }
// }

function Money(exchangeRate, whichWay) {
  console.log(whichWay);
  let dollars = $('#amount-of-money').val();
  if (whichWay === "USD") {
    let foreignMoney = (1/exchangeRate) * dollars;
    $('.showExchangeOther').hide();
    $('.showRateOther').hide();
    $('.showExchange').show();
    $('.showRate').show();
  return foreignMoney;
  } else {
    let foreignMoney = exchangeRate * dollars;
    $('.showExchangeOther').show();
    $('.showRateOther').show();
    $('.showExchange').hide();
    $('.showRate').hide();
    return foreignMoney;
  }
}

function currencyVailidator (foreignMoney) {
  if (isNaN(foreignMoney)) {
    $('.showExchange').hide();
    $('.showRate').hide();
    $('.errorMessage').text(`We are not familiar with that currency or format. Please re-enter in the format of three uppercase letters, like so : USD`)
    $('.errorMessage').show();
    
  }
}

$(document).ready(function () {
  $('#submit').click(function () {
    $('.errorMessage').hide();
    $('.showErrors').hide();
    let currency = $('#convert-to').val();
    let whichWay = $('input:radio[name=whichWay]:checked').val();
    MoneyService.getExchange(currency)
    .then(function (response) {
      let exchangeRate = getMoney(response);
      let foreignMoney = Money(exchangeRate, whichWay);
      currencyVailidator(foreignMoney);
      $('.showExchange').text("You have " + foreignMoney.toFixed(2) + " in " + currency)
      $('.showRate').text("The exchange rate is : " + exchangeRate + " for " + currency)
      $('.showExchangeOther').text("You have " + foreignMoney.toFixed(2) + " in USD")
      $('.showRateOther').text("The exchange rate is : " + exchangeRate + " for USD")
      
    });
   
  });
});