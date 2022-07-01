// export default class MoneyService {
//   static async getExchange(currency) {
//     try {
//     const response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/${currency}`);
//       if (!response.ok) {
//         throw Error(response.error_message);
//       }
//       return response.json();
//     } catch(error) {
//       return error;
//     } 
//   }
// }

export default class MoneyService {
  static getExchange() {
    return fetch(`https://v6.exchangerate-api.com/v6/{process.env.API_KEY}/latest/USD`)
    .then (function(response) {
      if (!response.ok) {
        throw Error(response);
      }
      return response.json();
    })
    .catch(function(error) {
      return error;
    })
    
  }
}