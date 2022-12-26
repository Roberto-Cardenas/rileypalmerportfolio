const parallaxTargetHero = document.querySelector('.hero__image');


window.addEventListener('scroll', () => {
  const wScroll = window.scrollY;
  parallaxTargetHero.style.objectPosition = "right " + wScroll * 0.07 + "px";
});