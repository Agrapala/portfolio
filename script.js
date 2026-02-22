(function () {
  // Current year in footer
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobile nav toggle
  var toggle = document.querySelector('.nav-toggle');
  var navLinks = document.querySelector('.nav-links');
  if (toggle && navLinks) {
    toggle.addEventListener('click', function () {
      navLinks.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', navLinks.classList.contains('is-open'));
    });
    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('is-open');
      });
    });
  }

  // Hero tagline slideshow
  var taglines = document.querySelectorAll('.hero-tagline-wrap .hero-tagline');
  if (taglines.length > 1) {
    var currentTag = 0;
    function showTagline(index) {
      taglines.forEach(function (t) { t.classList.remove('active'); });
      taglines[index].classList.add('active');
    }
    setInterval(function () {
      currentTag = (currentTag + 1) % taglines.length;
      showTagline(currentTag);
    }, 3200);
  }

})();
