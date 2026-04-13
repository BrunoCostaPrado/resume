function calculate() {
  var imc
  var result = document.getElementById("result")

  var weight = Number.parseInt(document.getElementById("weight").value)
  document.getElementById("weight-val").textContent = weight + " kg"
  var height = Number.parseInt(document.getElementById("height").value)
  document.getElementById("height-val").textContent = height + " cm"

  imc = (weight / (height / 100) ** 2).toFixed(1)
  result.textContent = imc
  if (imc < 18.5) {
    category = "Underweight"
    result.style.color = "#ffc44d"
  } else if (imc >= 18.5 && imc <= 24.9) {
    category = "Normal weight"
    result.style.color = "#0be881"
  } else if (imc >= 25 && imc <= 29.9) {
    category = "Overweight"
    result.style.color = "#ff884d"
  } else {
    category = "Obese"
    result.style.color = "#ff5e57"
  }
  document.getElementById("category").textContent = category
}