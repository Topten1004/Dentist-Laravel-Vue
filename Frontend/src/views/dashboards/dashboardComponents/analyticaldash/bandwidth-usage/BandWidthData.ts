export const BandwidthChart = {
  series: [
    {
      name: "",
      data: [5, 0, 12, 1, 8, 3, 12, 15],
    },
  ],
  chartOptions: {
    colors: ["#fff"],
    grid: {
      show: false,
      padding: {
        left: 0,
        right: 0,
      },
    },
    chart: {
      toolbar: {
        show: false,
      },
      sparkline: {
        enabled: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: 3,
      colors: "rgba(255, 255, 255, 0.5)",
    },
    tooltip: {
      theme: "dark",
    },
  },
};
