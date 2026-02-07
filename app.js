let index = 0;
const track = document.getElementById("instaTrack");
const dots = document.querySelectorAll(".dot");

function moveSlide(dir) {
  const maxIndex = track.children.length - 3;
  index += dir;

  if (index < 0) index = 0;
  if (index > maxIndex) index = maxIndex;

  track.style.transform = `translateX(-${index * 33.33}%)`;
  updateDots();
}

function updateDots() {
  dots.forEach(d => d.classList.remove("active"));
  dots[Math.min(index, dots.length - 1)].classList.add("active");
}



// 
let currentSlide = 0;

function slideTeam(direction) {
  const slider = document.getElementById("teamSlider");
  const totalCards = slider.children.length;

  // number of visible cards
  let visible = 3;
  if (window.innerWidth <= 900) visible = 2;
  if (window.innerWidth <= 600) visible = 1;

  const maxSlide = totalCards - visible;

  currentSlide += direction;

  if (currentSlide < 0) currentSlide = 0;
  if (currentSlide > maxSlide) currentSlide = maxSlide;

  slider.style.transform = `translateX(-${currentSlide * (100 / visible)}%)`;
}



// 
  const slider = document.getElementById("reviewSlider");
  const dotsBox = document.getElementById("reviewDots");

  const cardWidth = 340;
  const totalCards = slider.children.length;
  const visibleCards = 3;

  let slidePos = 0;
  const totalSlides = Math.ceil(totalCards / visibleCards);

  // create dots
  for (let d = 0; d < totalSlides; d++) {
    const dot = document.createElement("span");
    dot.onclick = () => moveTo(d);
    dotsBox.appendChild(dot);
  }

  function updateDots() {
    [...dotsBox.children].forEach(dot => dot.classList.remove("active"));
    dotsBox.children[slidePos].classList.add("active");
  }

  function moveTo(pos) {
    slidePos = pos;
    slider.style.transform =
      `translateX(-${slidePos * visibleCards * cardWidth}px)`;
    updateDots();
  }

  updateDots();
