const primaryNav = document.querySelector('.primary-navigation');
const menuToggle = document.querySelector('.menu-btn');

menuToggle.addEventListener('click', () => {
  const visibility = primaryNav.getAttribute('data-visible');

  if (visibility == 'false') {
    primaryNav.setAttribute('data-visible', true);
    menuToggle.setAttribute('aria-expanded', true);
  } else {
    primaryNav.setAttribute('data-visible', false);
    menuToggle.setAttribute('aria-expanded', false);
  }
});