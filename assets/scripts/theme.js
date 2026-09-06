(function () {
  var STORAGE_KEY = 'theme';
  var CYCLE_ORDER = ['light', 'dark', 'system'];
  var root = document.documentElement;
  var buttons = document.querySelectorAll('.theme-switch__option');
  var cycleButton = document.getElementById('theme-switch-cycle');
  var cycleLabel = document.getElementById('theme-switch-cycle-label');

  if (!buttons.length && !cycleButton) {
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
    if (cycleButton) {
      cycleButton.dataset.themeValue = value;
    }
    if (cycleLabel) {
      cycleLabel.textContent = value.charAt(0).toUpperCase() + value.slice(1);
    }
  }

  buttons.forEach(function (button) {
    button.addEventListener('click', function () {
      var value = button.dataset.themeValue;
      setStored(value);
      apply(value);
    });
  });

  if (cycleButton) {
    cycleButton.addEventListener('click', function () {
      var current = cycleButton.dataset.themeValue || 'system';
      var next = CYCLE_ORDER[(CYCLE_ORDER.indexOf(current) + 1) % CYCLE_ORDER.length];
      setStored(next);
      apply(next);
    });
  }

  apply(getStored() || 'system');
})();
