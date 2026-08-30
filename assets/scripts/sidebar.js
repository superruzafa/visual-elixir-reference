(function () {
  var toggle = document.getElementById('sidebar-toggle');
  var sidebar = document.getElementById('sidebar-nav');
  var backdrop = document.getElementById('sidebar-backdrop');

  if (!toggle || !sidebar || !backdrop) {
    return;
  }

  function closeSidebar() {
    document.body.classList.remove('sidebar-open');
    toggle.setAttribute('aria-expanded', 'false');
  }

  function openSidebar() {
    document.body.classList.add('sidebar-open');
    toggle.setAttribute('aria-expanded', 'true');
  }

  toggle.addEventListener('click', function () {
    if (document.body.classList.contains('sidebar-open')) {
      closeSidebar();
    } else {
      openSidebar();
    }
  });

  backdrop.addEventListener('click', closeSidebar);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      closeSidebar();
    }
  });

  sidebar.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') {
      closeSidebar();
    }
  });

  var current = sidebar.querySelector('a[aria-current="page"]');
  if (current) {
    current.scrollIntoView({ block: 'center' });
  }
})();
