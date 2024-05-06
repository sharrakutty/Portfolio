const logo = document.getElementById('logo');
const body = document.body;
const video = document.getElementById('background-video');

logo.addEventListener('click', () => {
  body.classList.toggle('active');

  if (video.style.display === 'none' || video.style.display === '') {
    video.style.display = 'block';
    video.style.width = '100vw';
    video.style.height = '100vh';
    video.play();
  } else {
    video.style.display = 'none';
    video.pause();
  }
});


// Carousel //
const carouselItems = document.querySelectorAll('.carousel-item');
let currentIndex = 0;

function showSlide(index) {
  carouselItems.forEach(item => {
    item.style.display = 'none';
  });

  carouselItems[index].style.display = 'block';
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % carouselItems.length;
  showSlide(currentIndex);
}

function previousSlide() {
  currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
  showSlide(currentIndex);
}

document.addEventListener('keydown', function(event) {
  if (event.key === 'ArrowRight') {
    nextSlide();
  } else if (event.key === 'ArrowLeft') {
    previousSlide();
  }
});

showSlide(currentIndex);
document.getElementById('nextBtn').addEventListener('click', nextSlide);
document.getElementById('prevBtn').addEventListener('click', previousSlide);

// Get all the grid items
const gridItems = document.querySelectorAll('.grid-item');

// Add an event listener to each grid item
gridItems.forEach((gridItem) => {
  const mainImage = gridItem.querySelector('.main-image');
  const thumbnail = gridItem.querySelector('.thumbnail');

  mainImage.addEventListener('mouseenter', () => {
    thumbnail.style.display = 'block';
    thumbnail.style.opacity = 1;
  });

  mainImage.addEventListener('mouseleave', () => {
    thumbnail.style.display = 'none';
    thumbnail.style.opacity = 0;
  });
});

var scrollEventHandler = function()
{
  window.scroll(0, window.pageYOffset)
}

window.addEventListener("scroll", scrollEventHandler, false);