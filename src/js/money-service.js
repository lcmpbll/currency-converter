export default class MoneyService {
  static getExchange(currency) {
    return fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/${currency}`)
      .then (function(response) {
        if (!response.ok) {
          throw Error(response.status);
        } 
        return response.json();
      })
      .catch(function(error) {
        return error.message;
      });
    
  }
}