(function () {
  var STORAGE_KEY = 'theme';
  var root = document.documentElement;
  var buttons = document.querySelectorAll('.theme-switch__option');

  if (!buttons.length) {
    return;
  }

  function getStored() {
    try {
      return localStorage.getItem(STORAGE_KEY);
    } catch (e) {
      return null;
    }
  }

  function setStored(value) {
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch (e) {}
  }

  function apply(value) {
    if (value === 'light' || value === 'dark') {
      root.setAttribute('data-theme', value);
    } else {
      root.removeAttribute('data-theme');
    }
    buttons.forEach(function (button) {
      button.setAttribute('aria-pressed', String(button.dataset.themeValue === value));
    });
  }

  buttons.forEach(function (button) {
    button.addEventListener('click', function () {
      var value = button.dataset.themeValue;
      setStored(value);
      apply(value);
    });
  });

  apply(getStored() || 'system');
})();
