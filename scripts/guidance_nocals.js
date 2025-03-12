// Takes the BMI, TDEE and current calories to return a guidance string
// 20211218 to do: - Turn height in grams protein into a rounded figure (lbs conversion issue)
// check consistency for height in grams vs 30% recommended TDEE - latter comes out lower in some cases. Ignore the height in cm heuristic entirely? Or just for the mass growth recs?
function returnGuidanceNoCals(BMI, TDEE, height, weight) {
  //assumes weight is in lbs, height in cm
  var outputStr;
  if (BMI < 18.5) {
    outputStr =
      "Your Body Mass Index (BMI) shows as underweight. You should consider: \
    <ul><li>A caloric intake of " +
      (TDEE + 200) +
      " to support a healthy metabolism, hormone balance and muscle growth.</li>\
    <li>Reducing or eliminating intensive cardio.</li>\
    <li>Introducing or increasing resistance training (weightlifting) to support muscle mass development.</li>\
    <li>Aiming for " +
      Math.round(((TDEE + 200) * 0.3) / 4) +
      "grams of protein per day, with the rest of your calories coming from fat.</li></ul>";
  } else if (BMI >= 18.5 && BMI < 21.5) {
    outputStr =
      "Your BMI shows as the lower range of healthy. If you are aiming for fat loss you should consider:\
    <ul><li>Reducing or eliminating intensive cardio to avoid losing muscle mass.</li>\
    <li>Keeping your calorie intake at around " +
      (TDEE + 100) +
      " calories for a slow and steady increase in body weight.</li>\
    <li>Aiming for " +
      Math.round(((TDEE + 100) * 0.3) / 4) +
      " grams of protein per day, with the rest of your calories coming from fat.</li></ul>\
    If you are aiming for muscle gain you should consider:\
    <ul><li>Eating at around " +
      (TDEE + 300) +
      " calories to avoid gaining unnecessary body fat.</li>\
    <li>Maintaining regular resistance training (weightlifting).</li>\
    <li>Reducing or eliminating intensive cardio to avoid losing muscle mass.</li>\
    <li>Aiming for " +
      Math.round(((TDEE + 300) * 0.3) / 4) +
      " grams of protein per day, with the rest of your calories coming from fat.</li></ul>";
  } else if (BMI >= 21.5 && BMI < 22.5) {
    outputStr =
      "Your BMI shows as healthy. If you are aiming for fat loss you should consider:\
    <ul><li>Reducing or eliminating intensive cardio to avoid losing muscle mass.</li> \
    <li>Keeping a caloric intake between " +
      (TDEE - 200) +
      " and " +
      (TDEE - 100) +
      "</li>\
    <li>Introducing or increasing resistance training (weightlifting) to support muscle mass development. Building muscle will mean you will burn calories more easily and give you the best chance to keep excess body fat away.</li>\
    <li>Aiming for " +
      Math.round(((TDEE - 150) * 0.3) / 4) +
      " grams of protein per day, with the rest of your calories coming from fat.</li></ul>\
    If you are aiming for muscle gain you should consider:\
    <ul><li>Eating at around " +
      (TDEE + 300) +
      " calories.</li> \
    <li>Maintaining regular resistance training (weightlifting).</li> \
    <li>Aiming for " +
      Math.round(((TDEE + 300) * 0.3) / 4) +
      " grams of protein per day, with the rest of your calories coming from fat.</li></ul>";
  } else if (BMI >= 22.5 && BMI <= 25) {
    outputStr =
      "Your BMI shows as the higher end of healthy. If you are aiming for fat loss you should consider:\
    <ul><li>Reducing or eliminating intensive cardio to avoid losing muscle mass.</li> \
    <li>Introducing or increasing resistance training (weightlifting) to support muscle mass development.</li> \
    <li>Building muscle will mean you will burn calories more easily and give you the best chance to keep excess body fat away.</li> \
    <li>Keeping your caloric intake to between " +
      (TDEE - 300) +
      " and " +
      (TDEE - 100) +
      " to ensure a sustainable calorie deficit.</li> \
    <li>Ensuring you have at least " +
      Math.round(((TDEE - 200) * 0.3) / 4) +
      " grams of protein per day, with the rest of your calories coming from fat.</li> \
    <li>Healthy fat loss should happen slowly. Slow and steady will put you in the best position to stay consistent and avoid falling off the wagon, while maintaining a healthy metabolism and hormone balance.</li> \
    <li>Body fat stores a number of toxins which get released into your bloodstream as you burn it. While it appears unlikely that this will cause significant harm directly, it may make you feel awful which would affect your ability to maintain that level of a deficit. \
    Likewise at a significant calorie deficit you may not be getting enough food to support a healthy balance of hormones, which would also make you feel worse than you need to.</li></ul> \
    If you are aiming for muscle gain you should consider: \
    <ul><li>Eating at around " +
      (TDEE + 300) +
      " calories.</li> \
    <li>Maintaining regular resistance training (weightlifting).</li> \
    <li>Aiming for " +
      Math.round(((TDEE + 300) * 0.3) / 4) +
      " grams of protein per day, with the rest of your calories coming from fat.</li></ul> ";
  } else if (BMI >= 25 && BMI < 30) {
    //Put in another conditional here for obese or overweight?
    outputStr =
      "Your BMI shows as overweight. You may see this result if you are very muscular and lean, if this is the case you probably know what you should be doing already!\
    Otherwise if you are aiming for fat loss you should consider:\
    <ul><li>Reducing or eliminating intensive cardio to avoid losing muscle mass.</li> \
    <li>Introducing or increasing resistance training (weightlifting) to support muscle mass development. Building muscle will mean you will burn calories more easily and give you the best chance to keep excess body fat away.</li> \
    <li>Keeping your caloric intake to between " +
      (TDEE - 300) +
      " and " +
      (TDEE - 200) +
      " to ensure a sustainable moderate calorie deficit.</li> \
    <li>Aiming for " +
      Math.round(((TDEE - 250) * 0.3) / 4) +
      " grams of protein per day, with the rest of your calories coming from fat.</li> \
    <li>Healthy fat loss should happen slowly. Slow and steady will put you in the best position to stay consistent and avoid falling off the wagon, while maintaining a healthy metabolism and hormone balance.</li> \
    <li>Body fat stores a number of toxins which get released into your bloodstream as you burn it. While it appears unlikely that this will cause significant harm directly, \
    rapid fat loss may make you feel awful which would affect your ability to maintain that level of deficit. Likewise you may not be getting enough food to support a healthy balance of hormones, \
    which would also make you feel worse than you need to. Finally, rapid fat loss is likely to cause more issues with loose skin.</li></ul> \
    If you are aiming for muscle gain you should consider: \
    <ul><li>Eating at around " +
      TDEE +
      " calories. If you are at this BMI with a high body fat percentage you are likely to be able to build muscle and lose body fat at the same time by eating at this level with additional resistance training (weightlifting).</li> \
    <li>Maintaining regular resistance training.</li> \
    <li>Aiming for " +
      Math.round((TDEE * 0.3) / 4) +
      " grams of protein per day, with the rest of your calories coming from fat.</li></ul> ";
  } else if (BMI >= 30) {
    outputStr =
      "Your BMI shows as obese. You may see this result if you are very muscular and lean, if this is the case you probably know what you should be doing already!\
    Otherwise if you are aiming for fat loss you should consider:\
    <ul><li>Reducing or eliminating intensive cardio to avoid losing muscle mass.</li> \
    <li>Introducing or increasing resistance training (weightlifting) to support muscle mass development. Building muscle will mean you will burn calories more easily and give you the best chance to keep excess body fat away.</li> \
    <li>Keeping your caloric intake to between " +
      (TDEE - 300) +
      " and " +
      (TDEE - 200) +
      " to ensure a sustainable moderate calorie deficit.</li> \
    <li>Aiming for " +
      Math.round(((TDEE - 250) * 0.3) / 4) +
      " grams of protein per day, with the rest of your calories coming from fat.</li> \
    <li>Healthy fat loss should happen slowly. Slow and steady will put you in the best position to stay consistent and avoid falling off the wagon, while maintaining a healthy metabolism and hormone balance.</li> \
    <li>Body fat stores a number of toxins which get released into your bloodstream as you burn it. While it appears unlikely that this will cause significant harm directly, \
    rapid fat loss may make you feel awful which would affect your ability to maintain that level of deficit. Likewise you may not be getting enough food to support a healthy balance of hormones, \
    which would also make you feel worse than you need to. Finally, rapid fat loss is likely to cause more issues with loose skin.</li></ul> \
    If you are aiming for muscle gain you should consider: \
    <ul><li>Eating at around " +
      TDEE +
      " calories. If you are at this BMI with a high body fat percentage you are likely to be able to build muscle and lose body fat at the same time by eating at this level with additional resistance training (weightlifting).</li> \
    <li>Maintaining regular resistance training.</li> \
    <li>Aiming for " +
      Math.round((TDEE * 0.3) / 4) +
      " grams of protein per day, with the rest of your calories coming from fat.</li></ul> ";
  }
  return outputStr;
}
