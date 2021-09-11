const filterButtons = () => {
  document.querySelector('#filterContainer').innerHTML = `
    <button type="button" id="filter--HTML" class="btn btn-light">HTML</button>
    <button type="button" id="filter--CSS" class="btn btn-light">CSS</button>
    <button type="button" id="filter--Javascript" class="btn btn-light">Javascript</button>
    `;
};

export default filterButtons;
