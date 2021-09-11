import axios from 'axios';
import firebaseConfig from '../api/apiKeys';
import clearDOM from '../clearDom';
import filterButtons from './components/filterButtons';

const dbUrl = firebaseConfig.databaseURL;

const getCards = (userId) => new Promise((resolve, reject) => {
  axios
    .get(`${dbUrl}/vocabwords.json?orderBy="user_id"&equalTo="${userId}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch(reject);
});

const createCard = (cardObj) => new Promise((resolve, reject) => {
  axios
    .post(`${dbUrl}/vocabwords.json`, cardObj)
    .then((response) => {
      const body = { fireBaseKey: response.data.name };
      axios
        .patch(`${dbUrl}/vocabwords/${response.data.name}.json`, body)
        .then(() => {
          getCards(cardObj.user_id).then(resolve);
        });
    })
    .catch(reject);
});

const getSingleCard = (fireBaseKey) => new Promise((resolve, reject) => {
  axios
    .get(`${dbUrl}/vocabwords/${fireBaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch(reject);
});

const updateCard = (cardObj) => new Promise((resolve, reject) => {
  axios
    .patch(`${dbUrl}/vocabwords/${cardObj.fireBaseKey}.json`, cardObj)
    .then(() => getCards(cardObj.user_id).then(resolve))
    .catch(reject);
});

const deleteCard = (fireBaseKey, userId) => new Promise((resolve, reject) => {
  axios
    .delete(`${dbUrl}/vocabwords/${fireBaseKey}.json`)
    .then(() => getCards(userId).then(resolve))
    .catch(reject);
});

const filterCards = (languageValue, uid) => new Promise((resolve, reject) => {
  getCards(uid)
    .then((userCards) => {
      const filteredCards = userCards.filter((card) => (card.language === languageValue));
      console.warn(filteredCards);
      resolve(filteredCards);
    })
    .catch(reject);
});

const showCards = (array) => {
  clearDOM();
  filterButtons();
  array.forEach((element) => {
    document.querySelector('#cardContainer').innerHTML += `
    <div id="vocabCard">
      <h5>${element.title}</h5>
      <p>${element.definition}</p>
      <p>Language: ${element.language}</p>
      <div class="btn-group" role="group" aria-label="Basic outlined example">
        <button type="button" id="edit--${element.fireBaseKey}" class="btn btn-outline-primary">Edit</button>
        <button type="button" id="delete--${element.fireBaseKey}" class="btn btn-outline-primary">Delete</button>
      </div>
    </div>
`;
  });
};

export {
  getCards,
  showCards,
  createCard,
  getSingleCard,
  updateCard,
  deleteCard,
  filterCards
};
