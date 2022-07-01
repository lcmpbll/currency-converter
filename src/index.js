import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import MoneyService from './js/money-service.js';

function getMoney(response) {
  if (response) {
    console.log(response);
    $('.showRate').text(`${response.conversion_rates.USD}`);
  } else {
    $('.showErrors').text(`There was an error: ${response.error_type}`);
  }
}
$(document).ready(function () {
  $('#submit-btn').click(function () {
    let currency = ('#convert-to').val();
    $('.showErrors').text(`There was an error:`);
    console.log(currency);
    MoneyService.getExchange(currency).then(function (response) {
      getMoney(response);
    });
  });
});
