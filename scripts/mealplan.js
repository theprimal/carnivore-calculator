document.getElementById("plan-meals").addEventListener("click", function (e) {
  const calories = parseInt(document.getElementById("calories").value);
  const unit = document.getElementById("unit").value;

  const meals = generateMealPlan(calories, unit);
  console.log(calories, unit);
  displayMealPlan(meals, unit);
});

function generateMealPlan(calories, unit) {
  const mealPlan = [];
  const numMeals = 3;
  const caloriesPerMeal = calories / numMeals;

  // Carnivore-approved ingredients
  const ingredients = [
    { name: "Ribeye Steak", caloriesPer100g: 291 },
    { name: "Ground Beef (80% lean)", caloriesPer100g: 254 },
    { name: "Pork Belly", caloriesPer100g: 518 },
    { name: "Chicken Thighs", caloriesPer100g: 209 },
    { name: "Salmon", caloriesPer100g: 208 },
    {
      name: "Eggs",
      caloriesPer100g: 143,
      isUnitBased: true,
      averageWeight: 50,
    },
    { name: "Bacon", caloriesPer100g: 541 },
    { name: "Lamb Chops", caloriesPer100g: 282 },
    { name: "Beef Liver", caloriesPer100g: 135 },
    { name: "Pork Sausage", caloriesPer100g: 297 },
    { name: "Chicken Liver", caloriesPer100g: 165 },
    { name: "Duck Breast", caloriesPer100g: 337 },
    { name: "Venison", caloriesPer100g: 158 },
    { name: "Bison", caloriesPer100g: 143 },
    { name: "Trout", caloriesPer100g: 148 },
    { name: "Mackerel", caloriesPer100g: 305 },
    { name: "Sardines", caloriesPer100g: 208 },
    { name: "Oysters", caloriesPer100g: 68 },
    { name: "Shrimp", caloriesPer100g: 99 },
    { name: "Lobster", caloriesPer100g: 90 },
  ];

  for (let i = 0; i < numMeals; i++) {
    const meal = [];
    const ingredient =
      ingredients[Math.floor(Math.random() * ingredients.length)];
    const quantityGrams = (caloriesPerMeal / ingredient.caloriesPer100g) * 100;
    const quantity = Math.round(
      unit === "ounces" ? convertGramsToOunces(quantityGrams) : quantityGrams
    );
    if (ingredient.isUnitBased) {
      const quantityUnits = Math.ceil(quantityGrams / ingredient.averageWeight);
      meal.push({
        name: ingredient.name,
        quantity: quantity,
        units: quantityUnits,
      });
    } else {
      meal.push({ name: ingredient.name, quantity: quantity });
    }
    mealPlan.push(meal);
  }

  console.log(mealPlan);
  return mealPlan;
}

function convertGramsToOunces(grams) {
  return grams * 0.035274;
}

function displayMealPlan(meals, unit) {
  const mealPlanDiv = document.getElementById("mealPlan");
  mealPlanDiv.style.display = "block";
  mealPlanDiv.innerHTML = "";
  meals.forEach((meal, index) => {
    const mealDiv = document.createElement("div");
    mealDiv.classList.add("meal");
    const mealTitle = document.createElement("h4");
    mealTitle.innerText = `Meal ${index + 1}`;
    mealDiv.appendChild(mealTitle);
    const mealList = document.createElement("ul");
    meal.forEach((item) => {
      const listItem = document.createElement("li");
      listItem.innerText = `${item.name}: ${
        item.units ? `(${item.units})` : ``
      } ${item.quantity} ${unit}`;
      mealList.appendChild(listItem);
    });
    mealDiv.appendChild(mealList);
    mealPlanDiv.appendChild(mealDiv);
  });
}
