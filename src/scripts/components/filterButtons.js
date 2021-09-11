const filterButtons = () => {
  document.querySelector('#filterContainer').innerHTML = `
    <button type="button" id="filter--HTML" class="btn btn-secondary">HTML</button>
    <button type="button" id="filter--CSS" class="btn btn-secondary">CSS</button>
    <button type="button" id="filter--Javascript" class="btn btn-secondary">Javascript</button>
    `;
};

export default filterButtons;
