import { getCards, showCards } from './cardData';
import domBuilder from './components/domBuilder';
import navBuilder from './components/navBuilder';

const startApp = () => {
  console.warn('YOU ARE UP AND RUNNING!');
  domBuilder();
  navBuilder();
  getCards().then(showCards);
};

export default startApp;
