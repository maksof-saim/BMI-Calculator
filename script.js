const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Given height is  ${height}`;
  }else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Given Weight is  ${weight}`;
  }
  else {
    const bmi = (weight / (height * height)) * 10000;
    results.innerHTML = `Your BMI is ${bmi.toFixed(2)}`;
  
  if (bmi <= 18.6){
    results.innerHTML = `Your BMI is ${bmi.toFixed(2)} and you are underweight`;
  }else if (bmi <= 24.9){
    results.innerHTML = `Your BMI is ${bmi.toFixed(2)} and you are in Normal Range`;
  }else {
    results.innerHTML = `Your BMI is ${bmi.toFixed(2)} and you are overweight`;

  }
}
})