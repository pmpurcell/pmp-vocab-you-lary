const filterButtons = () => {
  document.querySelector('#filterContainer').innerHTML = `
    <button type="button" id="HTML" class="btn btn-secondary">HTML</button>
    <button type="button" id="CSS" class="btn btn-secondary">CSS</button>
    <button type="button" id="Javascript" class="btn btn-secondary">Javascript</button>
    `;
};

export default filterButtons;
