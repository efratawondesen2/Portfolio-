// Typing Effect

const typing = document.getElementById("typing");

const words = [
  "Computer Science Student",
  "Database Enthusiast",
  "Networking Learner",
  "Future Software Engineer"
];

let wordIndex = 0;
let letterIndex = 0;
let currentWord = "";
let isDeleting = false;

function typeEffect() {

  currentWord = words[wordIndex];

  if (!isDeleting) {

    typing.textContent =
      currentWord.substring(0, letterIndex + 1);

    letterIndex++;

    if (letterIndex === currentWord.length) {
      isDeleting = true;

      setTimeout(typeEffect, 1500);
      return;
    }

  } else {

    typing.textContent =
      currentWord.substring(0, letterIndex - 1);

    letterIndex--;

    if (letterIndex === 0) {
      isDeleting = false;
      wordIndex++;

      if (wordIndex === words.length) {
        wordIndex = 0;
      }
    }
  }

  setTimeout(typeEffect, isDeleting ? 60 : 120);
}

typeEffect();


// Scroll Animation

const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {

  reveals.forEach((element) => {

    const windowHeight = window.innerHeight;
    const top = element.getBoundingClientRect().top;

    if (top < windowHeight - 100) {
      element.classList.add("active");
    }

  });

});


// Dark Mode

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {

  document.body.classList.toggle("dark");

  if(document.body.classList.contains("dark")){
    themeBtn.innerHTML =
      '<i class="fas fa-sun"></i>';
  }
  else{
    themeBtn.innerHTML =
      '<i class="fas fa-moon"></i>';
  }

});


// Mobile Menu

const menuBtn = document.getElementById("menuBtn");

const navLinks =
  document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {

  navLinks.classList.toggle("active");

});
