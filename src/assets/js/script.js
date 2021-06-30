window.addEventListener('DOMContentLoaded', function () {

  let btnTop = document.querySelector('.top__btn');
  let contactsLink = document.querySelector('#scrollToContacts');
  let scrollValueFooter = document.querySelector('.footer').getBoundingClientRect().top;

  function topButton() {
    btnTop.addEventListener('click', function () {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  };
  topButton();

  function scrollToFooter() {
    contactsLink.addEventListener('click', function (e) {
      e.preventDefault();
      window.scrollTo({
        top: scrollValueFooter,
        behavior: 'smooth',
      });
    });
  };
  scrollToFooter();

});






