
// import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import MoneyService from './js/money-service.js'

function getMoney (response) {
  if(response.conversion_rates) {
    $('.showRate').text(`${response.conversion_rates.AUD}`);
  } else {
    $('.showErrors').text(`There was an error: ${response.error_type}`;)
  }
}
$(document).ready(function () {
  $('#submit-btn').submit(function (event) {
    event.preventDefault(); 
    MoneyService.getExchange();
      .then(function(response) {
        getMoney(response);
      });
  });
});