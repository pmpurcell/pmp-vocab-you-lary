import axios from 'axios';
import firebaseConfig from '../api/apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getCards = () => new Promise((resolve, reject) => {
  axios
    .get(`${dbUrl}/vocabwords.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch(reject);
});

const showCards = (array) => {
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

export { getCards, showCards };
