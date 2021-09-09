import {
  createCard,
  getSingleCard,
  showCards,
  updateCard
} from '../cardData';
import renderCardForm from '../components/renderCardForm';

const domEvents = () => {
  document.querySelector('#app').addEventListener('click', (e) => {
    if (e.target.id.includes('submit-card')) {
      e.preventDefault();
      console.warn(e.target.id);
      const getTime = new Date();
      const newWord = {
        title: document.querySelector('#cardTitle').value,
        definition: document.querySelector('#cardDef').value,
        language: document.querySelector('#cardLang').value,
        time: `${getTime.getHours()}:${getTime.getMinutes()}`
      };
      createCard(newWord).then(showCards);
    }
    if (e.target.id.includes('update-card')) {
      e.preventDefault();
      console.warn('Card Updated!');
      const getTime = new Date();
      const newWord = {
        title: document.querySelector('#cardTitle').value,
        definition: document.querySelector('#cardDef').value,
        language: document.querySelector('#cardLang').value,
        time: `${getTime.getHours()}:${getTime.getMinutes()}`
      };
      updateCard(newWord).then(showCards);
    }
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
