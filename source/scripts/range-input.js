const sliderElement = document.querySelector('.test-slider');
const valueMin = document.querySelector('.price-filter__input--min');
const valueMax = document.querySelector('.price-filter__input--max');

valueMax.value = 900;
valueMin.value = 0;

noUiSlider.create(sliderElement, {
  range: {
    min: [0],
    max: [984],
  },
  start: [0, 900],
  step: 1,
  connect: [false, true, false],
  format: {
    to: function (value) {
      return value.toFixed(0);
    },
    from: function (value) {
      return parseFloat(value);
    },
  },
});

sliderElement.noUiSlider.on('update', () => {
  [valueMin.value, valueMax.value] = sliderElement.noUiSlider.get();
});
valueMax.addEventListener('change', () => {
  sliderElement.noUiSlider.set([valueMin.value, valueMax.value]);
});
valueMin.addEventListener('change', () => {
  sliderElement.noUiSlider.set([valueMin.value, valueMax.value]);
});
