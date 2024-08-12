const height = document.getElementById('height');
const weight = document.getElementById('weight');
const result = document.getElementById('result');
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const bmi = (weight.value / ((height.value / 100) ** 2)).toFixed(2);
  result.textContent = `Your BMI is ${bmi}`;
});