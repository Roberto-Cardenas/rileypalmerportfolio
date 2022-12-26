const header = document.querySelector("header");
const heroImage = document.querySelector(".hero__image");
const heroSection = document.querySelector(".hero");
const aboutSection = document.querySelector(".about");
const portfolioSection = document.querySelector(".portfolio");

const heroImageOptions = {
  threshold: "0.95"
};

const sectionOptions = {
  rootMargin: "-1% 0px -99% 0px"
};

// Change the navbar styles on scroll
const heroContainerObserver = new IntersectionObserver((entries) =>  {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      header.classList.add('nav-scrolled');
    } else {
      header.classList.remove('nav-scrolled');
    }
  }); 
}, heroImageOptions);

// Change the active tab on the navbar while scrolling
const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Get current section
      const sectionName = entry.target.getAttribute('data-section');

      // Turn off the previous active tab and turn on the current active one
      header.getElementsByClassName('active')[0].classList.remove('active');
      header.getElementsByClassName(sectionName)[0].classList.add('active');
    }
  })
}, sectionOptions);

heroContainerObserver.observe(heroImage);
document.querySelectorAll('section').forEach((section) => {
  sectionObserver.observe(section);
});