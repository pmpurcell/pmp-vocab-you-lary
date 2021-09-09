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
          getCards(cardObj).then(resolve);
        });
    })
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
    </div>
`;
  });
};

export { getCards, showCards, createCard };
