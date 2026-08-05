// Discover Gitata — shared behavior

document.addEventListener('DOMContentLoaded', () => {
  // Mobile nav toggle
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      links.classList.toggle('open');
      const open = links.classList.contains('open');
      toggle.setAttribute('aria-expanded', open);
    });
  }

  // Mobile dropdown (Heritage) toggle
  document.querySelectorAll('.has-dropdown > a.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
      if (window.innerWidth <= 980) {
        e.preventDefault();
        link.parentElement.classList.toggle('open');
      }
    });
  });

  // Close mobile nav when a real link is clicked
  document.querySelectorAll('.nav-links a:not(.has-dropdown > a)').forEach(a => {
    a.addEventListener('click', () => {
      if (links) links.classList.remove('open');
    });
  });

  // Contact form — static fallback (no backend wired yet)
  const form = document.querySelector('#contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const note = document.querySelector('#form-status');
      if (note) {
        note.textContent = 'Thanks — this form is not yet connected to a live inbox. Please reach us on WhatsApp for now.';
      }
      form.reset();
    });
  }
});

/* ---------------------------------------------------------------------
   FIREBASE — placeholder wiring, mirrors the GitataHub pattern.
   Fill in firebaseConfig below once the "discovergitata" Firebase
   project exists, then swap the static arrays in news.js / gallery.js
   for live Firestore reads. Until then, every page runs on the static
   fallback content already written into the HTML.
   --------------------------------------------------------------------- */
// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
// const firebaseConfig = {
//   apiKey: "",
//   authDomain: "",
//   projectId: "discovergitata",
//   storageBucket: "",
//   messagingSenderId: "",
//   appId: ""
// };
// export const app = initializeApp(firebaseConfig);
