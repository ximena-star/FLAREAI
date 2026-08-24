const sections = document.querySelectorAll('section');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(({ target, isIntersecting }) => {
    if (isIntersecting) target.classList.add('is-visible');
  });
}, { threshold: 0.12 });

sections.forEach((section) => observer.observe(section));

document.querySelector('.menu-button').addEventListener('click', () => {
  document.querySelector('nav').classList.toggle('open');
});
