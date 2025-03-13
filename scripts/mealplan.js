document.getElementById("plan-meals").addEventListener("click", function (e) {
  const calories = parseInt(document.getElementById("calories").value);
  const unit = document.getElementById("unit").value;

  const meals = Array.from({ length: 7 }, () =>
    generateMealPlan(calories, unit)
  );
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
    let meal = {};
    const ingredient =
      ingredients[Math.floor(Math.random() * ingredients.length)];
    const quantityGrams = (caloriesPerMeal / ingredient.caloriesPer100g) * 100;
    const quantity = Math.round(
      unit === "ounces" ? convertGramsToOunces(quantityGrams) : quantityGrams
    );
    if (ingredient.isUnitBased) {
      const quantityUnits = Math.ceil(quantityGrams / ingredient.averageWeight);
      meal = {
        name: ingredient.name,
        quantity: quantity,
        units: quantityUnits,
      };
    } else {
      meal = { name: ingredient.name, quantity: quantity };
    }
    mealPlan.push(meal);
  }

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
    const dayDiv = document.createElement("div");

    const dayTitle = document.createElement("h3");
    dayDiv.classList.add("mt-2");
    dayDiv.innerText = `Day ${index + 1}`;
    dayDiv.appendChild(dayTitle);

    mealPlanDiv.appendChild(dayDiv);
    const mealList = document.createElement("ul");
    mealList.classList.add("list-group");
    meal.forEach((item) => {
      const listItem = document.createElement("li");
      listItem.classList.add("list-group-item");
      listItem.innerText = `${item.name}: ${
        item.units ? `(${item.units})` : ``
      } ${item.quantity} ${unit}`;
      mealList.appendChild(listItem);
    });
    dayDiv.appendChild(mealList);
  });
}

const meals = Array.from({ length: 7 }, () => generateMealPlan(2100, "grams"));
displayMealPlan(meals, "grams");
