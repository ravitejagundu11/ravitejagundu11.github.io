(function () {
  var root = document.documentElement;

  // Theme toggle
  var themeBtn = document.getElementById("theme-toggle");
  themeBtn.addEventListener("click", function () {
    var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  });

  // Mobile menu
  var menuBtn = document.querySelector(".menu-toggle");
  var links = document.getElementById("nav-links");
  menuBtn.addEventListener("click", function () {
    var open = links.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", String(open));
    menuBtn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  });
  links.querySelectorAll("a").forEach(function (a) {
    a.addEventListener("click", function () {
      links.classList.remove("open");
      menuBtn.setAttribute("aria-expanded", "false");
    });
  });

  // Footer year
  document.getElementById("year").textContent = new Date().getFullYear();

  // Highlight the nav link for the section in view, and reveal sections on scroll
  if ("IntersectionObserver" in window) {
    var navMap = {};
    links.querySelectorAll('a[href^="#"]').forEach(function (a) {
      navMap[a.getAttribute("href").slice(1)] = a;
    });

    var sectionObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        var link = navMap[entry.target.id];
        if (link && entry.isIntersecting) {
          Object.values(navMap).forEach(function (l) { l.classList.remove("active"); });
          link.classList.add("active");
        }
      });
    }, { rootMargin: "-45% 0px -50% 0px" });

    document.querySelectorAll("main section[id]").forEach(function (s) { sectionObserver.observe(s); });

    var revealObserver = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    document.querySelectorAll(".job, .card, .skill-group, .edu, .stats li").forEach(function (el) {
      el.classList.add("reveal");
      revealObserver.observe(el);
    });
  }
})();
