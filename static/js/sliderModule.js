function sliderDate() {
  const slideCount = document.querySelectorAll('#slider-wrapper ul li').length;
  const slideWapper = document.querySelector('#slider-wrapper');
  const slideWidth = slideWapper.offsetWidth;
  const totalWidth = `${slideCount * slideWidth}px`;
  const slider = document.querySelector('#slider-wrapper ul');
  const sliderLi = document.querySelectorAll('#slider-wrapper li');
  const next = document.getElementById('next');
  const previous = document.getElementById('prev');
  const dateDiv = document.querySelectorAll('.content');

  const dateDivArr = Array.from(dateDiv);
  const dateDivArrH = dateDivArr.map((arr) => arr.offsetHeight);
  const dateDivArrHeight = Math.max(...dateDivArrH);

  let leftPosition = 0;
  let counter = 0;

  slider.style.width = totalWidth;
  Array.from(sliderLi).forEach((slide) => {
    slide.style.width = `${slideWidth}px`;
    slide.style.height = `${dateDivArrHeight}px`;
  });
  slider.style.height = `${dateDivArrHeight}px`;
  slideWapper.style.height = `${dateDivArrHeight}px`;
  function nextSlide() {
    counter += 1;
    if (counter === slideCount) counter = 0;
    leftPosition = `-${counter * slideWidth}px`;
    slider.style.left = leftPosition;
  }
  function previousSlide() {
    counter -= 1;
    if (counter < 0) counter = slideCount - 1;
    leftPosition = `-${counter * slideWidth}px`;
    slider.style.left = leftPosition;
  }

  next.addEventListener('click', (evt) => {
    evt.preventDefault();
    nextSlide();
  });
  previous.addEventListener('click', (evt) => {
    evt.preventDefault();
    previousSlide();
  });
  let timer = setInterval(() => { nextSlide(); }, 3000);
  slideWapper.addEventListener('mouseover', () => clearInterval(timer));
  slideWapper.addEventListener('mouseout', () => {
    timer = setInterval(() => { nextSlide(); }, 3000);
  });
}

export default {
  sliderDate,
};