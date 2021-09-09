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
  <select class="form-select" id="cardLang" aria-label="Language">
  <option selected>Open this select menu</option>
  <option value="HTML">HTML</option>
  <option value="CSS">CSS</option>
  <option value="Javascript">Javascript</option>
  </select>
  <button type="submit" id="submit" class="btn btn-primary">Submit</button>
</form>
    `;
};

export default renderCardForm;
