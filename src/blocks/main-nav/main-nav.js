(function(){

  // Добавление/удаление модификаторов при клике на переключение видимости
  var toggler = document.getElementById('main-nav-toggler');
  var mobileMenu = document.querySelector('#mobile-menu');
  var body = document.querySelector('body');

  function mobNavVisibleToggle (e) {
    // e.preventDefault();
    toggler.classList.toggle('burger--close'); // модификатор иконки (должен быть .burger)

    if (!mobileMenu.classList.contains('openMenu')) {
      openMenuHandler();
      body.classList.add('no-scroll');
    } else {
        closeMenuHandler();
        body.classList.remove('no-scroll');
    }
  }
  function openMenuHandler () {
    mobileMenu.classList.add('openMenu');
    mobileMenu.classList.remove('closeMenu');
  }

  function closeMenuHandler () {
    mobileMenu.classList.remove('openMenu');
    mobileMenu.classList.add('closeMenu');
  }

  if (toggler) {
    toggler.addEventListener('click', mobNavVisibleToggle);
  }


}());
