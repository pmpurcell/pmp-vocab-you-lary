const domBuilder = () => {
  document.querySelector('#welcome').innerHTML = '';
  document.querySelector('#login-form-container').innerHTML = '';
  document.querySelector('#app').innerHTML = `
    <div id="navbar">NavBar</div>
    <div id="mainContainer">
    <div id="filterContainer"></div>
    <div id="cardContainer"></div>
    <div id="formContainer"></div>
    </div>
    `;
};

export default domBuilder;
