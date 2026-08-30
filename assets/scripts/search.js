function Search(functions) {
  this._input = document.getElementById('searchbox-input');
  this._results = document.getElementById('search-results');
  this._input.addEventListener('keyup', (e) => this._inputKeyUp(e), false);
  this._input.addEventListener('keydown', (e) => this._inputKeyDown(e), false);
  this._selected_item_index = -1;
  this._fuse = new Fuse(functions, {
    includeScore: true,
    includeMatches: true,
    threshold: 0.4,
    keys: [
      {name: 'function', weight: 2},
      {name: 'module', weight: 1}
    ]
  })
}

Search.prototype._search = function(query) {
  var results = this._fuse.search(query);
  var q = query.toLowerCase();

  function tier(item) {
    if (item.function.toLowerCase().includes(q)) return 0; // function name contains query
    if (item.module.toLowerCase().includes(q)) return 1;   // module name contains query
    return 2;                                               // fuzzy match only
  }

  results.sort(function(a, b) {
    var at = tier(a.item);
    var bt = tier(b.item);
    if (at !== bt) return at - bt;

    if (at === 0) {
      var af = a.item.function.toLowerCase();
      var bf = b.item.function.toLowerCase();
      // Within tier 0, prefix match wins, then shorter name = closer match
      var ap = af.startsWith(q) ? 0 : 1;
      var bp = bf.startsWith(q) ? 0 : 1;
      if (ap !== bp) return ap - bp;
      if (af.length !== bf.length) return af.length - bf.length;
    }

    return a.score - b.score;
  });
  return results;
}

Search.prototype._inputKeyUp = function(e) {
  switch (e.key) {
    case 'Enter':
    case 'Escape':
    case 'ArrowUp':
    case 'ArrowDown':
    case 'Tab':
    case 'Shift':
      break;
    default:
      this._hideResults();
      const results = this._search(this._input.value);
      if (results.length > 0) {
        this._clearResults();
        results.forEach(result => this._appendResult(result));
        this._showResults();
      }
  }
}

Search.prototype._inputKeyDown = function(e) {
  switch (e.key) {
    case 'Enter': {
      const selectedItem = this._getSelectedResultItem();
      if (selectedItem) {
        location.href = selectedItem.querySelector('a').href;
        return;
      }
      const results = this._search(this._input.value);
      if (results.length > 0) {
        location.href = results[0].item.url;
      }
      break;
    }
    case 'Escape':
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
      e.preventDefault();
      break;
    default:
      // do nothing
  }
}

Search.prototype._moveUp = function() {
  if (this._selected_item_index >= 0) {
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

Search.prototype._escapeHTML = function(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

Search.prototype._highlightMatch = function(text, matches, key) {
  var indices = null;
  if (matches) {
    for (var i = 0; i < matches.length; i++) {
      if (matches[i].key === key) {
        indices = matches[i].indices;
        break;
      }
    }
  }
  if (!indices || indices.length === 0) return this._escapeHTML(text);
  var out = '';
  var last = 0;
  var sorted = indices.slice().sort(function(a, b) { return a[0] - b[0]; });
  for (var j = 0; j < sorted.length; j++) {
    var start = sorted[j][0], end = sorted[j][1] + 1;
    out += this._escapeHTML(text.slice(last, start));
    out += '<strong>' + this._escapeHTML(text.slice(start, end)) + '</strong>';
    last = end;
  }
  out += this._escapeHTML(text.slice(last));
  return out;
}

Search.prototype._appendResult = function(result) {
  const template = document.querySelector('#search-result-template');
  const element = document.importNode(template.content, true);
  const a = element.querySelector('a');
  a.href = result.item.url;
  const fun = element.querySelector('.search-result__function');
  fun.innerHTML = this._highlightMatch(result.item.function, result.matches, 'function');
  const mod = element.querySelector('.search-result__module');
  mod.innerHTML = this._highlightMatch(result.item.module, result.matches, 'module');
  this._results.appendChild(element);
}
