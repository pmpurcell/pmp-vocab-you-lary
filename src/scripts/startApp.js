import { getCards, showCards } from './cardData';
import domBuilder from './components/domBuilder';
import navBuilder from './components/navBuilder';
import navEvents from './events/navEvents';

const startApp = () => {
  console.warn('YOU ARE UP AND RUNNING!');
  domBuilder();
  navBuilder();
  navEvents();
  getCards().then(showCards);
};

export default startApp;
