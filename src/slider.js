const galleryFeedbacks = document.querySelectorAll('.gallery__feedback');
const galleryDots = document.querySelectorAll('.gallery__dot');
const galleryPhotos = document.querySelectorAll('.gallery__photo');

let slideIndex = 0;

galleryFeedbacks.forEach((f, index) => {
  f.addEventListener('click', () => {
    galleryFeedbacks[slideIndex].classList.remove('gallery__feedback--active');
    galleryDots[slideIndex].classList.remove('gallery__dot--active');
    galleryPhotos[slideIndex].classList.remove('gallery__photo--active');

    slideIndex = (index + 1) % galleryFeedbacks.length;

    galleryFeedbacks[slideIndex].classList.add('gallery__feedback--active');
    galleryDots[slideIndex].classList.add('gallery__dot--active');
    galleryPhotos[slideIndex].classList.add('gallery__photo--active');
  });
});
