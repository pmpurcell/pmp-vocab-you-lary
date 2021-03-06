import {
  alphabetCards,
  createCard,
  deleteCard,
  filterCards,
  getCards,
  getSingleCard,
  newestCards,
  oldestCards,
  showCards,
  updateCard
} from '../cardData';
import renderCardForm from '../components/renderCardForm';

const domEvents = (uid) => {
  document.querySelector('#mainContainer').addEventListener('click', (e) => {
    if (e.target.id.includes('submit-card')) {
      e.preventDefault();
      console.warn(e.target.id);
      const getTime = new Date();
      const newWord = {
        title: document.querySelector('#cardTitle').value,
        definition: document.querySelector('#cardDef').value,
        language: document.querySelector('#cardLang').value,
        time: getTime,
        user_id: uid
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
        time: getTime,
        fireBaseKey,
        user_id: uid
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
        deleteCard(fireBaseKey, uid).then(showCards);
      }
    }
    if (e.target.id.includes('filter')) {
      const [, languageType] = e.target.id.split('--');
      console.warn(`Clicked ${languageType} Button`);
      filterCards(languageType, uid).then(showCards);
    }
    if (e.target.id.includes('alphabet')) {
      console.warn('Sorting Alphabetically!');
      getCards(uid).then(alphabetCards);
    }
    if (e.target.id.includes('newest')) {
      console.warn('Sorting newest to oldest!');
      getCards(uid).then(newestCards);
    }
    if (e.target.id.includes('oldest')) {
      console.warn('Sorting oldest to newest!');
      getCards(uid).then(oldestCards);
    }
  });
};

export default domEvents;
