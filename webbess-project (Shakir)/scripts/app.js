(function() {
  // globals
  const burger = document.querySelector('.burger'),
    header__nav = document.querySelector('.header__nav'),
    header = document.querySelector('.header');

  // burger
  burger.addEventListener('click', function() {
    this.classList.toggle('active');
    header__nav.classList.toggle('open');
  });

  // header
  window.onscroll = function() {
    if (
      document.body.scrollTop >= 200 ||
      document.documentElement.scrollTop >= 200
    ) {
      header.classList.add('header--scroll');
    } else {
      header.classList.remove('header--scroll');
    }
  };
})();
