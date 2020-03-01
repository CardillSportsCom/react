/*!

=========================================================
* Black Dashboard PRO React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-pro-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// ##############################
// // // Chart variables
// #############################

// chartExample1 and chartExample2 options
let chart_1_2_3_options = {
  maintainAspectRatio: false,
  legend: {
    display: false
  },
  tooltips: {
    backgroundColor: "#f5f5f5",
    titleFontColor: "#333",
    bodyFontColor: "#666",
    bodySpacing: 4,
    xPadding: 12,
    mode: "nearest",
    intersect: 0,
    position: "nearest"
  },
  responsive: true,
  scales: {
    yAxes: [
      {
        barPercentage: 1.6,
        gridLines: {
          drawBorder: false,
          color: "rgba(29,140,248,0.0)",
          zeroLineColor: "transparent"
        }
      }
    ],
    xAxes: [
      {
        barPercentage: 1.6,
        gridLines: {
          drawBorder: false,
          color: "rgba(29,140,248,0.1)",
          zeroLineColor: "transparent"
        },
        ticks: {
          padding: 20,
          fontColor: "#9a9a9a"
        }
      }
    ]
  }
};

// #########################################
// // // used inside src/views/Dashboard.jsx
// #########################################
let chartExample1 = {
  data1: canvas => {
    let ctx = canvas.getContext("2d");

    let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, "rgba(248,140,29,0.2)");
    gradientStroke.addColorStop(0.4, "rgba(248,140,29,0.0)");
    gradientStroke.addColorStop(0, "rgba(248,140,29,0)"); //orange colors

    return {
      labels: [
        "JAN",
        "FEB",
        "MAR",
        "APR",
        "MAY",
        "JUN",
        "JUL",
        "AUG",
        "SEP",
        "OCT",
        "NOV",
        "DEC"
      ],
      datasets: [
        {
          label: "My First dataset",
          fill: true,
          backgroundColor: gradientStroke,
          borderColor: "#f88c1d",
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "#f88c1d",
          pointBorderColor: "rgba(255,255,255,0)",
          pointHoverBackgroundColor: "#f88c1d",
          pointBorderWidth: 20,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 15,
          pointRadius: 4,
          data: [100, 70, 90, 70, 85, 60, 75, 60, 90, 80, 110, 100]
        }
      ]
    };
  },
  data2: canvas => {
    let ctx = canvas.getContext("2d");

    let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, "rgba(248,140,29,0.2)");
    gradientStroke.addColorStop(0.4, "rgba(248,140,29,0.0)");
    gradientStroke.addColorStop(0, "rgba(248,140,29,0)"); //orange colors

    return {
      labels: [
        "JAN",
        "FEB",
        "MAR",
        "APR",
        "MAY",
        "JUN",
        "JUL",
        "AUG",
        "SEP",
        "OCT",
        "NOV",
        "DEC"
      ],
      datasets: [
        {
          label: "My First dataset",
          fill: true,
          backgroundColor: gradientStroke,
          borderColor: "#f88c1d",
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "#f88c1d",
          pointBorderColor: "rgba(255,255,255,0)",
          pointHoverBackgroundColor: "#f88c1d",
          pointBorderWidth: 20,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 15,
          pointRadius: 4,
          data: [80, 120, 105, 110, 95, 105, 90, 100, 80, 95, 70, 120]
        }
      ]
    };
  },
  data3: canvas => {
    let ctx = canvas.getContext("2d");

    let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, "rgba(29,140,248,0.2)");
    gradientStroke.addColorStop(0.4, "rgba(29,140,248,0.0)");
    gradientStroke.addColorStop(0, "rgba(29,140,248,0)"); //blue colors

    return {
      labels: [
        "JAN",
        "FEB",
        "MAR",
        "APR",
        "MAY",
        "JUN",
        "JUL",
        "AUG",
        "SEP",
        "OCT",
        "NOV",
        "DEC"
      ],
      datasets: [
        {
          label: "My First dataset",
          fill: true,
          backgroundColor: gradientStroke,
          borderColor: "#1f8ef1",
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "#1f8ef1",
          pointBorderColor: "rgba(255,255,255,0)",
          pointHoverBackgroundColor: "#1f8ef1",
          pointBorderWidth: 20,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 15,
          pointRadius: 4,
          data: [60, 80, 65, 130, 80, 105, 90, 130, 70, 115, 60, 130]
        }
      ]
    };
  },
  options: chart_1_2_3_options
};

// #########################################
// // // used inside src/views/Dashboard.jsx
// #########################################

let winsChartData = (xValues, yValues) => {
  return {
    data: canvas => {
      let ctx = canvas.getContext("2d");

      let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

      gradientStroke.addColorStop(1, "rgba(248,140,29,0.2)");
      gradientStroke.addColorStop(0.4, "rgba(248,140,29,0.0)");
      gradientStroke.addColorStop(0, "rgba(248,140,29,0)"); //orange colors

      return {
        labels: xValues,
        datasets: [
          {
            label: "Wins",
            fill: true,
            backgroundColor: gradientStroke,
            borderColor: "#f88c1d",
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: "#f88c1d",
            pointBorderColor: "rgba(255,255,255,0)",
            pointHoverBackgroundColor: "#f88c1d",
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 4,
            data: yValues
          }
        ]
      };
    },

    options: chart_1_2_3_options
  };
};

let gameDays = ["JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
let points = [80, 100, 70, 80, 120, 80];

let pointsChartData = (xValues, yValues) => {
  return {
    data: canvas => {
      let ctx = canvas.getContext("2d");

      let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

      gradientStroke.addColorStop(1, "rgba(29,140,248,0.2)");
      gradientStroke.addColorStop(0.4, "rgba(29,140,248,0.0)");
      gradientStroke.addColorStop(0, "rgba(29,140,248,0)"); //blue colors

      return {
        labels: xValues,
        datasets: [
          {
            label: "Points",
            fill: true,
            backgroundColor: gradientStroke,
            borderColor: "#1f8ef1",
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: "#1f8ef1",
            pointBorderColor: "rgba(255,255,255,0)",
            pointHoverBackgroundColor: "#1f8ef1",
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 4,
            data: yValues
          }
        ]
      };
    },
    options: chart_1_2_3_options
  };
};

let assistsChartData = (xValues, yValues) => {
  return {
    data: canvas => {
      let ctx = canvas.getContext("2d");

      let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

      gradientStroke.addColorStop(1, "rgba(29, 248, 140,0.2)");
      gradientStroke.addColorStop(0.4, "rgba(29, 248, 140,0.0)");
      gradientStroke.addColorStop(0, "rgba(29, 248, 140,0)"); //green colors

      return {
        labels: xValues,
        datasets: [
          {
            label: "Assists",
            fill: true,
            backgroundColor: gradientStroke,
            borderColor: "#1df88c",
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: "#1df88c",
            pointBorderColor: "rgba(255,255,255,0)",
            pointHoverBackgroundColor: "#1df88c",
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 4,
            data: yValues
          }
        ]
      };
    },
    options: chart_1_2_3_options
  };
};

let reboundsChartData = (xValues, yValues) => {
  return {
    data: canvas => {
      let ctx = canvas.getContext("2d");

      let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

      gradientStroke.addColorStop(1, "rgba(140, 29, 248,0.2)");
      gradientStroke.addColorStop(0.4, "rgba(140, 29, 248,0.0)");
      gradientStroke.addColorStop(0, "rgba(140, 29, 248,0)"); //purple colors

      return {
        labels: xValues,
        datasets: [
          {
            label: "Rebounds",
            fill: true,
            backgroundColor: gradientStroke,
            borderColor: "#8c1df8",
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: "#8c1df8",
            pointBorderColor: "rgba(255,255,255,0)",
            pointHoverBackgroundColor: "#8c1df8",
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 4,
            data: yValues
          }
        ]
      };
    },
    options: chart_1_2_3_options
  };
};

let stealsChartData = (xValues, yValues) => {
  return {
    data: canvas => {
      let ctx = canvas.getContext("2d");

      let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

      gradientStroke.addColorStop(1, "rgba(29,140,248,0.2)");
      gradientStroke.addColorStop(0.4, "rgba(29,140,248,0.0)");
      gradientStroke.addColorStop(0, "rgba(29,140,248,0)"); //blue colors

      return {
        labels: xValues,
        datasets: [
          {
            label: "Steal",
            fill: true,
            backgroundColor: gradientStroke,
            borderColor: "#1f8ef1",
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: "#1f8ef1",
            pointBorderColor: "rgba(255,255,255,0)",
            pointHoverBackgroundColor: "#1f8ef1",
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 4,
            data: yValues
          }
        ]
      };
    },
    options: chart_1_2_3_options
  };
};

let blocksChartData = (xValues, yValues) => {
  return {
    data: canvas => {
      let ctx = canvas.getContext("2d");

      let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

      gradientStroke.addColorStop(1, "rgba(29, 248, 140,0.2)");
      gradientStroke.addColorStop(0.4, "rgba(29, 248, 140,0.0)");
      gradientStroke.addColorStop(0, "rgba(29, 248, 140,0)"); //green colors

      return {
        labels: xValues,
        datasets: [
          {
            label: "Blocks",
            fill: true,
            backgroundColor: gradientStroke,
            borderColor: "#1df88c",
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: "#1df88c",
            pointBorderColor: "rgba(255,255,255,0)",
            pointHoverBackgroundColor: "#1df88c",
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 4,
            data: yValues
          }
        ]
      };
    },
    options: chart_1_2_3_options
  };
};

let turnoversChartData = (xValues, yValues) => {
  return {
    data: canvas => {
      let ctx = canvas.getContext("2d");

      let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

      gradientStroke.addColorStop(1, "rgba(140, 29, 248,0.2)");
      gradientStroke.addColorStop(0.4, "rgba(140, 29, 248,0.0)");
      gradientStroke.addColorStop(0, "rgba(140, 29, 248,0)"); //purple colors

      return {
        labels: xValues,
        datasets: [
          {
            label: "Turnovers",
            fill: true,
            backgroundColor: gradientStroke,
            borderColor: "#8c1df8",
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: "#8c1df8",
            pointBorderColor: "rgba(255,255,255,0)",
            pointHoverBackgroundColor: "#8c1df8",
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 4,
            data: yValues
          }
        ]
      };
    },
    options: chart_1_2_3_options
  };
};

let blueChart = {
  data: canvas => {
    let ctx = canvas.getContext("2d");

    let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, "rgba(29,140,248,0.2)");
    gradientStroke.addColorStop(0.4, "rgba(29,140,248,0.0)");
    gradientStroke.addColorStop(0, "rgba(29,140,248,0)"); //blue colors

    return {
      labels: gameDays,
      datasets: [
        {
          label: "Data",
          fill: true,
          backgroundColor: gradientStroke,
          borderColor: "#1f8ef1",
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "#1f8ef1",
          pointBorderColor: "rgba(255,255,255,0)",
          pointHoverBackgroundColor: "#1f8ef1",
          pointBorderWidth: 20,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 15,
          pointRadius: 4,
          data: points
        }
      ]
    };
  },
  options: chart_1_2_3_options
};

let orangeChart = {
  data: canvas => {
    let ctx = canvas.getContext("2d");

    let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, "rgba(248,140,29,0.2)");
    gradientStroke.addColorStop(0.4, "rgba(248,140,29,0.0)");
    gradientStroke.addColorStop(0, "rgba(248,140,29,0)"); //orange colors

    return {
      labels: ["JUL", "AUG", "SEP", "OCT", "NOV", "DEC"],
      datasets: [
        {
          label: "Data",
          fill: true,
          backgroundColor: gradientStroke,
          borderColor: "#f88c1d",
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "#f88c1d",
          pointBorderColor: "rgba(255,255,255,0)",
          pointHoverBackgroundColor: "#f88c1d",
          pointBorderWidth: 20,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 15,
          pointRadius: 4,
          data: [80, 100, 70, 80, 120, 80]
        }
      ]
    };
  },
  options: chart_1_2_3_options
};

let greenChart = {
  data: canvas => {
    let ctx = canvas.getContext("2d");

    let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, "rgba(29, 248, 140,0.2)");
    gradientStroke.addColorStop(0.4, "rgba(29, 248, 140,0.0)");
    gradientStroke.addColorStop(0, "rgba(29, 248, 140,0)"); //green colors

    return {
      labels: ["JUL", "AUG", "SEP", "OCT", "NOV", "DEC"],
      datasets: [
        {
          label: "Data",
          fill: true,
          backgroundColor: gradientStroke,
          borderColor: "#1df88c",
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "#1df88c",
          pointBorderColor: "rgba(255,255,255,0)",
          pointHoverBackgroundColor: "#1df88c",
          pointBorderWidth: 20,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 15,
          pointRadius: 4,
          data: [80, 100, 70, 80, 120, 80]
        }
      ]
    };
  },
  options: chart_1_2_3_options
};

let purpleChart = {
  data: canvas => {
    let ctx = canvas.getContext("2d");

    let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, "rgba(140, 29, 248,0.2)");
    gradientStroke.addColorStop(0.4, "rgba(140, 29, 248,0.0)");
    gradientStroke.addColorStop(0, "rgba(140, 29, 248,0)"); //purple colors

    return {
      labels: ["JUL", "AUG", "SEP", "OCT", "NOV", "DEC"],
      datasets: [
        {
          label: "Data",
          fill: true,
          backgroundColor: gradientStroke,
          borderColor: "#8c1df8",
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "#8c1df8",
          pointBorderColor: "rgba(255,255,255,0)",
          pointHoverBackgroundColor: "#8c1df8",
          pointBorderWidth: 20,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 15,
          pointRadius: 4,
          data: [80, 100, 70, 80, 120, 80]
        }
      ]
    };
  },
  options: chart_1_2_3_options
};

module.exports = {
  chartExample1, // in src/views/Dashboard.jsx
  blueChart, // in src/views/Dashboard.jsx,
  orangeChart,
  greenChart,
  purpleChart,
  winsChartData,
  pointsChartData,
  assistsChartData,
  reboundsChartData,
  stealsChartData,
  blocksChartData,
  turnoversChartData
};
