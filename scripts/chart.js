window.feed = function (callback) {
  var tick = {};
  tick.plot0 = Math.ceil(window.GlobalBMI || 10);
  callback(JSON.stringify(tick));
};

updateChart = (BMI) => {
  var tick = {};
  tick.plot0 = Math.ceil(BMI);
  zingchart.exec("bmiChart", "modify", { tick });
};

var myConfig = {
  type: "gauge",
  globals: {
    fontSize: 15,
  },
  plotarea: {
    marginTop: 50,
    marginRight: 20,
    marginLeft: 20,
    marginBottom: 50,
  },
  plot: {
    size: "100%",
    valueBox: {
      placement: "center",
      text: "%v", //default
      fontSize: 25,
      rules: [
        {
          rule: "%v >= 34.9",
          text: "%v<br>Extremely Obese",
        },
        {
          rule: "%v < 34.9 && %v > 29.9",
          text: "%v<br>Obese",
        },
        {
          rule: "%v < 29.9 && %v > 24.9",
          text: "%v<br>Overweight",
        },
        {
          rule: "%v < 24.9 && %v > 18.5",
          text: "%v<br>Normal",
        },
        {
          rule: "%v <  18.5",
          text: "%v<br>Under Weight",
        },
      ],
    },
  },
  tooltip: {
    borderRadius: 5,
  },
  scaleR: {
    aperture: 180,
    minValue: 10,
    maxValue: 50,
    step: 5,
    center: {
      visible: false,
    },
    tick: {
      visible: false,
    },
    item: {
      offsetR: 0,
      rules: [
        {
          rule: "%i == 9",
          offsetX: 15,
        },
      ],
    },
    labels: ["", "", "18.5", "24.9", "29.9", "34.9", ""],
    ring: {
      size: 50,
      rules: [
        {
          rule: "%v <= 18.5",
          backgroundColor: "#29B6F6",
        },
        {
          rule: "%v > 18.5 && %v < 24.9",
          backgroundColor: "#20c997",
        },
        {
          rule: "%v >= 24.9 && %v < 29.9",
          backgroundColor: "#FFA726",
        },
        {
          rule: "%v >= 29.9 && %v < 34.9",
          backgroundColor: "#EF5350",
        },
        {
          rule: "%v >= 34.9",
          backgroundColor: "#E53935",
        },
      ],
    },
  },
  refresh: {
    type: "feed",
    transport: "js",
    url: "feed()",
    interval: 1500,
    resetTimeout: 1000,
  },
  series: [
    {
      values: [10],
      backgroundColor: "black",
      indicator: [10, 10, 10, 10, 0.75],
      animation: {
        effect: 2,
        method: 1,
        sequence: 4,
        speed: 900,
      },
    },
  ],
};

zingchart.render({
  id: "bmiChart",
  data: myConfig,
  height: 400,
  width: "100%",
});
