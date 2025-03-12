document
  .getElementById("calorie-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const gender = document.getElementById("gender").value;
    const age = parseInt(document.getElementById("age").value);
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value);
    const activity = parseFloat(document.getElementById("activity").value);

    // Basal Metabolic Rate (BMR) calculation using Mifflin-St Jeor Equation
    let bmr;
    if (gender === "male") {
      bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
      bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    // Total Daily Energy Expenditure (TDEE)
    const tdee = bmr * activity;

    document.getElementById(
      "result"
    ).textContent = `Estimated daily caloric needs: ${tdee.toFixed(
      2
    )} calories.`;
  });
