import GOOGLE_API_URL from '../data/config';

const searchInput = document.getElementById('search-input');

export default function mapsService() {

  let url = GOOGLE_API_URL + searchInput.value;

  fetch(url)
    .then((data) => data.json())
    .then(function (data) {

      let lat = data.results[0].geometry.location.lat.toString();
      let lng = data.results[0].geometry.location.lng.toString();

      if (data.status == 'OK') {
        console.log(lat, lng);
      } else {
        console.log('NOK');
      }
    })
    .catch(function (error) {
      console.log(error);
    });
}
