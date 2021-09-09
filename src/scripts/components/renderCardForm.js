import clearDOM from '../../clearDom';

const renderCardForm = (obj = { }) => {
  clearDOM();
  document.querySelector('#formContainer').innerHTML = `
    <form>
  <div class="mb-3">
    <label for="cardTitle" class="form-label"></label>
    <input type="type" class="form-control" id="cardTitle" value="${obj.title || ''}">
  </div>
  <div class="mb-3">
    <label for="cardDef" class="form-label"></label>
    <input type="text" class="form-control" id="cardDef" value="${obj.definition || ''}">
  </div>
  <select class="form-select" id="cardLang" aria-label="Language" value="${obj.language || ''}">
  <option selected>Open this select menu</option>
  <option value="HTML">HTML</option>
  <option value="CSS">CSS</option>
  <option value="Javascript">Javascript</option>
  </select>
  <button type="submit" id="${obj.firebaseKey ? `update-book--${obj.firebaseKey}` : 'submit-book'}" class="btn btn-primary">Submit</button>
</form>
    `;
};

export default renderCardForm;
