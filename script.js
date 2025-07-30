// Scroll Reveal Animation
const elementsToReveal = document.querySelectorAll('.hero, .mockup img, .review');

const observerOptions = {
  threshold: 0.1
};

const revealOnScroll = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('reveal');
      observer.unobserve(entry.target);
    }
  });
};

const observer = new IntersectionObserver(revealOnScroll, observerOptions);

elementsToReveal.forEach(el => {
  el.classList.add('hidden');
  observer.observe(el);
});



// Fade-in animation on scroll
const cards = document.querySelectorAll('.tool-card');

const reveal = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.2 });

cards.forEach(card => {
  card.classList.add('hidden');
  reveal.observe(card);
});


const tabs = document.querySelectorAll('.tab');
const contents = document.querySelectorAll('.tab-content');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    // Remove active states
    tabs.forEach(t => t.classList.remove('active'));
    contents.forEach(c => c.classList.remove('active'));

    // Activate current
    tab.classList.add('active');
    const target = document.getElementById(tab.dataset.tab);
    target.classList.add('active');
  });
});
