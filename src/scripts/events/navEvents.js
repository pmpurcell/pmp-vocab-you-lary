import renderCardForm from '../components/renderCardForm';

const navEvents = () => {
  document.querySelector('#navbar').addEventListener('click', (e) => {
    if (e.target.id.includes('new-word')) {
      renderCardForm();
    }
  });
};

export default navEvents;
