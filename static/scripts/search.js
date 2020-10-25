function Search(functions) {
  this._input = document.getElementById('searchbox-input');
  this._results = document.getElementById('search-results');
  this._input.addEventListener('keyup', (e) => this._inputKeyUp(e), false);
  this._input.addEventListener('keydown', (e) => this._inputKeyDown(e), false);
  this._selected_item_index = -1;
  this._fuse = new Fuse(functions, {includeScore: true, keys: ['function', 'module']})
}

Search.prototype._search = function(query) {
  return this._fuse.search(query)
    .map(f => f.item);
}

Search.prototype._inputKeyUp = function(e) {
  switch (e.key) {
    case 'Enter':
    case 'Escape':
    case 'ArrowUp':
    case 'ArrowDown':
    case 'Tab':
    case 'Shift':
      // ignore
      break;
    default:
      this._hideResults();
      const results = this._search(this._input.value);
      if (results.length > 0) {
        this._clearResults();
        results.forEach(result => this._appendResult(result))
        this._showResults();
      }
  }
}

Search.prototype._inputKeyDown = function(e) {
  switch (e.key) {
    case 'Enter': // Open the selected item
      const selectedItem = this._getSelectedResultItem();
      if (selectedItem) {
        location.href = selectedItem.querySelector('a').href;
        return;
      }

      const results = this._search(this._input.value);
      if (results.length === 0) {
        return;
      }
      location.href = results[0].url;
      break;
    case 'Escape': // Closes the search
      this._input.blur();
      this._input.value = '';
      this._hideResults();
      this._clearResults();
      break;
    case 'ArrowUp':
      this._moveUp();
      break;
    case 'ArrowDown':
      this._moveDown();
      break;
    case 'Tab':
      if (e.shiftKey) {
        this._moveUp();
      } else {
        this._moveDown();
      }
      // Do not trigger browser's default tab (move to focusable item)
      e.preventDefault();
      break;
    default:
      // do nothing
  }
}

Search.prototype._moveUp = function() {
  if (this._selected_item_index > 0) {
    this._selectResultItem(-1);
  }
}

Search.prototype._moveDown = function() {
  if (this._selected_item_index < this._countResults() - 1) {
    this._selectResultItem(+1);
  }
}

Search.prototype._countResults = function() {
  return this._results.children.length;
}

Search.prototype._moveUp = function() {
  if (this._selected_item_index >= 0) {
    this._selectResultItem(-1);
  }
}

Search.prototype._getSelectedResultItem = function() {
  return this._results.children[this._selected_item_index];
}

Search.prototype._selectResultItem = function(diff) {
  if (this._countResults() <= 0) return;
  if (this._selected_item_index >= 0) {
    this._getSelectedResultItem().classList.remove('selected-item');
  }
  this._selected_item_index += diff;
  const selectedItem = this._getSelectedResultItem();
  if (selectedItem != null) {
    const topPos = selectedItem.offsetTop - 100;
    selectedItem.classList.add('selected-item');
    // Scroll inside search results.
    selectedItem.parentNode.scrollTop = topPos;
  }
}

Search.prototype._hideResults = function() {
  this._input.classList.remove('showing-results');
  this._results.style.display = 'none';
}

Search.prototype._showResults = function() {
  this._input.classList.add('showing-results');
  this._results.style.display = 'block';
}

Search.prototype._clearResults = function() {
  this._selected_item_index = -1;
  while (this._results.firstChild !== null) {
    this._results.firstChild.remove();
  }
}

Search.prototype._appendResult = function(result) {
  const template = document.querySelector('#search-result-template');
  const element = document.importNode(template.content, true);
  const a = element.querySelector('a');
  a.href = result.url;
  const fun = element.querySelector('.search-result__function')
  fun.textContent = result.function
  const module = element.querySelector('.search-result__module')
  module.textContent = result.module
  this._results.appendChild(element);
}
