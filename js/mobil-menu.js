(() => {
  const menuBtnRef = document.querySelector('.menu-open');
  const mobileMenuRef = document.querySelector('.mobile-menu');
  const mobileBtnClose = document.querySelector('.mobile-menu__close');

  menuBtnRef.addEventListener('click', () => {
    mobileMenuRef.classList.toggle('is-hidden');
  });

  mobileBtnClose.addEventListener('click', () => {
    mobileMenuRef.classList.toggle('is-hidden');
  });
})();
