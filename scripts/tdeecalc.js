function calculateTDEE(gender, age, weight, height, PAL, metric) {
  var metric = true;
  var TDEE = 10 * weight + 6.25 * height - 5 * age;
  if (gender == "Male") {
    TDEE = TDEE - 5;
  } else {
    TDEE = TDEE - 161;
  }

  TDEE = TDEE * PAL;

  TDEE = Math.round(TDEE);
  return TDEE;
}

function calculateBMI(weight, height) {
  var output = weight / (height / 100) / (height / 100);
  output = output.toFixed(1);

  return output;
}
