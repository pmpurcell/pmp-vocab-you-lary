import clearDOM from '../../clearDom';

const renderCardForm = () => {
  clearDOM();
  document.querySelector('#formContainer').innerHTML = `
    <form>
  <div class="mb-3">
    <label for="cardTitle" class="form-label">Title</label>
    <input type="type" class="form-control" id="cardTitle">
  </div>
  <div class="mb-3">
    <label for="cardDef" class="form-label">Definition</label>
    <input type="text" class="form-control" id="cardDef">
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
    `;
};

export default renderCardForm;
