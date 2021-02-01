function slider() {
    const slides = document.querySelectorAll('.offer__slide'),
    slider = document.querySelector('.offer__slider'),
    next = document.querySelector('.offer__slider-next'),
    prev = document.querySelector('.offer__slider-prev'),
    total = document.querySelector('#total'),
    current = document.querySelector('#current'),
    slidesWrapper = document.querySelector('.offer__slider-wrapper'),
    slidesField = document.querySelector('.offer__slider-inner'),
    width = window.getComputedStyle(slidesWrapper).width;

let slideIndex = 1;
let offset = 0;

function getWidthAsNumber() {
  return +width.replace(/\D/g, '');
}

function setAllSlidesView() {
  if (slides.length < 10) {
      total.textContent = `0${slides.length}`;
      current.textContent = `0${slideIndex}`;
  } else {
      total.textContent = `${slides.length}`;
      current.textContent = slideIndex;
  }
}

function setCurrentSlidesView(length, index) {
  if (length < 10) {
      current.textContent = `0${index}`;
  } else {
      current.textContent = index;
  }
}

function setDotsOpacity(index) {
  dots.forEach(dot => dot.style.opacity = '.5');
  dots[index].style.opacity = 1;
}

setAllSlidesView();

slidesField.style.width = 100 * slides.length +'%';
slidesField.style.display = 'flex';
slidesField.style.transition = '0.5s all';

slidesWrapper.style.overflow = 'hidden';

slides.forEach(slide => {
  slide.style.width = width;
});

slider.style.position = 'relative';

const indicators = document.createElement('ol'),
    dots = [];

indicators.classList.add('carousel-indicators');
slider.append(indicators);

for (let i = 0; i < slides.length; i++) {
  const dot = document.createElement('li');
  dot.setAttribute('data-slide-to', i + 1);
  dot.classList.add('dot');
  if (i == 0) {
      dot.style.opacity = 1;
  }
  indicators.append(dot);
  dots.push(dot);
}

next.addEventListener('click', () => {
  if (offset == getWidthAsNumber() * (slides.length - 1)) {
      offset = 0;
  } else {
      offset += getWidthAsNumber();
  }

  slidesField.style.transform = `translateX(-${offset}px)`;

  if (slideIndex == slides.length) {
      slideIndex = 1;
  } else {
      slideIndex += 1;
  }

  setCurrentSlidesView(slides.length, slideIndex);

  setDotsOpacity(slideIndex - 1);
});

prev.addEventListener('click', () => {
  if (offset == 0) {
      offset = getWidthAsNumber() * (slides.length - 1);
  } else {
      offset -= getWidthAsNumber();
  }

  slidesField.style.transform = `translateX(-${offset}px)`;

  if (slideIndex == 1) {
      slideIndex = slides.length;
  } else {
      slideIndex -= 1;
  }

  setCurrentSlidesView(slides.length, slideIndex);

  setDotsOpacity(slideIndex - 1);

});

dots.forEach(dot => {
  dot.addEventListener('click', (e) => {
      const slideTo = e.target.getAttribute('data-slide-to');

      slideIndex = slideTo;
      offset = getWidthAsNumber() * (slideTo - 1);
      slidesField.style.transform = `translateX(-${offset}px)`;

      setCurrentSlidesView(slides.length, slideIndex);
      
      setDotsOpacity(slideIndex - 1);

  });
});

}

module.exports = slider;