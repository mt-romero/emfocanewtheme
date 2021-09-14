//variables, consts and other values
const sliderLong = document.querySelector('.galleryMobile')
let positionInitial = {
  left: 0,
  x: 0
};

const slidesAll = document.querySelectorAll('.slideMobile');
const slides = Array.from(slidesAll);
const containerWidth = sliderLong.offsetWidth;
var previousSlide;
var currentSlidePosition= 0;
var nextSlide;
let moving = false;
let pressed = false;
const indicatorNext = document.querySelector('#next');
const indicatorPrevious = document.querySelector('#previous');


console.log(containerWidth);

//controls

function moveLeft() {
  var currentSlidePosition= sliderLong.scrollLeft;
  var nextSlidePosition = currentSlidePosition + containerWidth;
  sliderLong.scrollLeft = nextSlidePosition;
  currentSlidePosition = sliderLong.scrollLeft;
  console.log(currentSlidePosition)

}

function moveRight() {
    var currentSlidePosition= sliderLong.scrollLeft;
    var previousSlidePosition = currentSlidePosition - containerWidth;
    sliderLong.scrollLeft = previousSlidePosition;
    currentSlidePosition = sliderLong.scrollLeft;
    console.log(currentSlidePosition)


}

indicatorNext.addEventListener('click', moveLeft);
indicatorPrevious.addEventListener('click', moveRight);

// main functionality+swipe
function setInitialPosition(event) {
  event.preventDefault();
  pressed = true;
  positionInitial = {
    left: sliderLong.scrollLeft,
    x: event.clientX
  }
}

function swipeToPosition(event) {
  if (pressed === true) {
    event.preventDefault();
    moving = true;
    sliderLong.classList.add('.active');
    const dragDistance = event.clientX - positionInitial.x;
    sliderLong.scrollLeft = positionInitial.left - dragDistance;
    currentSlidePosition = sliderLong.scrollLeft;
  } else {
    moving = false;
    return;
  }
}

function stopPosition(event) {
  if (pressed === true) {
    event.preventDefault();
    sliderLong.classList.remove('.active');
    pressed = false;
    moving = false;
    console.log(currentSlidePosition)
  } else {
    pressed = false;
    moving = false;
    return;

  }


}

sliderLong.addEventListener('mousedown', setInitialPosition);
sliderLong.addEventListener('mousemove', swipeToPosition);
sliderLong.addEventListener('mouseleave', stopPosition);
sliderLong.addEventListener('mouseup', stopPosition);



/*sliderLong.addEventListener('mousedown', e => {
  e.preventDefault();
  pressed = true;
  positionInitial = {
    left: sliderLong.scrollLeft,
    x: e.clientX
  };
})

sliderLong.addEventListener('mousemove', e => {
  if (pressed === true) {
    e.preventDefault();
    moving = true;
    sliderLong.classList.add('.active');
    const dragDistance = e.clientX - positionInitial.x;
    sliderLong.scrollLeft = positionInitial.left - dragDistance;
  } else {
    moving = false;
    return;
  }


sliderLong.addEventListener('mouseleave', e => {
  if (pressed === true) {
    e.preventDefault();
    pressed = false;
    moving = false;
    sliderLong.classList.remove('.active');
    e.preventDefault();
  }


})

sliderLong.addEventListener('mouseup', e => {
  if (pressed === true) {
    e.preventDefault();
    sliderLong.classList.remove('.active');
    moving = false
    pressed = false;
    console.log(pressed)
    return;
  } else {
    pressed = false;
    moving = false;
    return;
  }
})})*/




/*

sliderLong.scrollLeft=150

const slider = document.querySelector('.gallery');
const wrapper =document.querySelector('.highlightsWrapper');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', e => {
  isDown = true;
  slider.classList.add('active');
  startX = wrapper.offsetLeft - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', _ => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mouseup', _ => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mousemove', e => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const SCROLL_SPEED = 3;
  const walk = (x - startX) * SCROLL_SPEED;
  slider.scrollLeft = scrollLeft - walk;
}); */