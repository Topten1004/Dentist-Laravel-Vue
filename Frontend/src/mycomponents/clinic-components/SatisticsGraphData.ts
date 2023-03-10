export const SatisticsGraphChart = {
  series: [
    {
      name: "笑顔コイン",
      data: [0, 5, 6, 8, 25, 9, 11, 24, 26, 18, 9, 12],
    },
    {
      name: "つら〜いコイン",
      data: [0, 3, 1, 2, 8, 1, 5, 1, 11, 4, 7, 5],
    },
    {
      name: "貴方の笑顔コイン",
      data: [0, 2, 3, 4, 8, 3, 5, 9, 7, 8, 3, 10],
    },
    {
      name: "貴方のつら〜いコイン",
      data: [0, 2, 0, 1, 3, 1, 3, 0, 4, 2, 1, 2],
    },
  ],
  chartOptions: {
    colors: ["#21c1d6", "#EC407A","#1565C0","#FFA726"],
    fill: {
      type: "gradient",
      opacity: ["0.1", "0.1"],
    },
    chart: {
      type: "area",
      fontFamily: "Poppins",
      height: 300,
    },
    dataLabels: {
      enabled: false,
    },
    markers: {
      size: 4,
      border: 1,
    },
    legend: {
      show: false,
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    },
    grid: {
      show: true,
      borderColor: "rgba(0, 0, 0, .2)",
      color: "rgba(0, 0, 0, .2)",
      strokeDashArray: 2,
      xaxis: {
        lines: {
          show: false,
        },
      },
      yaxis: {
        lines: {
          show: true,
        },
      },
    },
    stroke: {
      curve: "smooth",
      width: 3,
    },
    tooltip: {
      theme: "dark",
    },
  },
};
