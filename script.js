const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");
const allLinks = document.querySelectorAll("a:link");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

allLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    if (link.classList.contains("main-nav-link"))
      headerEl.classList.toggle("nav-open");
  });
});

// Add sticky Navigation
const sectionHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);
    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }
    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // in the viewport
    root: null,
    threshold: 0,
    // osa pixels einai to height tou nav
    rootMargin: "-80px",
  },
);
obs.observe(sectionHeroEl);
