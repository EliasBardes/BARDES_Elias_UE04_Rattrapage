/* =========================================================
   Histoire HETIC — main.js
   Comportements : header au scroll, menu mobile, animations.
   Vanilla JS, aucune dépendance.
   ========================================================= */

(function () {
  "use strict";

  /* ---------- 1. Header : transparent en haut, blanc au scroll ---------- */
  const header = document.getElementById("siteHeader");
  const SCROLL_TRIGGER = 60;

  function onScroll() {
    if (window.scrollY > SCROLL_TRIGGER) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  }
  if (header) {
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* ---------- 2. Menu mobile (burger) ---------- */
  const navToggle = document.getElementById("navToggle");
  const navMenu = document.getElementById("navMenu");
  const MOBILE_BREAKPOINT = 860;

  function closeMenu() {
    if (!navToggle) return;
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.setAttribute("aria-label", "Ouvrir le menu");
    navMenu.classList.remove("is-open");
    document.body.style.overflow = "";
  }

  function toggleMenu() {
    const isOpen = navToggle.getAttribute("aria-expanded") === "true";
    if (isOpen) {
      closeMenu();
    } else {
      navToggle.setAttribute("aria-expanded", "true");
      navToggle.setAttribute("aria-label", "Fermer le menu");
      navMenu.classList.add("is-open");
      document.body.style.overflow = "hidden";
    }
  }

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", toggleMenu);
    navMenu.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", closeMenu);
    });
  }

  window.addEventListener("resize", function () {
    if (window.innerWidth > MOBILE_BREAKPOINT) closeMenu();
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeMenu();
  });

  /* ---------- 3. Animations d'apparition au scroll ---------- */
  const revealTargets = document.querySelectorAll(
    ".col, .futur-figure, .futur-text, .card, .step, .link-col, .intro"
  );

  if ("IntersectionObserver" in window && revealTargets.length) {
    revealTargets.forEach(function (el) {
      el.style.opacity = "0";
      el.style.transform = "translateY(24px)";
      el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    });

    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "none";
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    revealTargets.forEach(function (el) {
      observer.observe(el);
    });
  }
})();
