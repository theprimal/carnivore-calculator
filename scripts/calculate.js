var heightUnits;
var weightUnits;

function initialise() {
  initialiseVars();
  //initialiseGauge();
}

function initialiseVars() {
  heightUnits = "ft";
  weightUnits = "lbs";
}

function passCalculateTDEE() {
  var gender = document.getElementById("gender").value;
  var age = Number(document.getElementById("age").value);
  var weight = Number(document.getElementById("weight").value);
  var heightcm = Number(document.getElementById("heightcm").value);
  var heightft = Number(document.getElementById("heightft").value);
  var heightin = Number(document.getElementById("heightin").value);
  var PAL = document.getElementById("PAL").value;

  var height;

  //Convert units to cm/kgs for calculations
  if (heightUnits == "ft") {
    height = (heightft * 12 + heightin) * 2.54;
    console.log("calculated height: ", height);
    console.log("ft: ", heightft, "in: ", heightin);
    console.log(heightft * 12, heightin);
  } else {
    height = heightcm;
  }
  if (weightUnits == "lbs") {
    weight = weight * 0.453592;
    console.log("calculated weight: ", weight);
  }

  var BMI = calculateBMI(weight, height); //BMI after weight/height normalised

  console.log(gender, age, weight, height, PAL);
  if (age != "" && weight != "" && height != "") {
    var output = calculateTDEE(gender, age, weight, height, PAL, true);
    document.getElementById("answer").innerHTML =
      "Baseline calorie goal (TDEE, Total Daily Energy Expenditure): " +
      output +
      "<br> Body Mass Index (BMI): " +
      BMI;
    document.getElementById("guidance").innerHTML = returnGuidanceNoCals(
      BMI,
      output,
      height,
      weight
    );
    document.getElementById("results").style.display = "block";
    window.GlobalBMI = BMI;
  } else {
    document.getElementById("answer").innerHTML =
      "Enter height, weight and age.";
  }
  console.log(output);
}

function switchHeightUnits() {
  console.log("clicked");
  var cm = document.getElementById("heightCmDiv"); //DUH REMEMBER QUOTES
  var ft = document.getElementById("heightftDiv");

  console.log("pre conditional unit is", heightUnits);

  if (ft.style.display === "none") {
    //hide
    ft.style.display = "flex";
    cm.style.display = "none";
    heightUnits = "ft";
    console.log("current units: ", heightUnits);
  } else {
    ft.style.display = "none";
    cm.style.display = "flex";
    heightUnits = "cm";

    console.log("current units: ", heightUnits);
  }
}

function switchWeightUnits() {
  var lbs = document.getElementById("weightLbsDiv");
  var kgs = document.getElementById("weightKgDiv");

  if (lbs.style.display === "none") {
    lbs.style.display = "inline";
    kgs.style.display = "none";
    weightUnits = "lbs";
    console.log(weightUnits);
    console.log(lbs.style.display);
    console.log(kgs.style.display);
  } else {
    lbs.style.display = "none";
    kgs.style.display = "inline";
    weightUnits = "kgs";
    console.log(weightUnits);
    console.log(lbs.style.display);
    console.log(kgs.style.display);
  }
}
