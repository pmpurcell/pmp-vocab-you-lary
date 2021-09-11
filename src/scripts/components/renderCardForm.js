import clearDOM from '../../clearDom';

const renderCardForm = (obj = { }) => {
  clearDOM();
  document.querySelector('#formContainer').innerHTML = `
    <form>
  <div class="mb-3">
    <label for="cardTitle" class="form-label">Title</label>
    <input type="type" class="form-control" id="cardTitle" value="${obj.title || ''}">
  </div>
  <div class="mb-3">
    <label for="cardDef" class="form-label">Definition</label>
    <textarea type="text" class="form-control" id="cardDef" value="${obj.definition || ''}"> </textarea>
  </div>
  <label for="cardLang" class="form-label">Language</label>
  <select class="form-select" id="cardLang" aria-label="Language" value="${obj.language || ''}">
  <option>${obj.language || ''}</option>
  <option value="HTML">HTML</option>
  <option value="CSS">CSS</option>
  <option value="Javascript">Javascript</option>
  </select>
  <button type="submit" id="${obj.fireBaseKey ? `update-card--${obj.fireBaseKey}` : 'submit-card'}" class="btn btn-primary">Submit</button>
</form>
    `;
};

export default renderCardForm;
