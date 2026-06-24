const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".site-nav");
const filters = document.querySelectorAll(".filter");
const projects = document.querySelectorAll(".project-card");

navToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

filters.forEach((button) => {
  button.addEventListener("click", () => {
    const selected = button.dataset.filter;

    filters.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");

    projects.forEach((project) => {
      const shouldShow = selected === "all" || project.dataset.category === selected;
      project.classList.toggle("is-hidden", !shouldShow);
    });
  });
});
