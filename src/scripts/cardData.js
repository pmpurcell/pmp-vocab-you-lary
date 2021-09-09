import axios from 'axios';
import firebaseConfig from '../api/apiKeys';
import clearDOM from '../clearDom';

const dbUrl = firebaseConfig.databaseURL;

const getCards = () => new Promise((resolve, reject) => {
  axios
    .get(`${dbUrl}/vocabwords.json`)
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
          getCards().then(resolve);
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
    .then(() => getCards().then(resolve))
    .catch(reject);
});

const showCards = (array) => {
  clearDOM();
  array.forEach((element) => {
    document.querySelector('#cardContainer').innerHTML += `
    <div id="vocabCard">
      <h5>${element.title}</h5>
      <p>${element.definition}</p>
      <p>${element.language}</p>
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
  updateCard
};
