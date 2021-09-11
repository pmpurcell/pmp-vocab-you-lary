import { getCards, searchCards, showCards } from '../cardData';
import renderCardForm from '../components/renderCardForm';

const navEvents = (uid) => {
  document.querySelector('#navbar').addEventListener('click', (e) => {
    if (e.target.id.includes('home')) {
      getCards(uid).then(showCards);
    }
    if (e.target.id.includes('new-word')) {
      renderCardForm();
    }
  });
  document.querySelector('#search').addEventListener('submit', (e) => {
    e.preventDefault();
    const searchValue = document.querySelector('#search-value').value.toLowerCase();
    searchCards(searchValue, uid).then(showCards);
  });
};

export default navEvents;
