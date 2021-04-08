let slider = document.querySelector('#normalProduct');
let mouseDown = false;
let startX, scrollLeft;

let startDragging = function (e) {
  mouseDown = true;
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
};
let stopDragging = function (event) {
  mouseDown = false;
};

slider.addEventListener('mousemove', (e) => {
  e.preventDefault();
  if(!mouseDown) { return; }
  const x = e.pageX - slider.offsetLeft;
  const scroll = x - startX;
  slider.scrollLeft = scrollLeft - scroll;
});

// Add the event listeners
slider.addEventListener('mousedown', startDragging, false);
slider.addEventListener('mouseup', stopDragging, false);
slider.addEventListener('mouseleave', stopDragging, false);



//--------------------------

let slider2 = document.querySelector('#recommendedProduct');
let mouseDown2 = false;
let startX2, scrollLeft2;

let startDragging2 = function (e) {
  mouseDown2 = true;
  startX2 = e.pageX - slider2.offsetLeft;
  scrollLeft2 = slider2.scrollLeft2;
};
let stopDragging2 = function (event) {
  mouseDown2 = false;
};

slider2.addEventListener('mousemove', (e) => {
  e.preventDefault();
  if(!mouseDown2) { return; }
  const x2 = e.pageX - slider2.offsetLeft;
  const scroll2 = x2 - startX2;
  slider2.scrollLeft2 = scrollLeft2 - scroll2;
});

// Add the event listeners
slider2.addEventListener('mouseDown', startDragging2, false);
slider2.addEventListener('mouseup', stopDragging2, false);
slider2.addEventListener('mouseleave', stopDragging2, false);













/******************************************************* */