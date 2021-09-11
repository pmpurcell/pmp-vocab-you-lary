import logoutButton from './logoutButton';

const navBuilder = () => {
  document.querySelector('#navbar').innerHTML = `
  <nav class="navbar navbar-expand-lg navbar-light">
  <div class="container-fluid" id="navbar">
    <a class="navbar-brand" href="#">Vocab-YOU-Lary</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active" aria-current="page" id="home">Home</a>
        <a class="nav-link" id="new-word">New Word!</a>
      </div>
      <div id="search-div">
      <form class="d-flex" id="search">
      <input class="form-control me-2" id="search-value" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
      </div>
      <div id="logout"></div>
    </div>
  </div>
</nav>
  `;

  logoutButton();
};

export default navBuilder;
