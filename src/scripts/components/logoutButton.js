import firebase from 'firebase/app';
import 'firebase/auth';
import clearDOM from '../../clearDom';

const signMeOut = () => {
  firebase.auth().signOut();
  document.querySelector('#navbar').innerHTML = ' ';
  clearDOM();
};

const logoutButton = () => {
  const domString = '<button id="google-auth" class="btn btn-danger">SIGNOUT</button>';
  document.querySelector('#logout').innerHTML = (domString);
  document.querySelector('#google-auth').addEventListener('click', signMeOut);
};

export default logoutButton;
