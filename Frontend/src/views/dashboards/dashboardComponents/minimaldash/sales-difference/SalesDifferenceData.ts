export const differenceChart = {
  series: [25, 10],
  chartOptions: {
    labels: ["Increase", "Decrease"],
    dataLabels: {
      enabled: false,
    },
    grid: {
      padding: {
        left: 0,
        right: 0,
      },
    },
    chart: {},
    plotOptions: {
      pie: {
        donut: {
          size: "60px",
        },
      },
    },
    stroke: {
      width: 0,
    },
    legend: {
      show: false,
    },
    colors: ["rgb(38, 198, 218)", "rgb(242, 244, 248)"],
    tooltip: {
      enabled: true,
      theme: "dark",
      fillSeriesColor: false,
    },
  },
};
