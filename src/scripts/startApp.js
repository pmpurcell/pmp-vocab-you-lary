import domBuilder from './components/domBuilder';
import navBuilder from './components/navBuilder';

const startApp = () => {
  domBuilder();
  navBuilder();
  console.warn('YOU ARE UP AND RUNNING!');
};

export default startApp;
