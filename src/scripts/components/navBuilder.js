const navBuilder = () => {
  document.querySelector('#navbar').innerHTML = `
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Vocab-YOU-Lary</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active" aria-current="page" id="home">Home</a>
        <a class="nav-link" id="new-word">New Word!</a>
      </div>
    </div>
  </div>
</nav>
  `;
};

export default navBuilder;
