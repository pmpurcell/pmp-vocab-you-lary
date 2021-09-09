import { getCards, showCards } from './cardData';
import domBuilder from './components/domBuilder';
import navBuilder from './components/navBuilder';
import domEvents from './events/domEvents';
import navEvents from './events/navEvents';

const startApp = () => {
  console.warn('YOU ARE UP AND RUNNING!');
  domBuilder();
  navBuilder();
  getCards().then(showCards);
  domEvents();
  navEvents();
};

export default startApp;
