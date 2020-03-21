import { API_KEY } from './config';

class CatAPI {
  static getAllCats() {
    return fetch(`https://api.thecatapi.com/v1/images/search?limit=10&api_key=${API_KEY}`)
      .then(res => {
        return res.json();
      })
      .catch(err => {
        console.error(err);
      });
  };
}

export default CatAPI;