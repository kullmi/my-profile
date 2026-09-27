document.addEventListener('DOMContentLoaded', () => {
  const sliderElement = document.querySelector('.splide');

  if (sliderElement && window.Splide) {
    new Splide(sliderElement, {
      type: 'loop',
      perPage: 1,
      gap: '1rem',
      autoplay: false,
      arrows: true,
      pagination: true,
    }).mount();
  }
});
