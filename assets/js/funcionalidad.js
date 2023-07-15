let currentSlide = 0;
const slides = document.getElementsByClassName('slide');
const indicators = document.getElementsByClassName('indicator');

function showSlide(index) {
  if (index < 0) {
    index = slides.length - 1;
  } else if (index >= slides.length) {
    index = 0;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.transform = `translateX(-${index * 100}%)`;
  }

  for (let i = 0; i < indicators.length; i++) {
    indicators[i].classList.remove('active');
  }
  indicators[index].classList.add('active');

  currentSlide = index;
}

function changeSlide(n) {
  showSlide(currentSlide + n);
}

function goToSlide(index) {
  showSlide(index - 1);
}

showSlide(currentSlide);

