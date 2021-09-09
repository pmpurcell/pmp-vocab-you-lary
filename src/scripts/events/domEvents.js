import { createCard, showCards } from '../cardData';

const domEvents = () => {
  document.querySelector('#formContainer').addEventListener('click', (e) => {
    if (e.target.id.includes('submit')) {
      e.preventDefault();
      console.warn('New Card Submitted!');
      const newWord = {
        title: document.querySelector('#cardTitle').value,
        definition: document.querySelector('#cardDef').value,
        language: document.querySelector('#cardLang').value
      };
      createCard(newWord).then(showCards);
    }
  });
};

export default domEvents;
