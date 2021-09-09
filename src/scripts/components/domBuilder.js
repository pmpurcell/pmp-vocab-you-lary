const domBuilder = () => {
  document.querySelector('#app').innerHTML = `
    <div id="navbar">NavBar</div>
    <div id="mainContainer">
    <div id="filterContainer">
    <button type="button" class="btn btn-secondary">Button 1</button>
    <button type="button" class="btn btn-secondary">Button 2</button>
    <button type="button" class="btn btn-secondary">Button 3</button>
    <button type="button" class="btn btn-secondary">Button 4</button>
    <div>
    <div id="cardContainer"><div>
    <div id="formContainer"><div>
    </div>
    `;
};

export default domBuilder;
