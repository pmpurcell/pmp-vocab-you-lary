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
      console.warn(newWord);
    }
  });
};

export default domEvents;
