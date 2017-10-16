import GOOGLE_API_URL from '../data/config';

const searchInput = document.getElementById('search-input');
const searchForm = document.getElementById('search-form');

function makeRequest() {
  // spotify.search.albums(searchInput.value)
  //   .then(data => renderAlbums(data.albums.items, albumList));
  let url = GOOGLE_API_URL + searchInput.value;
  console.log(url);
  fetch(url)
  .then(function(data) {
      console.log(data);
  })
  .catch(function(error) {
      console.log(error);
  });
  console.log(searchInput.value);
}

export default function search() {
  searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    makeRequest();
  });
}
