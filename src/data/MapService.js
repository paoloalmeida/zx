import { GOOGLE_API_URL } from '../data/Config';
import storeService from './StoreService';

const searchInput = document.getElementById('search-input');

export default function mapService() {

  // join url + query from input
  let url = GOOGLE_API_URL + searchInput.value;

  // fetch to google maps
  fetch(url)
    .then((data) => data.json())
    .then(function (data) {

      // lat / long from maps
      let lat = data.results[0].geometry.location.lat.toString();
      let lng = data.results[0].geometry.location.lng.toString();

      // verify success
      if (data.status == 'OK') {
        storeService(lat, lng);
      } else {
        console.log('TODO: Tratar erro ');
      }
    })
    .catch(function (error) {
      console.log('TODO: tratar erro ', error);
    });
}
