import { getCards, showCards } from './cardData';
import domBuilder from './components/domBuilder';
import navBuilder from './components/navBuilder';
import domEvents from './events/domEvents';
import navEvents from './events/navEvents';

const startApp = (user) => {
  console.warn('YOU ARE UP AND RUNNING!');
  domBuilder();
  navBuilder();
  getCards(user.uid).then(showCards);
  domEvents(user.uid);
  navEvents(user.uid);
};

export default startApp;
