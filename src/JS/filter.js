const container = document.querySelector('.carousel-track');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentIndex = 0;
const movies = document.querySelectorAll('.sectin__5-cart1');
const movieWidth = 370;
const visibleMovies = 3;

// function cloneMovies() {
//     movies.forEach((movie) => {
//         const clone = movie.cloneNode(true);
//         container.appendChild(clone);
//     });
//     movies.forEach((movie) => {
//         const clone = movie.cloneNode(true);
//         container.insertBefore(clone, container.firstChild);
//     });
// }

// cloneMovies();

// function setPosition() {
//     container.style.transform = `translateX(-${visibleMovies * movieWidth}px)`;
// }

// setPosition();

function slideNext() {
  currentIndex++;
  container.style.transition = 'transform 0.5s ease-in-out';
  if (currentIndex === 0) {
    container.style.transform = `translateX(${ movieWidth}px)`;
  } else {
    container.style.transform = `translateX(${(currentIndex) * movieWidth}px)`;
  }




  if (currentIndex >= movies.length) {
    setTimeout(() => {
      container.style.transition = 'none';
      currentIndex = 0;
      setPosition();
    }, 500);
  }
}

function slidePrev() {
  currentIndex--;
  container.style.transition = 'transform 0.5s ease-in-out';

  if (currentIndex === 0) {
    container.style.transform = `translateX(-${ movieWidth}px)`;
  } else {
    container.style.transform = `translateX(-${(currentIndex) * movieWidth}px)`;
  }

  if (currentIndex < 0) {
    setTimeout(() => {
      container.style.transition = 'none';
      currentIndex = movies.length - 1;
      setPosition();
    }, 500);
  }
}

nextBtn.addEventListener('click', slideNext);
prevBtn.addEventListener('click', slidePrev);
