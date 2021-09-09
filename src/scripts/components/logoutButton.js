import firebase from 'firebase/app';
import 'firebase/auth';
import clearDOM from '../../clearDom';

const signMeOut = () => {
  firebase.auth().signOut();
  clearDOM();
};

const logoutButton = () => {
  const domString = '<button id="google-auth" class="btn btn-danger">SIGNOUT</button>';
  document.querySelector('#login-form-container').innerHTML = (domString);
  document.querySelector('#google-auth').addEventListener('click', signMeOut);
};

export default logoutButton;
