import {
  createCard,
  deleteCard,
  getSingleCard,
  showCards,
  updateCard
} from '../cardData';
import renderCardForm from '../components/renderCardForm';

const domEvents = () => {
  document.querySelector('#app').addEventListener('click', (e) => {
    if (e.target.id.includes('submit-card')) {
      e.preventDefault();
      console.warn('Card submitted');
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
      const [, fireBaseKey] = e.target.id.split('--');
      console.warn('Card Updated!');
      const getTime = new Date();
      const newWord = {
        title: document.querySelector('#cardTitle').value,
        definition: document.querySelector('#cardDef').value,
        language: document.querySelector('#cardLang').value,
        time: `${getTime.getHours()}:${getTime.getMinutes()}`,
        fireBaseKey
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
      if (window.confirm('Are you sure you want to delete this card?')) {
        const [, fireBaseKey] = e.target.id.split('--');
        deleteCard(fireBaseKey).then(showCards);
      }
    }
  });
};

export default domEvents;
