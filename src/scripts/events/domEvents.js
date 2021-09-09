import { createCard, showCards } from '../cardData';

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
};

export default domEvents;
