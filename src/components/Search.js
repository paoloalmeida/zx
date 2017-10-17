import mapService from '../data/MapService';

const searchForm = document.getElementById('search-form');

// trigger to search
export default function search() {
  searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    mapService();
  });
}
