import { createCard, getSingleCard, showCards } from '../cardData';
import renderCardForm from '../components/renderCardForm';

const domEvents = () => {
  document.querySelector('#formContainer').addEventListener('click', (e) => {
    if (e.target.id.includes('submit')) {
      e.preventDefault();
      console.warn('New Card Submitted!');
      const getTime = new Date();
      const newWord = {
        title: document.querySelector('#cardTitle').value,
        definition: document.querySelector('#cardDef').value,
        language: document.querySelector('#cardLang').value,
        time: `${getTime.getHours()}:${getTime.getMinutes()}`
      };
      createCard(newWord).then(showCards);
    }
  });

  document.querySelector('#cardContainer').addEventListener('click', (e) => {
    if (e.target.id.includes('edit')) {
      const [, fireBaseKey] = e.target.id.split('--');
      console.warn('Clicked Edit Button');
      console.warn(fireBaseKey);
      getSingleCard(fireBaseKey).then((cardObj) => renderCardForm(cardObj));
    }
    if (e.target.id.includes('delete')) {
      console.warn('Clicked Delete Button');
    }
  });
};

export default domEvents;
