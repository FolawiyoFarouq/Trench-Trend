// Loader
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  const content = document.getElementById("content");

  loader.style.display = "none";
  content.classList.remove("hidden");
});

// Parallax Background Shrink
window.addEventListener("scroll", () => {
  const bg = document.querySelector(".hero-bg");
  let scrollY = window.scrollY;

  let scaleValue = 1 - scrollY / 2000;
  if (scaleValue < 0.7) scaleValue = 0.7;
  bg.style.transform = `scale(${scaleValue})`;
});

// Dark Mode Toggle
const toggleBtn = document.getElementById("darkModeToggle");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    toggleBtn.textContent = "☀️";
  } else {
    toggleBtn.textContent = "🌙";
  }
});

// Testimonial Slider
const slider = document.querySelector(".slider");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

const cardWidth = 320;

next.addEventListener("click", () => {
  slider.scrollBy({ left: cardWidth, behavior: 'smooth' });
});

prev.addEventListener("click", () => {
  slider.scrollBy({ left: -cardWidth, behavior: 'smooth' });
});



// ====================
// Product Carousel
// ====================
const track = document.querySelector(".carousel-track");
const carouselCards = document.querySelectorAll(".product-card");
const prevBtn = document.querySelector(".carousel-btn.left");
const nextBtn = document.querySelector(".carousel-btn.right");

let index = 0;
// const cardWidth = carouselCards[0].offsetWidth + 20; // card + margin
const visibleCards = Math.floor(document.querySelector(".carousel-container").offsetWidth / cardWidth);

function updateCarousel() {
  track.style.transform = `translateX(-${index * cardWidth}px)`;
}

// Next Button
nextBtn.addEventListener("click", () => {
  if (index < carouselCards.length - visibleCards) {
    index++;
  } else {
    index = 0; // loop back
  }
  updateCarousel();
});

// Prev Button
prevBtn.addEventListener("click", () => {
  if (index > 0) {
    index--;
  } else {
    index = carouselCards.length - visibleCards; // loop back
  }
  updateCarousel();
});

// Auto Scroll
setInterval(() => {
  if (index < carouselCards.length - visibleCards) {
    index++;
  } else {
    index = 0;
  }
  updateCarousel();
}, 3000);
