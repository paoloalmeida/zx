import mapsService from '../data/MapsService';

const searchForm = document.getElementById('search-form');

export default function search() {
  searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    mapsService();
  });
}
