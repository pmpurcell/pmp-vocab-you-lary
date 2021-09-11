const filterButtons = () => {
  document.querySelector('#filterContainer').innerHTML = `
    <button type="button" id="filter--HTML" class="btn btn-light">HTML</button>
    <button type="button" id="filter--CSS" class="btn btn-light">CSS</button>
    <button type="button" id="filter--Javascript" class="btn btn-light">Javascript</button>
    <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Order by:
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a class="dropdown-item" id="alphabet">A-Z</a></li>
    <li><a class="dropdown-item" id="newest">Newest</a></li>
    <li><a class="dropdown-item" id="oldest">Oldest</a></li>
  </ul>
</div>
    `;
};

export default filterButtons;
