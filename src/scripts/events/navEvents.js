import { getCards, showCards } from '../cardData';
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
};

export default navEvents;
